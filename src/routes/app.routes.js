import React from 'react';
import { StatusBar } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WalletScreen from '../screens/Wallet';
import AssetScreen from '../screens/Asset';
import CalculateScreen from '../screens/Calculate';
import SettingScreen from '../screens/Setting';

const Tab = createBottomTabNavigator();

const icons = {
  Wallet: {
    lib: Feather,
    name: 'server',
  },
  Asset: {
    lib: Feather,
    name: 'file',
  },
  Calculate: {
    lib: MaterialCommunityIcons,
    name: 'calculator-variant',
  },
  Setting: {
    lib: Feather,
    name: 'settings',
  },
};

export default function Routes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1AC079" />
      <Tab.Navigator
        // DESSA FUNÇÃO ELA VAI RETORNAR UM OBJETO
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons[route.name];
            return (
              <Icon
                name={name}
                size={name == 'calculator-variant' ? 30 : size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#19DD89',
          inactiveTintColor: '#444444',
          labelStyle: {
            fontFamily: 'ABeeZee',
            fontSize: 11,
          },
        }}
        //backBehavior="none"
      >
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            title: 'Carteiras',
          }}
        />
        <Tab.Screen
          name="Asset"
          component={AssetScreen}
          options={{
            title: 'Ativos',
          }}
        />
        <Tab.Screen
          name="Calculate"
          component={CalculateScreen}
          options={{
            title: 'Calcular',
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: 'Configurações',
          }}
        />
      </Tab.Navigator>
    </>
  );
}
