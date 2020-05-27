import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/auth';
import { PhotoUserProvider } from './contexts/photoUser';
import { WalletAssetsProvider } from './contexts/walletAssets';

import Routes from './routes';

export default function Index() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PhotoUserProvider>
          <WalletAssetsProvider>
            <Routes />
          </WalletAssetsProvider>
        </PhotoUserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
