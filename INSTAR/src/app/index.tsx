import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function AppIndex() {
  const { isAuthenticated } = useAuth();

  return (
    <Redirect href={isAuthenticated ? "/(authenticated)/(tabs)/home" : "/(unauthenticated)/login"} />
  );
}
