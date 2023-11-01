import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import colors from "../config/colors";

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={24}
      style={styles.keyboardView}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    margin: 4,
    alignItems: "center",
  },
});
