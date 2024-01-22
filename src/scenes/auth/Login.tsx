import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Login = (props: Props) => {
  const nav = useNavigation();
  return (
    <React.Suspense fallback={<Text>Loading</Text>}>
      <TouchableOpacity onPress={() => nav.navigate('Register')}>
        <Text>Nav</Text>
      </TouchableOpacity>
    </React.Suspense>
  );
};

export default Login;

const styles = StyleSheet.create({});
