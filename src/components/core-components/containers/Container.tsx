import { NavigationContainerProps, NavigationProp, NavigationState, useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { appIcons } from "src/assets/appAssets";
import Header from "src/components/Header";

interface ContainerProps {
  children?: React.ReactNode;
  bottomProps?: {
    visible?: boolean;
    rotation?: number;
    rotateTo?: number;
    leftKey?: string;
    rightKey?: string;
    animate: boolean;
  };
  plateNativeId?: string;
}

const Container = (props: ContainerProps) => {

  const navigation: any = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Header
            left
            leftImageSource={appIcons?.drawer}
            center
            centerImageSource={require('../../../assets/icons/address.png')}
            right
            rightImageSource={appIcons?.editgoal}
            onLeftPress={() => { navigation.openDrawer() }}
            onRightPress={() => { }}
            containerStyle={{ backgroundColor: 'lightblue' }}
            textStyle={{ color: 'white' }}
          />
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default React.memo(Container);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
