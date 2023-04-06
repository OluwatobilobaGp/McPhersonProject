import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";

enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import Home from "./app/screens/Home";
import Transfer from "./app/screens/Transfer";
import Settings from "./app/screens/Settings";
import checkOut from "./app/screens/checkOut";

const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigation()
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            // stackAnimation:'flip',
            // stackPresentation: 'modal',
          }
        }
      >
        <Stack.Screen
          options={{
            headerCenter: () => (
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Dashboard
              </Text>
            ),
          }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{ headerLargeTitle: true }}
          name="Transfer"
          component={Transfer}
        />

        <Stack.Screen
          options={{ headerLargeTitle: true }}
          name="Settings"
          component={Settings}
        />

        <Stack.Screen
          options={{ headerLargeTitle: true }}
          name="checkOut"
          component={checkOut}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { DrawerContent } from './src/DrawerContent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000",
    alignItems: "center",
    justiafyContent: "center",
  },
});
