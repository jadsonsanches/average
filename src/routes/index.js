import React, { useContext } from 'react';
import { View, ActivityIndicator } from "react-native";
import { AppLoading } from 'expo';

import AuthContext from "../contexts/auth";

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


export default function Routes() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
      //<AppLoading />
    );
  }

  return <AuthRoutes />;
}
