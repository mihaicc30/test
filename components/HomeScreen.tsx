import React from "react";
import { Button, View, Image, TouchableOpacity } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <>
    <View className="flex-1 flex items-center justify-center bg-white">
      <Image source={require("../img/10z.jpg")} className="rounded-full scale-[.5]" />
    </View>
    <View className="flex-1 flex justify-center bg-white">
      <TouchableOpacity>
        <Button title="Get Started!" onPress={() => navigation.navigate("Login")} />
      </TouchableOpacity>
    </View>
    </>
  );
}
