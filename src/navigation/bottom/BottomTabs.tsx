import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, About, User } from "@user/index";
import CustomBottomTab from "@components/core-components/bottomtabs/CustomBottomTabs";
import { View, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");
const Tab = createBottomTabNavigator();
const BottomTabs: React.FC = () => {
  return (
    // <View style={{ height: height - 125, width }}>
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomBottomTab {...props} />}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{ tabBarLabel: "Home" }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ tabBarLabel: "About" }}
          name="About"
          component={About}
        />
        <Tab.Screen
          options={{ tabBarLabel: "User" }}
          name="User"
          component={User}
        />
      </Tab.Group>
    </Tab.Navigator>
    // </View>
  );
};

export default BottomTabs;
