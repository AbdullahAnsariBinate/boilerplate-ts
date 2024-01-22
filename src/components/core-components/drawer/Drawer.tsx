import React from 'react';
import {View, Text, Button} from 'react-native';
interface DrawerContentProps {
  navigation: any;
}

const Drawers: React.FC<DrawerContentProps> = ({navigation}) => {
  return (
    <View>
      <View style={{padding: 16}}>
        <Text>Custom Drawer Header</Text>
      </View>
      <Button title="Home" onPress={() => {}} />
      <Button title="Settings" onPress={() => {}} />
    </View>
  );
};

export default Drawers;
