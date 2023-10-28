import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { NavigationProps } from "../App";

export default function Play({ navigation }: NavigationProps) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={{ color: "#000" }}>3</Text>
      </View>
    </SafeAreaView>
  );
}
