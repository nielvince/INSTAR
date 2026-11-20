import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { useSavedPins } from "@/context/SavedPins";
import type { Pin } from "@/data/pins";

type Props = {
  pin: Pin;
  onHide?: (id: string) => void;
};

export default function PinCard({ pin, onHide }: Props) {
  const { isSaved, toggleSave } = useSavedPins();
  const [menuOpen, setMenuOpen] = useState(false);
  const liked = isSaved(pin.id);
  const imageAspectRatio = pin.ratio > 0 ? pin.ratio : 1;

  return (
    <View className="mb-2 overflow-hidden rounded-xl bg-white">
      {/* top: avatar, name, menu */}
      <View className="flex-row items-center px-2 pt-2">
        <Image
          source={{ uri: pin.creator.avatarUrl }}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
        <View className="ml-2 flex-1">
          <Text numberOfLines={1} className="text-[12px] font-bold text-ink">
            {pin.creator.name}
          </Text>
          <View className="flex-row items-center">
            <Text className="mr-1 text-[10px] text-muted">Just now ·</Text>
            <Ionicons name="earth" size={10} color={colors.muted} />
          </View>
        </View>
        <Pressable onPress={() => setMenuOpen(true)} hitSlop={10}>
          <Ionicons name="ellipsis-horizontal" size={18} color={colors.muted} />
        </Pressable>
      </View>

      {/* caption */}
      <Text numberOfLines={2} className="px-2 pb-2 pt-1.5 text-[13px] text-ink">
        {pin.title}
      </Text>

      {/* photo */}
      <Image
        source={pin.image}
        style={{ width: "100%", aspectRatio: imageAspectRatio }}
        contentFit="cover"
        transition={250}
      />

      {/* actions */}
      <View className="flex-row items-center justify-between border-t border-line px-2.5 py-2">
        <Pressable onPress={() => toggleSave(pin)} hitSlop={6} className="flex-row items-center">
          <Ionicons
            name={liked ? "thumbs-up" : "thumbs-up-outline"}
            size={18}
            color={liked ? colors.accent : colors.muted}
          />
          <Text
            className={`ml-1 text-[12px] font-semibold ${liked ? "text-accent" : "text-muted"}`}
          >
            {liked ? "Liked" : "Like"}
          </Text>
        </Pressable>
        <Ionicons name="chatbubble-outline" size={18} color={colors.muted} />
        <Ionicons name="arrow-redo-outline" size={19} color={colors.muted} />
      </View>

      <Modal
        visible={menuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <Pressable className="flex-1 justify-end bg-black/40" onPress={() => setMenuOpen(false)}>
          <Pressable className="rounded-t-3xl bg-white px-5 pb-10 pt-3">
            <View className="mb-3 h-1 w-10 self-center rounded-full bg-line" />
            <Text numberOfLines={1} className="mb-2 text-center text-base font-bold text-ink">
              {pin.title}
            </Text>
            <MenuRow
              icon={liked ? "bookmark" : "bookmark-outline"}
              label={liked ? "Unsave post" : "Save post"}
              onPress={() => {
                toggleSave(pin);
                setMenuOpen(false);
              }}
            />
            <MenuRow
              icon="eye-off-outline"
              label="Hide post"
              onPress={() => {
                setMenuOpen(false);
                onHide?.(pin.id);
              }}
            />
            <MenuRow icon="flag-outline" label="Report post" onPress={() => setMenuOpen(false)} />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

function MenuRow({
  icon,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} className="flex-row items-center rounded-xl px-2 py-3.5 active:bg-light">
      <Ionicons name={icon} size={22} color={colors.ink} />
      <Text className="ml-4 text-base font-medium text-ink">{label}</Text>
    </Pressable>
  );
}
