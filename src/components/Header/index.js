import React, { useState, useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import AuthContext from '../../contexts/auth';

import logotipo from '../../assets/img/logotipo.png';

import {
  HeaderGradient,
  ImgUser,
  Logotipo,
  ViewRight,
  LblValorTotal,
  TxtValorTotal,
} from './styles';

export default function Header() {
  const { userAccount } = useContext(AuthContext);

  return (
    <HeaderGradient colors={['#1AC079', '#19DD89']} start={[0, 0.2]}>
      <Logotipo source={logotipo} />
      <ViewRight>
        <View>
          <LblValorTotal>Valor Total</LblValorTotal>
          <TxtValorTotal>R$ {userAccount.total}</TxtValorTotal>
        </View>
        <ImgUser source={{uri: userAccount.avatar_url}} />
      </ViewRight>
    </HeaderGradient>
  );
}
