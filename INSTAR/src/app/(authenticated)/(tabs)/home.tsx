import { ScrollView, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { feedPosts, profile } from "@/data/profile";

export default function HomeTab() {
  return (
    <SafeAreaView className="flex-1 bg-[#f5f3ff]">
      <View className="bg-violet-600 px-5 pb-4 pt-6">
        <Text className="text-2xl font-black text-white">hunnypie</Text>
        <Text className="mt-1 text-sm text-violet-100">Your daily inspiration</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-3 pb-4 pt-3">
          {feedPosts.map((post) => (
            <View
              key={post.id}
              className="mb-4 rounded-[22px] bg-white p-3"
              style={{
                overflow: "hidden",
                shadowColor: "#94a3b8",
                shadowOpacity: 0.2,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
              }}
            >
              {/* header: avatar, name, follow */}
              <View className="flex-row items-center">
                <Image
                  source={post.avatar}
                  contentFit="cover"
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
                <View className="ml-3 flex-1">
                  <Text className="text-sm font-bold text-slate-900">
                    {post.name === profile.name ? "Niel Vince Nangcas" : post.name}
                  </Text>
                  <Text className="text-[11px] text-slate-500">{post.username}</Text>
                </View>
                <Pressable className="rounded-full bg-violet-50 px-2.5 py-1.5">
                  <Text className="text-[11px] font-bold text-violet-600">Follow</Text>
                </Pressable>
              </View>

              {/* caption */}
              <Text className="mt-2 text-[13px] leading-5 text-slate-700">{post.text}</Text>

              {/* photo: fixed width + aspect ratio set with plain style (not className) */}
              <View
                style={{
                  marginTop: 12,
                  width: "100%",
                  aspectRatio: 4 / 5,
                  borderRadius: 18,
                  overflow: "hidden",
                  backgroundColor: "#ede9fe",
                }}
              >
                <Image
                  source={post.image}
                  contentFit="cover"
                  transition={200}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              {/* actions */}
              <View className="mt-3 flex-row items-center justify-between border-t border-slate-100 pt-3">
                <View className="flex-row items-center">
                  <Text className="mr-1.5 text-base">❤️</Text>
                  <Text className="text-[12px] font-medium text-slate-600">{post.likes}</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="mr-1.5 text-base">💬</Text>
                  <Text className="text-[12px] font-medium text-slate-600">{post.comments}</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="mr-1.5 text-base">↗️</Text>
                  <Text className="text-[12px] font-medium text-slate-600">{post.shares}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}