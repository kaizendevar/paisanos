import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Login from "./components/Login";
import Map from "./components/Map";
import ShopDetail from "./components/ShopDetail";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />      
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
      <Stack.Screen name="ShopDetail" component={ShopDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;