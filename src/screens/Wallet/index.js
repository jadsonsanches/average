import React, { useState, useContext, useEffect } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as firebase from 'firebase';
import 'firebase/firestore';

import AuthContext from '../../contexts/auth';
import WalletAssetsContext from '../../contexts/walletAssets';

import InputIcon from '../../components/Input';
import Button from '../../components/Button';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './styles';

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
  BtnDelete,
  TitleModal,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Wallet() {
  const { userAccount } = useContext(AuthContext);
  const {
    loading,
    wallets,
    walletSelect,
    totalValue,
    result,
    variation,
    modalVisible,
    modalWalletVisible,
    name,
    setName,
    messageName,
    setModalVisible,
    setModalWalletVisible,
    handleBtnSalvar,
    handleClickWallet,
    handleClickTrash,
    closeModal
  } = useContext(WalletAssetsContext);

  if (loading && !modalVisible) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return (
    <Container>
      <Breadcrumb Titulo="Minhas Carteiras" />

      <Body>
        {wallets.length > 0 && (
          <FlatList
            data={wallets}
            style={styles.listCardWallet}
            keyExtractor={wallet => String(wallet.description)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: wallet }) => (
              <TouchableOpacity onPress={() => handleClickWallet(wallet)}>
                <CardWallet>
                  <HeaderCardWallet>
                    <TitleCardWallet>{wallet.description}</TitleCardWallet>
                  </HeaderCardWallet>
                  <BodyCardWallet>
                    <BoxBodyCardWallet>
                      <LittleTitle>Custo Total</LittleTitle>
                      <Description>R$ {wallet.total}K</Description>
                    </BoxBodyCardWallet>
                    <BoxBodyCardWallet>
                      <LittleTitle>Valor Total</LittleTitle>
                      <Description>R$ {totalValue}</Description>
                    </BoxBodyCardWallet>
                    <BoxBodyCardWallet>
                      <LittleTitle>Resultado</LittleTitle>
                      <Description>R$ {result}</Description>
                    </BoxBodyCardWallet>
                    <LastBoxBodyCardWallet>
                      <LittleTitle>Variação</LittleTitle>
                      <Description>{variation}%</Description>
                    </LastBoxBodyCardWallet>
                  </BodyCardWallet>
                </CardWallet>
              </TouchableOpacity>
            )}
          />
        )}
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
          closeModal();
        }}
      >
        {loading && modalVisible && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator size="large" color="#999" />
          </View>
        )}
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}></SafeAreaView>
        {!loading && modalVisible && (
          <Container>
            <HeaderModal>
              <BtnBack
                onPress={() => {
                  closeModal();
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
                  nameIcon={'folder'}
                  colorIcon={'#19DD89'}
                  placeholderInput={'Informe um nome para a carteira'}
                  selectionColor={'#19DD89'}
                  value={name}
                  onChangeText={name => setName(name)}
                  message={messageName}
                />

                <Button
                  labelButton={'SALVAR'}
                  type={'Primary'}
                  onPress={() => handleBtnSalvar()}
                />
              </Body>
            </Container>
          </Container>
        )}
      </Modal>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalWalletVisible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        {loading && modalWalletVisible && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator size="large" color="#999" />
          </View>
        )}
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}></SafeAreaView>
        {!loading && modalWalletVisible && (
          <Container>
            <HeaderModal>
              <BtnBack
                onPress={() => {
                  closeModal();
                }}
              >
                <Feather name="arrow-left-circle" size={25} color="#19DD89" />
              </BtnBack>
              <TitleModal>{walletSelect.description.toUpperCase()}</TitleModal>
              <BtnDelete
                onPress={() => {
                  handleClickTrash();
                }}
              >
                <Feather name="trash-2" size={25} color="#FF6456" />
              </BtnDelete>
            </HeaderModal>
            {/* <Container>
              <Body style={styles.modal}>
                <InputIcon
                  label={'Nome:'}
                  nameIcon={'folder'}
                  colorIcon={'#19DD89'}
                  placeholderInput={'Informe um nome para a carteira'}
                  selectionColor={'#19DD89'}
                  value={name}
                  onChangeText={name => setName(name)}
                  message={messageName}
                />

                <Button
                  labelButton={'SALVAR'}
                  type={'Primary'}
                  onPress={() => handleBtnSalvar()}
                />
              </Body>
            </Container> */}
          </Container>
        )}
      </Modal>
    </Container>
  );
}
