import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {OnStartService} from './onStart';
import {NavService} from './navigation';
import {TranslateService} from './translate';
import {ApiService} from './api';
import {EventsService} from './events';
import {ComponentService} from './components';
import {PVoid, Services} from '../utils/types';

const services = {
  t: new TranslateService(), // should be first
  nav: new NavService(),
  api: new ApiService(),
  onStart: new OnStartService(),
  events: new EventsService(),
  Components: new ComponentService(),
};
type ContextServices = typeof services;

const servicesContext = React.createContext<ContextServices>(services);

export const withServices = Component => {
  return props => {
    return (
      <servicesContext.Provider value={services}>
        <Component {...props} />
      </servicesContext.Provider>
    );
  };
};

export const useServices = (): ContextServices =>
  React.useContext(servicesContext);

export const initServices = async (): PVoid => {
  for (const key in services) {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = (services as Services)[key];

      if (s.init) {
        await s.init();
      }
    }
  }
};

// Example usage with react-navigation
const Stack = createStackNavigator();

const AppNavigator = () => {
  const ServicesProvider = withServices(Stack.Navigator);

  return (
    <NavigationContainer>
      <ServicesProvider>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* Other screens */}
      </ServicesProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
