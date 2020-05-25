import React, { useContext } from 'react';
import { View, SafeAreaView } from 'react-native';

import AuthContext from '../../contexts/auth';
import PhotoUserContext from '../../contexts/photoUser';

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
  const { userAccount } = useContext(AuthContext);
  const { photoUserAccount } = useContext(PhotoUserContext);

  return (
    <SafeAreaView style={{ backgroundColor: '#1AC079' }}>
      <HeaderGradient colors={['#1AC079', '#19DD89']} start={[0, 0.2]}>
        <Logotipo source={logotipo} />
        <ViewRight>
          <View>
            <LblValorTotal>Valor Total</LblValorTotal>
            <TxtValorTotal>R$ {userAccount.total}</TxtValorTotal>
          </View>
          {photoUserAccount !== null ? (
            <ImgUser source={{ uri: photoUserAccount }} />
          ) : (
            <ImgUser source={imgUser} />
          )}
        </ViewRight>
      </HeaderGradient>
    </SafeAreaView>
  );
}
