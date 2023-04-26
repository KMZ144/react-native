import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";

import TodoHome from "./components/TodoHome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TodoList from "./components/TodoList";
import { useTheme } from "react-native-paper";
import TodoDescription from "./components/TodoDescription";

export default function App() {
  const theme = useTheme();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />

      <Stack.Navigator>
        <Stack.Screen component={TodoHome} name="Todo App" />
        <Stack.Screen
          component={TodoDescription}
          name="TodoDescription"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    marginTop: 35,
  },
  todosBody: {
    margin: 12,
  },
  todoInputs: {
    margin: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
  },
  bg: {
    backgroundColor: "red",
  },
});
