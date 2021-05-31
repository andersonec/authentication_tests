import React from 'react';
import Login from './src/Views/telaLogin';
import PesquisaCEP from './src/Views/telaPesquisaCEP';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    // Utiliza Navigation para navegar entre telas(screens)
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="PesquisaCEP" 
          component={PesquisaCEP} 
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
