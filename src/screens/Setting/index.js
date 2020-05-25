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
  const { photoUserAccount, handleImg, loading } = useContext(PhotoUserContext);

  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messageWhatsapp, setMessageWhatsapp] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const [messagePasswordConfirm, setMessagePasswordConfirm] = useState('');

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
                <Valor>{userAccount.name}</Valor>
              </Group>
              <Group>
                <Description>E-mail</Description>
                <Valor>{userAccount.email}</Valor>
              </Group>
              <LastGroup>
                <Description>WhatsApp</Description>
                <Valor>{userAccount.whatsapp}</Valor>
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
                nameIcon={'user'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe seu nome'}
                selectionColor={'#19DD89'}
                value={name}
                onChangeText={name => setName(name)}
                message={messageName}
              />
              <InputIcon
                nameIcon={'at-sign'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe seu email'}
                keyboardType={'email-address'}
                selectionColor={'#19DD89'}
                secureTextEntry={false}
                value={email}
                onChangeText={email => setEmail(email)}
                message={messageEmail}
              />
              <InputIcon
                nameIcon={'phone'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe seu WhatsApp'}
                keyboardType={'phone-pad'}
                selectionColor={'#19DD89'}
                secureTextEntry={false}
                value={whatsapp}
                onChangeText={whatsapp => setWhatsapp(whatsapp)}
                message={messageWhatsapp}
              />
              <InputIcon
                nameIcon={'lock'}
                colorIcon={'#19DD89'}
                placeholderInput={'Senha'}
                keyboardType={'default'}
                selectionColor={'#19DD89'}
                secureTextEntry={true}
                value={password}
                onChangeText={password => setPassword(password)}
                message={messagePassword}
              />
              <InputIcon
                nameIcon={'lock'}
                colorIcon={'#19DD89'}
                placeholderInput={'Repetir Senha'}
                keyboardType={'default'}
                selectionColor={'#19DD89'}
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={passwordConfirm =>
                  setPasswordConfirm(passwordConfirm)
                }
                message={messagePasswordConfirm}
              />

              <Button labelButton={'SALVAR'} type={'Primary'} />
            </Body>
          </Container>
        </Modal>
      </Container>
    </SafeAreaView>
  );
}
