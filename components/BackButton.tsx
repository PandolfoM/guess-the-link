import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

function BackButton() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backBtnContainer}>
      <Text style={styles.backBtn}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    flexDirection: "row",
  },
  backBtn: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
  },
});

export default BackButton;
