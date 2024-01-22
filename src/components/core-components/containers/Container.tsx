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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Header />
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
