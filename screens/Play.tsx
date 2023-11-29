import React, { useState, useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationProps } from "../App";
import Page from "../components/Page";
import colors from "../config/colors";
import BackButton from "../components/BackButton";
import OTP from "../components/OTP";

const testGame = [
  {
    answer: "earth layers",
    typeof: true,
    image1: "🍎",
    image2: "🥖",
    image3: "🔥",
  },
  {
    answer: "earth layers",
    typeof: true,
    image1: "😀",
    image2: "✋",
    image3: "🩸",
  },
  {
    answer: "earth layers 3",
    typeof: true,
    image1: "🦷",
    image2: "🧶",
    image3: "🚀",
  },
];

export default function Play({ navigation }: NavigationProps) {
  const [countdown, setCountdown] = useState<number>(4);
  const [answer, setAnswer] = useState<string>("");
  const [currentGame, setCurrentGame] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

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

  const nextGame = () => {
    if (testGame.length - 1 !== currentGame) {
      if (
        testGame[currentGame].answer.replace(/\s/g, "").toLowerCase() ===
        answer.toLowerCase()
      ) {
        setAnswer("");
        setCurrentGame(currentGame + 1);
      }
    } else {
      setAnswer("");
      setGameOver(true);
    }
  };

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
            {gameOver ? (
              <Text>WINNER</Text>
            ) : (
              <>
                <Text style={styles.emoji}>{testGame[currentGame].image1}</Text>
                <Text style={styles.emoji}>{testGame[currentGame].image2}</Text>
                <Text style={styles.emoji}>{testGame[currentGame].image3}</Text>
              </>
            )}
          </>
        )}
      </View>
      {countdown === 0 && !gameOver && (
        <>
          <View style={styles.answer}>
            <Text style={styles.label}>Types of: </Text>
            <View>
              <OTP
                answer={testGame[0].answer}
                answerState={answer}
                setAnswer={setAnswer}
              />
            </View>
          </View>
          <Pressable onPress={nextGame} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </>
      )}
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
  answer: {
    alignItems: "center",
  },
  label: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "700",
  },
  button: {
    marginVertical: 24,
  },
  buttonText: {
    fontSize: 24,
    color: colors.primaryColor,
    fontWeight: "700",
  },
  inputContainer: {
    margin: 2,
    width: 30,
  },
  input: {
    color: colors.primaryColor,
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
  },
});
