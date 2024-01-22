import {StyleSheet} from 'react-native';
import React, {Suspense} from 'react';

type Props = {};

const Bottom = (props: Props) => {
  return (
    <Suspense fallback={'Loading...'}>
      <Bottom {...props} />
    </Suspense>
  );
};

export default Bottom;

