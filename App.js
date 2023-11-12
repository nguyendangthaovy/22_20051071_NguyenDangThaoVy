import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import screen1 from "./screens/screen1";
import screen2 from "./screens/screen2";
import screen3 from "./screens/screen3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={screen1} />
        <Stack.Screen name="Detail" component={screen2} />
        <Stack.Screen name="Menu" component={screen3} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
