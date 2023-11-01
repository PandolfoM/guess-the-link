import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationProps } from "../App";
import Page from "../components/Page";
import colors from "../config/colors";
import BackButton from "../components/BackButton";

export default function Play({ navigation }: NavigationProps) {
  const [countdown, setCountdown] = useState<number>(4);
  const [text, onChangeText] = useState<string>("");

  useEffect(() => {
    // Create a timer to decrement the countdown value every second
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        // When the countdown reaches 1, you can navigate to another screen
        clearInterval(timer); // Stop the timer
      }
    }, 1000);

    return () => {
      // Cleanup by clearing the timer if the component unmounts
      clearInterval(timer);
    };
  }, [countdown, navigation]);

  return (
    <Page>
      {countdown === 0 && <BackButton text="Quit" />}
      <View style={styles.container}>
        {countdown > 0 ? (
          <>
            {countdown === 1 ? (
              <Text style={styles.countDownGo}>GO!</Text>
            ) : (
              <Text style={styles.countDown}>{countdown - 1}</Text>
            )}
          </>
        ) : (
          <>
            <Text style={styles.emoji}>🍎</Text>
            <Text style={styles.emoji}>🥖</Text>
            <Text style={styles.emoji}>🔥</Text>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              style={styles.input}
            />
          </>
        )}
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  countDown: {
    fontSize: 244,
    color: colors.white,
  },
  countDownGo: {
    fontSize: 210,
    color: colors.white,
  },
  emoji: {
    fontSize: 120,
    color: colors.white,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
