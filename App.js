import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Stack from './src/pages/Stack';

const App = () => {

  return (

    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;