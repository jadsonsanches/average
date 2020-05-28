import React, { useState, useContext, useEffect } from 'react';
import { FlatList, Modal, SafeAreaView, Picker } from 'react-native';
import { Feather } from '@expo/vector-icons';

import AuthContext from '../../contexts/auth';
import WalletAssetsContext from '../../contexts/walletAssets';

import imgAsset from '../../assets/img/average-icon.png';

import InputIcon from '../../components/Input';
import PickerIcon from '../../components/Picker';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import styles from './styles';

import {
  Container,
  Body,
  CardBody,
  Card,
  ImgAsset,
  View,
  TitleAsset,
  ViewHalf,
  Half,
  LastHalf,
  Broker,
  SubView,
  ViewBalance,
  ViewQuantity,
  SubViewTitle,
  SubViewDescription,
  HeaderModal,
  BtnBack,
  TitleModal,
} from './styles';

export default function Asset() {
  const { userAccount } = useContext(AuthContext);
  const {
    loading,
    wallets,
    walletSelect,
    setWalletSelect,
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

  //const [modalVisible, setModalVisible] = useState(false);
  //const [walletSelect, setWalletSelect] = useState('')

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Minhas Ações" />

        <Body>
          <InputIcon
            nameIcon={'search'}
            colorIcon={'#ddd'}
            placeholderInput={'Digite um ticker para pesquisar'}
            selectionColor={'#19DD89'}
          />

          <CardBody>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              style={styles.listAssets}
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <Card>
                  <ImgAsset source={imgAsset} />
                  <View>
                    <TitleAsset>PETR4 - PETROBRÁS</TitleAsset>
                    <Broker>Clear Corretora</Broker>
                    <SubView>
                      <ViewBalance>
                        <SubViewTitle>Saldo Atual</SubViewTitle>
                        <SubViewDescription>R$ 0.000,00</SubViewDescription>
                      </ViewBalance>
                      <ViewQuantity>
                        <SubViewTitle>Cotas</SubViewTitle>
                        <SubViewDescription>1000</SubViewDescription>
                      </ViewQuantity>
                    </SubView>
                  </View>
                </Card>
              )}
            />
          </CardBody>

          <Button
            labelButton={'NOVA AÇÃO'}
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
          <SafeAreaView style={{ backgroundColor: '#ffffff' }}></SafeAreaView>
          <HeaderModal>
            <BtnBack
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Feather name="arrow-left-circle" size={25} color="#19DD89" />
            </BtnBack>
            <TitleModal>CADASTRAR NOVA AÇÃO</TitleModal>
          </HeaderModal>
          <Container>
            <Body style={styles.modal}>
              <PickerIcon
                label={'Carteira:'}
                nameIcon={'folder'}
                colorIcon={'#19DD89'}
                selectedValue={walletSelect}
                onValueChange={walletSelect => setWalletSelect(walletSelect)}
                message={''}
              >
                {wallets.map((item, index) => {
                  return <Picker.Item label={item.description} value={index} key={index} />;
                })}
              </PickerIcon>
              <InputIcon
                label={'Ativo:'}
                nameIcon={'file'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe o ativo'}
                selectionColor={'#19DD89'}
                message={''}
              />
              <ViewHalf>
                <Half>
                  <InputIcon
                    label={'Quantidade:'}
                    nameIcon={'plus-circle'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'100'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                    message={''}
                  />
                </Half>
                <LastHalf>
                  <InputIcon
                    label={'Valor:'}
                    nameIcon={'dollar-sign'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'R$ 0,00'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                    message={''}
                  />
                </LastHalf>
              </ViewHalf>
              <ViewHalf>
                <Half>
                  <InputIcon
                    label={'Data da Compra:'}
                    nameIcon={'calendar'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'dd/mm/aaaa'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                    maxLength={10}
                    message={''}
                  />
                </Half>
                <LastHalf>
                  <InputIcon
                    label={'Taxas:'}
                    nameIcon={'award'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'R$ 0,00'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                    message={''}
                  />
                </LastHalf>
              </ViewHalf>

              <Button labelButton={'SALVAR'} type={'Primary'} />
            </Body>
          </Container>
        </Modal>
      </Container>
    </SafeAreaView>
  );
}
