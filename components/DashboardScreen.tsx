import React from "react";
import { View, Text, Image, Button } from "react-native";

export function DashboardScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View className="flex-1 justify-center bg-white">
      <Image source={require("../img/10zyme_logo.jpg")} className="mx-auto rounded-full scale-[.5] mb-auto" />
      <Text className="text-xl text-center">Welcome</Text>
      <Text className="text-center">{user?.name}</Text>
      <Text className="mb-auto text-center">{user?.email}</Text>

      <Button
        title="Logout"
        onPress={() =>
          navigation.navigate("Home", {
            user: { name: "", email: "", password: "" },
          })
        }
      />
    </View>
  );
}
