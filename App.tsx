import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationRouter from './src/Navigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationRouter />
    </GestureHandlerRootView>
  );
};

export default App;
