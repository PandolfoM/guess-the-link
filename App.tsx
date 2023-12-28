import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Play from "./screens/Play";
import Home from "./screens/Home";
import colors from "./config/colors";
import Modal from "./components/Modal";

export type RootStackParamList = {
  Home: undefined;
  Play: undefined;
  Modal: { type?: "error" | "confirm" };
};

export type NavigationProps = StackScreenProps<RootStackParamList>;
export type ModalScreenRouteProp = StackScreenProps<
  RootStackParamList,
  "Modal"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Play"
          component={Play}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Modal"
            component={Modal}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
