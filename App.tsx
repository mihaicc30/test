import React, { useState } from "react";
import { Button, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

type User = string | null

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function HomeScreen({ route, navigation }) {
  const [user, setUser] = useState<User>(null);

  const dothis = () => {
    navigation.navigate("Login", {
      user: user,
    });
  };

  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      {/* <Image source={require('./10z.PNG')}  /> */}
      <Text>Open up Aaaaaaapp.tsx to start working on your app!</Text>
      <Button title="Go to Login" onPress={dothis} />
    </View>
  );
}

function LoginScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text>hi {route.params.user.name}</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function RegisterScreen({ route, navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text>Open up Aaaaaaapp.tsx to start working on your app!</Text>
    </View>
  );
}
function DashboardScreen({ route, navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400">
      <Text>Open up Aaaaaaapp.tsx to start working on your app!</Text>
    </View>
  );
}
