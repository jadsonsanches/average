import React, { useState, useContext } from 'react';
import { View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import AuthContext from "../../contexts/auth";

import imgUser from '../../assets/img/average-icon.png';
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
  const { user } = useContext(AuthContext);

  return (
    <HeaderGradient colors={['#1AC079', '#19DD89']} start={[0, 0.2]}>
      <Logotipo source={logotipo} />
      <ViewRight>
        <View>
          <LblValorTotal>Valor Total</LblValorTotal>
          <TxtValorTotal>R$ 5.000,00</TxtValorTotal>
        </View>
        <ImgUser source={imgUser} />
      </ViewRight>
    </HeaderGradient>
  );
}
