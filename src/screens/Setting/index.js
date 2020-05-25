import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Modal,
  View,
  ActivityIndicator,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import AuthContext from '../../contexts/auth';
import PhotoUserContext from '../../contexts/photoUser';

import imgUser from '../../assets/img/average-icon.png';

import InputIcon from '../../components/Input';
import Button from '../../components/Button';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './styles';

import {
  Container,
  Body,
  CardBody,
  BodyHeader,
  ButtonFoto,
  ImgUser,
  Group,
  LastGroup,
  Description,
  Valor,
  Space10,
  HeaderModal,
  BtnBack,
  TitleModal,
} from './styles';

export default function Setting() {
  const { userAccount, signOut } = useContext(AuthContext);
  const {
    photoUserAccount,
    handleImg,
    handleBtnSalvar,
    loading,
    name,
    setName,
    whatsapp,
    setWhatsapp,
    messageName,
    setMessageName,
  } = useContext(PhotoUserContext);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (modalVisible == true) {
      setMessageName('');
    }
  }, [modalVisible]);

  // PERMISSÃO EM IOS
  useEffect(() => {
    async function getPermissionAsync() {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Desculpa, nós precisamos da permissão para acessar a camera!');
        }
      }
    }

    getPermissionAsync();
  }, []);

  // CLOSE MODAL
  function closeModal() {
    setModalVisible(!modalVisible);
    setName(userAccount.name);
    setWhatsapp(userAccount.whatsapp);
  }

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />;
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Configurações" />

        <Body>
          <ScrollView>
            <CardBody>
              <BodyHeader>
                {photoUserAccount !== null ? (
                  <ImgUser source={{ uri: photoUserAccount }} />
                ) : (
                  <ImgUser source={imgUser} />
                )}
              </BodyHeader>

              <Group>
                <Description>Nome</Description>
                <Valor>{name}</Valor>
              </Group>
              <Group>
                <Description>E-mail</Description>
                <Valor>{userAccount.email}</Valor>
              </Group>
              <LastGroup>
                <Description>WhatsApp</Description>
                <Valor>{whatsapp}</Valor>
              </LastGroup>
            </CardBody>
          </ScrollView>
          <Button
            labelButton={'EDITAR INFORMAÇÕES'}
            type={'Primary'}
            onPress={() => setModalVisible(true)}
          />
          <Space10></Space10>
          <Button
            labelButton={'SAIR DA CONTA'}
            type={'LightBlack'}
            onPress={() => signOut()}
          />
        </Body>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => closeModal()}
        >
          <HeaderModal>
            <BtnBack onPress={() => closeModal()}>
              <Feather name="arrow-left-circle" size={25} color="#19DD89" />
            </BtnBack>
            <TitleModal>CADASTRAR NOVA CARTEIRA</TitleModal>
          </HeaderModal>
          <Container>
            <Body style={styles.modal}>
              <BodyHeader>
                <ButtonFoto onPress={() => handleImg()}>
                  {photoUserAccount !== null ? (
                    <ImgUser source={{ uri: photoUserAccount }} />
                  ) : (
                    <ImgUser source={imgUser} />
                  )}
                </ButtonFoto>
              </BodyHeader>
              <InputIcon
                label={'Nome'}
                nameIcon={'user'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe seu nome'}
                selectionColor={'#19DD89'}
                value={name}
                onChangeText={name => setName(name)}
                message={messageName}
              />
              <InputIcon
                label={'WhatsApp'}
                nameIcon={'phone'}
                colorIcon={'#19DD89'}
                placeholderInput={'(00) 90000.0000'}
                keyboardType={'phone-pad'}
                selectionColor={'#19DD89'}
                secureTextEntry={false}
                value={whatsapp}
                onChangeText={whatsapp => setWhatsapp(whatsapp)}
                maxLength={11}
                message={''}
              />

              <Button
                labelButton={'SALVAR'}
                type={'Primary'}
                onPress={() => handleBtnSalvar()}
              />
            </Body>
          </Container>
        </Modal>
      </Container>
    </SafeAreaView>
  );
}
