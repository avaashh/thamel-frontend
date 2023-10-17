import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { LinearGradient } from "expo-linear-gradient";

import { BackGroundPrimary, BackGroundSecondary } from "./Exports";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

import Home from "./pages/Home";

const Index = () => {
  return (
    <NavigationContainer>
      <LinearGradient
        // Background Linear Gradient
        colors={[BackGroundPrimary, BackGroundSecondary]}
        style={styles.background}
      />

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
        //   headerShown: false,
        //   gestureEnabled: false,
        }}
        labeled={false}
        barStyle={{ backgroundColor: BackGroundSecondary }}
        activeColor={"#ff4654"}
        inactiveColor={"#fff"}
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarColor: "#fff",
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="home-filled" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Heart"
          component={Home}
          options={{
            tabBarColor: "#fff",
            tabBarIcon: ({ color }) => (
                <Ionicons name="heart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Request"
          component={Home}
          options={{
            tabBarColor: "#fff",
            tabBarIcon: ({ color }) => (
                <FontAwesome name="plus" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={Home}
          options={{
            tabBarColor: "#fff",
            tabBarIcon: ({ color }) => (
                <Ionicons name="chatbubble-ellipses" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarColor: "#fff",
            tabBarIcon: ({ color }) => (
                <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

      <StatusBar style={"light"} hidden={true} />
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
