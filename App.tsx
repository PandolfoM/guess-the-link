import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Play from "./screens/Play";
import Home from "./screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

type RootStackParamList = {
  Home: undefined;
  Play: undefined;
};

export type NavigationProps = StackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Play"
          component={Play}
          options={{ headerBackButtonMenuEnabled: true, headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
