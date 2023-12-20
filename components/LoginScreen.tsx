import React, { useState } from "react";
import { SafeAreaView, Button, View, Text, TextInput, TouchableOpacity } from "react-native";
import { User, Errors } from "../App";

export function LoginScreen({ navigation }) {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors | null>(null);

  const handleSubmit = () => {
    if ((!errors && user.name !== "" && user.email !== "" && user.password !== "") || (errors?.name === "" && errors?.email === "" && errors?.password === "")) {
      navigation.navigate("Dashboard", {
        user,
      });
    } else {
      validateEmail(user.email);
      validateNameAndPassword(user.name, "name");
      validateNameAndPassword(user.password, "password");
    }
  };

  const handleChange = (e: string | null, field: string) => {
    setUser((prevValues) => ({
      ...prevValues,
      [field]: e,
    }));
    // console.log(user);
  };

  const validateEmail = (text: string) => {
    // console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // just a basic email regex
    if (reg.test(text) === false) {
      // console.log("Email is invalid.");
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is invalid." }));
      return false;
    } else {
      // console.log("Email is valid");
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const validateNameAndPassword = (text: string, field: string) => {
    if (text.length <= 3) {
      // console.log(`${field} is invalid.`);
      setErrors((prevErrors) => ({ ...prevErrors, [field]: `${field} is too short.` }));
      return false;
    } else {
      // console.log(`${field} is invalid.`);
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }
  };

  return (
    <View className="flex-1 flex justify-center bg-white" >
      <Text className="text-xl mb-10 text-center">Login</Text>

      <SafeAreaView className="m-2 flex p-2">
        {errors?.name && <Text className="px-4 uppercase text-xs text-start text-red-500">{errors?.name}</Text>}
        <TextInput
          className={`p-4 m-2 border-2 border-black rounded-xl`}
          value={user?.name}
          onChangeText={(e) => {
            validateNameAndPassword(e, "name"), handleChange(e, "name");
          }}
          placeholder="Enter your name..."
        />

        {errors?.email && <Text className="px-4 uppercase text-xs text-start text-red-500">{errors?.email}</Text>}
        <TextInput
          inputMode="email"
          className={`p-4 m-2 border-2 border-black rounded-xl`}
          value={user?.email}
          onChangeText={(e) => {
            validateEmail(e);
            handleChange(e, "email");
          }}
          placeholder="Enter your email..."
        />

        {errors?.password && <Text className="px-4 uppercase text-xs text-start text-red-500">{errors?.password}</Text>}
        <TextInput
          secureTextEntry={true}
          className={`p-4 m-2 border-2 border-black rounded-xl`}
          value={user?.password}
          onChangeText={(e) => {
            validateNameAndPassword(e, "password");
            handleChange(e, "password");
          }}
          placeholder="Enter your password..."
        />
      </SafeAreaView>
      <TouchableOpacity className="mt-10">
        <Button title="Submit" onPress={handleSubmit} />
      </TouchableOpacity>
    </View>
  );
}
