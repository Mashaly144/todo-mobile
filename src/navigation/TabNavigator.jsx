// src/navigation/TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Page1 from '../screens/Page1';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Page 1' component={Page1} />
      <Tab.Screen name='Page 2' component={Page1} />
      <Tab.Screen name='Page 3' component={Page1} />
      <Tab.Screen name='Page 4' component={Page1} />
      <Tab.Screen name='Page 5' component={Page1} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
