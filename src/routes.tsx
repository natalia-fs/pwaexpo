import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main';
import Camera from './pages/Camera';
import Repos from './pages/Repos';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
            options={{
                tabBarIcon: ({color}) => <Feather name="home" size={20} color={color} />
            }}
            name="Home"
            component={Main}
        />
        <Tab.Screen
            options={{
                tabBarIcon: ({color}) => <Feather name="github" size={20} color={color} />
            }}
            name="Repositories"
            component={Repos}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}