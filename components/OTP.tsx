import React, {
  Dispatch,
  SetStateAction,
  MutableRefObject,
  useRef,
} from "react";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import colors from "../config/colors";

interface Props {
  answer: string;
  answerState: string;
  setAnswer: Dispatch<SetStateAction<string>>;
}

export default function OTP({ answer, answerState, setAnswer }: Props) {
  // Remove spaces from the answer string
  const cleanedAnswer = answer.replace(/\s/g, "");

  // const inputRefs = useRef([]);
  const inputRefs = useRef<Array<MutableRefObject<TextInput | null>>>(
    Array(cleanedAnswer.length)
      .fill(0)
      .map(() => ({ current: null }))
  );

  const handleInputChange = (text: string, index: number) => {
    if (text !== " ") {
      // Skip spaces and find the next non-space index
      let nextIndex = index + 1;
      while (
        nextIndex < cleanedAnswer.length &&
        cleanedAnswer.charAt(nextIndex) === " "
      ) {
        nextIndex++; // Skip spaces
      }

      // Skip spaces and find the previous non-space index
      let prevIndex = index - 1;
      while (prevIndex >= 0 && cleanedAnswer.charAt(prevIndex) === " ") {
        prevIndex--; // Skip spaces
      }

      // If typing in a space, move to the next input without typing in the space
      if (
        text === " " &&
        nextIndex < cleanedAnswer.length &&
        inputRefs.current[nextIndex]
      ) {
        inputRefs.current[nextIndex].current?.focus();
        return; // Skip further processing for space
      }

      // Move to the next input only if the index increased and the current input is not a space

      if (
        text.length === 1 &&
        cleanedAnswer.charAt(index) !== " " &&
        nextIndex > index &&
        nextIndex < cleanedAnswer.length &&
        inputRefs.current[nextIndex]
      ) {
        inputRefs.current[nextIndex].current?.focus();
      }

      // Move to the previous input when backspace is pressed

      if (text.length === 0 && prevIndex >= 0 && inputRefs.current[prevIndex]) {
        inputRefs.current[prevIndex].current?.focus();
      }

      // Construct the new OTP string by replacing the character at the current index
      const newOtp =
        answerState.substring(0, index) +
        text +
        answerState.substring(index + 1);
      setAnswer(newOtp);
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    i: number
  ) => {
    const pressedKey = event.nativeEvent.key;
    if (pressedKey === "Backspace") {
      if (i > 0 && inputRefs.current[i - 1]) {
        inputRefs.current[i - 1].current?.focus();
      }
    } else if (pressedKey !== " ") {
      if (inputRefs.current[i + 1]) {
        inputRefs.current[i + 1].current?.focus();
      }
    }
    // else if (/^[a-zA-Z0-9]$/.test(pressedKey)) {
    //   // console.log("key");
    //   inputRefs.current[i + 1].focus();
    // }
  };

  const renderInputBoxes = () => {
    const inputBoxes = [];
    for (let i = 0; i < cleanedAnswer.length; i++) {
      let lastIndex = i + 1;

      inputBoxes.push(
        <View key={i} style={styles.container}>
          <TextInput
            ref={(inputRef) => (inputRefs.current[i] = { current: inputRef })}
            style={answer[lastIndex] === " " ? styles.mr : styles.input}
            onChangeText={(text) => handleInputChange(text, i)}
            onKeyPress={(event) => handleKeyPress(event, i)}
            maxLength={1}
            value={answerState.charAt(i)}
            editable={true}
          />
        </View>
      );
    }

    return inputBoxes;
  };

  return <View style={styles.container}>{renderInputBoxes()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  mr: {
    marginRight: 30,
    borderBottomWidth: 2,
    color: colors.white,
    borderColor: colors.white,
    width: 30,
    height: 40,
    margin: 2,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 2,
    color: colors.white,
    borderColor: colors.white,
    width: 30,
    height: 40,
    margin: 2,
    textAlign: "center",
  },
  blank: {
    width: 30,
    opacity: 0,
    height: 40,
    margin: 2,
    borderBottomWidth: 2,
  },
});
