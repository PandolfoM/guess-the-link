import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import { Avatar } from "@rneui/base";

export default function Playercard() {
  return (
    <View style={styles.container}>
      <Avatar
        size={64}
        rounded
        source={{ uri: "https://avatars.githubusercontent.com/u/32248293?v=4" }}
      />
      <View style={styles.playerInfo}>
        <Text style={[styles.text, styles.name]} numberOfLines={1}>
          Matthew Pandolfo
        </Text>
        <Text style={styles.text}>Games Won: 69</Text>
        <Text style={styles.text}>Puzzle Pieces: 420</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardColor,
    height: 90,
    marginBottom: 12,
    borderRadius: 5,
    flex: 1,
    gap: 12,
    padding: 12,
    overflow: "hidden",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  playerInfo: {
    flex: 1,
  },
  name: {
    fontWeight: "700",
    fontSize: 20,
  },
  text: {
    color: colors.white,
    fontSize: 15,
  },
});
