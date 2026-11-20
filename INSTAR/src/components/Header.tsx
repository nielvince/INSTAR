import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

function RoundButton({ name }: { name: keyof typeof Ionicons.glyphMap }) {
  return (
    <View className="ml-2 h-10 w-10 items-center justify-center rounded-full bg-light">
      <Ionicons name={name} size={22} color={colors.accent} />
    </View>
  );
}

export default function Header() {
  return (
    <View className="flex-row items-center justify-between bg-white px-4 pb-2 pt-1">
      <Text className="text-[30px] font-extrabold text-accent" style={{ letterSpacing: -1.2 , color: "#cfcc00"}}>
        INSTAR
      </Text>
      <View className="flex-row items-center">
        <RoundButton name="add" />
        <RoundButton name="search" />
        <RoundButton name="chatbubble-ellipses" />
      </View>
    </View>
  );
}
