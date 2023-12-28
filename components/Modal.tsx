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
        backgroundColor: colors.modalColor,
      }}>
      {type === "confirm" && (
        <>
          <Text style={{ color: colors.white, fontSize: 24 }}>
            Are you sure you would like to quit?
          </Text>
          <Text
            style={{
              color: colors.error,
              fontSize: 24,
              marginBottom: 24,
            }}>
            Your progress will not be saved!
          </Text>
        </>
      )}
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
        }}>
        <Button
          onPress={() => navigation.goBack()}
          title="Close"
          type="outline"
          size="lg"
          titleStyle={{ fontWeight: "700" }}
          style={{ width: 125 }}
        />
        <Button
          onPress={() => navigation.navigate("Home")}
          title="Confirm"
          type="solid"
          size="lg"
          titleStyle={{ fontWeight: "700", color: colors.background }}
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
