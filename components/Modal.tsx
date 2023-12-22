import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import {
  ModalScreenRouteProp,
  NavigationProps,
  RootStackParamList,
} from "../App";
import { RouteProp, useRoute } from "@react-navigation/native";
import colors from "../config/colors";

const Modal: React.FC<ModalScreenRouteProp> = ({
  navigation,
}: NavigationProps) => {
  const route = useRoute();
  const type = (route.params as RootStackParamList["Modal"])?.type;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colors.white }}>This is a modal! {type}</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Modal;
