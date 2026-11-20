import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import { colors } from "@/constants/colors";
import type { Pin } from "@/data/pins";
import PinCard from "./PinCard";

type Props = {
  pins: Pin[];
  onEndReached?: () => void;
  onRefresh?: () => void;
  onHide?: (id: string) => void;
  ListHeader?: ReactNode;
  ListEmpty?: ReactNode;
};

/** Rough extra height (relative to card width) for the text/buttons around each image. */
const TEXT_ALLOWANCE = 0.42;

export default function MasonryFeed({
  pins,
  onEndReached,
  onRefresh,
  onHide,
  ListHeader,
  ListEmpty,
}: Props) {
  const [refreshing, setRefreshing] = useState(false);
  const endLock = useRef(false);

  // Put each pin in whichever of the two columns is currently shorter.
  const [left, right] = useMemo(() => {
    const cols: [Pin[], Pin[]] = [[], []];
    const heights = [0, 0];
    for (const pin of pins) {
      const i = heights[0] <= heights[1] ? 0 : 1;
      cols[i].push(pin);
      heights[i] += 1 / pin.ratio + TEXT_ALLOWANCE;
    }
    return cols;
  }, [pins]);

  const handleScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!onEndReached) return;
      const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
      const nearEnd = layoutMeasurement.height + contentOffset.y >= contentSize.height - 800;
      if (nearEnd && !endLock.current) {
        endLock.current = true;
        onEndReached();
        setTimeout(() => (endLock.current = false), 600);
      }
    },
    [onEndReached]
  );

  const handleRefresh = () => {
    setRefreshing(true);
    onRefresh?.();
    setTimeout(() => setRefreshing(false), 700);
  };

  return (
    <ScrollView
      className="flex-1 bg-light"
      showsVerticalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={64}
      contentContainerStyle={{ paddingBottom: 24 }}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={colors.accent}
            colors={[colors.accent]}
          />
        ) : undefined
      }
    >
      {ListHeader}
      {pins.length === 0 ? (
        ListEmpty
      ) : (
        <View className="flex-row px-2 pt-2">
          <View className="mr-1 flex-1">
            {left.map((p) => (
              <PinCard key={p.id} pin={p} onHide={onHide} />
            ))}
          </View>
          <View className="ml-1 flex-1">
            {right.map((p) => (
              <PinCard key={p.id} pin={p} onHide={onHide} />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
