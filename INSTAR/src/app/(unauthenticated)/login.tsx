import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/context/AuthContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      return;
    }

    login();
    router.replace("/(authenticated)/(tabs)/home");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f5f3ff]">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
          paddingVertical: 32,
        }}
      >
        <View className="items-center mb-8">
          <View className="mb-4 h-16 w-16 items-center justify-center rounded-2xl bg-violet-600">
            <Text className="text-3xl font-black text-white">H</Text>
          </View>
          <Text className="text-3xl font-black text-slate-900">Welcome back</Text>
          <Text className="mt-2 text-base text-slate-500">Login to continue your story.</Text>
        </View>

        <View className="rounded-[30px] bg-white p-5">
          <Text className="mb-5 text-xl font-bold text-slate-900">Sign in</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email address"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            autoCapitalize="none"
            className="mb-4 rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 text-base text-slate-800"
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3 text-base text-slate-800"
          />

          <Pressable onPress={handleLogin} className="mt-6 items-center rounded-2xl bg-violet-600 px-4 py-3">
            <Text className="text-base font-bold text-white">Login</Text>
          </Pressable>

          <View className="mt-6 flex-row items-center justify-center">
            <Text className="text-sm text-slate-500">New here? </Text>
            <Link href="/(unauthenticated)/register" asChild>
              <Pressable>
                <Text className="text-sm font-bold text-violet-700">Register</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
