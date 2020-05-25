import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth';
import { PhotoUserProvider } from './contexts/photoUser';
import Routes from './routes';

export default function Index() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PhotoUserProvider>
          <Routes />
        </PhotoUserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
