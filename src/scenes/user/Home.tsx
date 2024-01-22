import {StyleSheet, Text, View} from 'react-native';
import React, { Suspense } from 'react';

type Props = {};

const Home = (props: Props) => {
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
    </React.Suspense>
  );
};

export default Home;

const styles = StyleSheet.create({});
