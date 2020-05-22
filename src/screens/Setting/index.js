import React, { useContext, useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Modal,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import AuthContext from '../../contexts/auth';

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

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [photoUserAccount, setPhotoUserAccount] = useState('');

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

  // ALERT SE DESEJA INSERIR UMA NOVA FOTO OU NAO
  function handleImg() {
    Alert.alert('Inserir foto', 'Deseja inserir uma nova foto?', [
      {
        text: 'Não',
        onPress: () => {},
      },
      {
        text: 'Sim',
        onPress: () => handlePickImage(),
      },
    ]);
  }

  // AQUI ONDE ABRE A GALERIA DO CELULAR PARA O USUÁRIO ESCOLHER A FOTO
  async function handlePickImage() {
    try {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.6,
      });

      if (!data.cancelled) {
        setLoading(true);

        handleUploadImgStorage(data.uri)
          .then(() => {
            setLoading(false);
            Alert.alert('Sucesso', 'Foto atualizada com sucesso!');
          })
          .catch(error => {
            setLoading(false);
            Alert.alert(error);
          });

        handleUpdateImgUserAccount();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // INSERE A FOTO NA PASTA imgUsers DENTRO DO STORAGE DO FIREBASE
  async function handleUploadImgStorage(uri) {
    const res = await fetch(uri);
    const blob = await res.blob();

    let ref = firebase
      .storage()
      .ref()
      .child('imgUsers/' + userAccount.user_id);

    ref
      .getDownloadURL()
      .then(function (urlPhoto) {
        setPhotoUserAccount((urlPhoto).toString());
      })
      .catch(error =>
        console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`),
      );

    return ref.put(blob);
  }

  // INSERE A FOTO NO CAMPO AVATAR DO USER ACCOUNT
  async function handleUpdateImgUserAccount() {
    const ref = await firebase
      .firestore()
      .collection('users')
      .doc(userAccount.user_id)
      .update({ avatar_url: photoUserAccount });
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Configurações" />

        <Body>
          <ScrollView>
            <CardBody>
              <BodyHeader>
                <ButtonFoto onPress={() => handleImg()}>
                  <ImgUser source={{ uri: userAccount.avatar_url }} />
                </ButtonFoto>
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
