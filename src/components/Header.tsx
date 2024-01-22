import {StyleSheet, Text, View} from 'react-native';
import React, {Suspense} from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <Suspense fallback={'Loading...'}>
      <Header {...props} />
    </Suspense>
  );
};

export default Header;

