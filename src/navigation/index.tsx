import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthNavigator from './stacks/authNavigation';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'src/services';
import { User } from 'src/scenes/user';
import UserNavigator from './stacks/userNaviation';

type Props = {};

const RootNavigator = (props: Props) => {
  return (
    <>
      <NavigationContainer >
        <UserNavigator />
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
