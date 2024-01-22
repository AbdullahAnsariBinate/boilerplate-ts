import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '@auth/index';

type RootStackParamList = {
  Login: React.ComponentProps<typeof Login>;
  Register: React.ComponentProps<typeof Register>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => (
  <RootStack.Navigator initialRouteName='Login'>
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="Register" component={Register} />
  </RootStack.Navigator>
);
export default AuthNavigator;
