import { Text, View } from "react-native";
import React, { Suspense, memo } from "react";
import { IconProps } from "react-native-vector-icons/Icon";

type Props = {
  hamburger: IconProps;
};

const Header = (props: Props) => {
  const { hamburger } = props;
  return( <View>
    {hamburger ? "" : null}
    </View>);
};

export default memo(Header);
