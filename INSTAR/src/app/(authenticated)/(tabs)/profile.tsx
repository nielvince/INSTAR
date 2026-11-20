import { ScrollView, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { profile } from "@/data/profile";

export default function ProfileTab() {
  return (
    <SafeAreaView className="flex-1 bg-[#f5f3ff]">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* header lives inside the scroll content so the card can overlap it without being clipped */}
        <View className="bg-violet-600 px-5 pb-14 pt-6">
          <Text className="text-2xl font-black text-white">Profile</Text>
        </View>

        <View className="mx-4 rounded-[32px] bg-white p-5" style={{ marginTop: -32 }}>
          <View className="flex-row items-center justify-between">
            <Image
              source={profile.avatar}
              contentFit="cover"
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                borderWidth: 4,
                borderColor: "#ede9fe",
              }}
            />
            <Pressable className="rounded-full bg-black px-4 py-2">
              <Text className="text-sm font-bold text-white">Edit Profile</Text>
            </Pressable>
          </View>

          <Text className="mt-4 text-2xl font-black text-slate-900">{profile.name}</Text>
          <Text className="text-base font-semibold text-violet-600">{profile.username}</Text>
          <Text className="mt-2 text-sm leading-6 text-slate-600">{profile.bio}</Text>

          <View className="mt-5">
            <Text className="text-sm text-slate-600">📍 {profile.location}</Text>
            <Text className="mt-1 text-sm text-slate-600">🌐 {profile.website}</Text>
            <Text className="mt-1 text-sm text-slate-600">💼 {profile.role}</Text>
          </View>

          <View className="mt-6 flex-row justify-between border-t border-slate-100 pt-5">
            <View className="items-center">
              <Text className="text-xl font-black text-slate-900">{profile.stats.followers}</Text>
              <Text className="text-xs text-slate-500">Followers</Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-black text-slate-900">{profile.stats.following}</Text>
              <Text className="text-xs text-slate-500">Following</Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-black text-slate-900">{profile.stats.posts}</Text>
              <Text className="text-xs text-slate-500">Posts</Text>
            </View>
          </View>
        </View>

        <View className="mx-4 mt-5 rounded-[28px] bg-white p-4">
          <Text className="mb-3 text-lg font-black text-slate-900">Recent Highlights</Text>
          <View style={{ flexDirection: "row" }}>
            {profile.gallery.map((image, index) => (
              <Image
                key={String(index)}
                source={image}
                contentFit="cover"
                style={{
                  flex: 1,
                  height: 128,
                  borderRadius: 16,
                  marginRight: index < profile.gallery.length - 1 ? 8 : 0,
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}