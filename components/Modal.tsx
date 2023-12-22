import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  ModalScreenRouteProp,
  NavigationProps,
  RootStackParamList,
} from "../App";
import { useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { Button } from "@rneui/base";

const Modal: React.FC<ModalScreenRouteProp> = ({
  navigation,
}: NavigationProps) => {
  const route = useRoute();
  const type = (route.params as RootStackParamList["Modal"])?.type;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Text style={{ color: colors.white }}>This is a modal! {type}</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          // width: "100%",
          justifyContent: "center",
        }}>
        <Button
          onPress={() => navigation.goBack()}
          title="Close"
          type="solid"
          size="lg"
          style={{ width: 125 }}
        />
        <Button
          onPress={() => navigation.goBack()}
          title="Confirm"
          type="solid"
          size="lg"
          style={{ width: 125 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Modal;
