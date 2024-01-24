import React, { ReactNode, memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import { Colors } from "src/constants/Colors";

type HeaderProps = {
  left?: ReactNode;
  leftImageSource?: any;
  center?: ReactNode;
  right?: ReactNode;
  rightImageSource?: any;
  centerImageSource?: any;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  onCenterPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
};

const Header: React.FC<HeaderProps> = memo(
  ({
    left,
    leftImageSource,
    center,
    right,
    rightImageSource,
    centerImageSource,
    onLeftPress,
    onRightPress,
    onCenterPress,
    containerStyle,
    textStyle,
    imageStyle,

  }) => {
    const renderComponent = (
      component: ReactNode,
      imageSource: any,
      onPress?: () => void,
      style?: ImageStyle | TextStyle
    ) => {
      return component ? (
        <TouchableOpacity onPress={onPress}>
          {typeof component === "string" ? (
            <Text style={[styles.text, textStyle, style as TextStyle]}>
              {component}
            </Text>
          ) : (
            <Image
              source={imageSource}
              style={[styles.image, imageStyle, style as ImageStyle]}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      ) : null;
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {renderComponent(left, leftImageSource, onLeftPress)}
        <View style={styles.centerContainer}>
          {renderComponent(center, centerImageSource, onCenterPress)}
        </View>
        {renderComponent(right, rightImageSource, onRightPress)}
      </View>
    );
  }
);

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: Colors.Primary
  } as ViewStyle,
  centerContainer: {
    flex: 1,
    alignItems: "center",
  } as ViewStyle,
  text: {
    fontSize: 18,
    color: "#333",
  },
  centerText: {
    fontWeight: "bold",
  } as TextStyle,
  image: {
    width: 26,
    height: 26,
  },
};

export default Header;
