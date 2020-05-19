import React, { useState, useEffect, useContext } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  AsyncStorage,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as firebase from 'firebase';
import 'firebase/firestore';

import AuthContext from "../../contexts/auth";

import styles from './styles';
import InputIcon from '../../components/Input';
import Button from '../../components/Button';
import Breadcrumb from '../../components/Breadcrumb';

import {
  Container,
  Body,
  CardWallet,
  HeaderCardWallet,
  TitleCardWallet,
  BodyCardWallet,
  BoxBodyCardWallet,
  LastBoxBodyCardWallet,
  LittleTitle,
  Description,
  HeaderModal,
  BtnBack,
  TitleModal,
} from './styles';

export default function Wallet() {
  const { user, loading } = useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Minhas Carteiras" />

        <Body>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            style={styles.listCardWallet}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
              <CardWallet>
                <HeaderCardWallet>
                  <TitleCardWallet>Clear Corretora</TitleCardWallet>
                </HeaderCardWallet>
                <BodyCardWallet>
                  <BoxBodyCardWallet>
                    <LittleTitle>Custo Total</LittleTitle>
                    <Description>R$ 7.15K</Description>
                  </BoxBodyCardWallet>
                  <BoxBodyCardWallet>
                    <LittleTitle>Valor Total</LittleTitle>
                    <Description>R$ 5.65K</Description>
                  </BoxBodyCardWallet>
                  <BoxBodyCardWallet>
                    <LittleTitle>Resultado</LittleTitle>
                    <Description>R$ -1.50K</Description>
                  </BoxBodyCardWallet>
                  <LastBoxBodyCardWallet>
                    <LittleTitle>Variação</LittleTitle>
                    <Description>-21.02%</Description>
                  </LastBoxBodyCardWallet>
                </BodyCardWallet>
              </CardWallet>
            )}
          />
          <Button
            labelButton={'NOVA CARTEIRA'}
            type={'Primary'}
            onPress={() => setModalVisible(true)}
          />
        </Body>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <HeaderModal>
            <BtnBack
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Feather name="arrow-left-circle" size={25} color="#19DD89" />
            </BtnBack>
            <TitleModal>CADASTRAR NOVA CARTEIRA</TitleModal>
          </HeaderModal>
          <Container>
            <Body style={styles.modal}>
              <InputIcon
                label={'Nome:'}
                nameIcon={'user'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe um nome para a carteira'}
                selectionColor={'#19DD89'}
              />

              <Button labelButton={'SALVAR'} type={'Primary'} />
            </Body>
          </Container>
        </Modal>
      </Container>
    </SafeAreaView>
  );
}
