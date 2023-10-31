import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  container: {
    margin: 4,
    alignItems: "center",
  },
});
