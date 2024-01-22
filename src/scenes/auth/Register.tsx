import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Register = (props: Props) => {
  const nav = useNavigation();

  return (
    <React.Suspense fallback={<Text>Loading</Text>}>
      {/* <KeyboardAwareScrollView contentContainerStyle={styles.contentContainerStyle}> */}
      {/* <StateContext.Provider value={{ componentId: props.componentId, options: auth_options }}> */}
      {/* <Components._Container options={auth_options} componentId={props.componentId} bg-pageColor bottomProps={{ visible: true, rotation: -50, rotateTo: 90, animate: false }} flex> */}
      {/* <Components._LogoComponent />
            <Components._Form validation={validationScheema} loading={loading} actionText={configurations.actionText} bottomActions={configurations.bottomActions} secondaryActions={configurations.secondaryActions} fields={configurations.fields} onFormSubmitted={onFormSubmitted.bind(null)} /> */}
      {/* </Components._Container> */}
      {/* </StateContext.Provider> */}
      {/* </KeyboardAwareScrollView> */}
      <TouchableOpacity onPress={() => nav.navigate('Login')}>
        <Text>Nav</Text>
      </TouchableOpacity>
    </React.Suspense>
  );
};

export default Register;

const styles = StyleSheet.create({});
