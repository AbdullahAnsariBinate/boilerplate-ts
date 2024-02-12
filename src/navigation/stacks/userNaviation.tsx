import React from "react";
import { Home, User, About } from "@user/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../drawer/Drawer";
type RootStackParamList = {
  Home: React.ComponentProps<typeof Home>;
  User: React.ComponentProps<typeof User>;
  About: React.ComponentProps<typeof About>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const UserNavigator = () => (
  <RootStack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <RootStack.Screen name="Home" component={DrawerNavigator} />
  </RootStack.Navigator>
);

export default UserNavigator;
