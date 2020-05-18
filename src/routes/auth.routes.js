import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../pages/SignIn';
import NewUserScreen from '../pages/NewUser';

const AuthStack = createStackNavigator();

export default function RoutesNew() {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      {/* <AuthStack.Screen name="NewUser" component={NewUserScreen} /> */}
    </AuthStack.Navigator>
  );
}
