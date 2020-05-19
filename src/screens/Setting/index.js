import React, { useContext } from 'react';
import { SafeAreaView, AsyncStorage } from 'react-native';

import AuthContext from "../../contexts/auth";

import imgUser from '../../assets/img/average-icon.png';

import Button from '../../components/Button';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './styles';

import {
  Container,
  Body,
  CardBody,
  BodyHeader,
  ImgUser,
  Group,
  LastGroup,
  Description,
  Valor,
} from './styles';

export default function Setting() {
  const { signOut } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Configurações" />

        <Body>
          <CardBody>
            <BodyHeader>
              <ImgUser source={imgUser} />
            </BodyHeader>

            <Group>
              <Description>Nome</Description>
              <Valor>Jadson Sanches</Valor>
            </Group>
            <Group>
              <Description>E-mail</Description>
              <Valor>jadson.sanches@gmail.com</Valor>
            </Group>
            <Group>
              <Description>WhatsApp</Description>
              <Valor>+55 (17) 99767.3575</Valor>
            </Group>
            <LastGroup>
              <Description>Senha</Description>
              <Button
                labelButton={'MUDAR SENHA'}
                type={'Primary'}
                onPress={() => {}}
              />
            </LastGroup>
          </CardBody>
          <Button
            labelButton={'SAIR DA CONTA'}
            type={'Secondary'}
            onPress={() => signOut()}
          />
        </Body>
      </Container>
    </SafeAreaView>
  );
}
