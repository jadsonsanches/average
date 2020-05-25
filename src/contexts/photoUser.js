import React, { useContext, createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import * as ImagePicker from 'expo-image-picker';

import AuthContext from './auth';

const PhotoUserContext = createContext(null);

export function PhotoUserProvider({ children }) {
  const { userAccount } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [photoUserAccount, setPhotoUserAccount] = useState(null);

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [messageName, setMessageName] = useState('');

  useEffect(() => {
    if (userAccount) {
      clearInputs();

      if (userAccount.avatar_url !== '') {
        setPhotoUserAccount(userAccount.avatar_url);
      }
      setName(userAccount.name);
      setWhatsapp(userAccount.whatsapp);
    }
  }, [userAccount]);

  // useEffect(() => {
  //   if (whatsapp !== '') {
  //     //text = `(${whatsapp.substr(0, 2)}) ${whatsapp.substr(2,5)}.${whatsapp.substr(7,4)}`;
  //     console.log(whatsapp);
  //   }
  // }, [whatsapp]);

  // LIMPA OS INPUTS
  function clearInputs() {
    setPhotoUserAccount(null);
    setName('');
    setWhatsapp('');
  }

  // // ALERT SE DESEJA INSERIR UMA NOVA FOTO OU NAO
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
          .then(function (snapshot) {
            snapshot.ref
              .getDownloadURL()
              .then(function (urlPhoto) {
                handleUpdateImgUserAccount(urlPhoto);
                setLoading(false);
                Alert.alert('Sucesso', 'Foto atualizada com sucesso!');
              })
              .catch(error => {
                setLoading(false);
                console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`);
              });
          })
          .catch(error => {
            Alert.alert(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // INSERE A FOTO NA PASTA imgUsers DENTRO DO STORAGE DO FIREBASE
  async function handleUploadImgStorage(uri) {
    const res = await fetch(uri);
    const blob = await res.blob();

    let ref = await firebase
      .storage()
      .ref()
      .child('imgUsers/' + userAccount.user_id);

    return ref.put(blob);
  }

  // INSERE A FOTO NO CAMPO AVATAR DO USER ACCOUNT
  async function handleUpdateImgUserAccount(urlPhoto) {
    const ref = await firebase
      .firestore()
      .collection('users')
      .doc(userAccount.user_id)
      .update({ avatar_url: urlPhoto });

    setPhotoUserAccount(urlPhoto);
  }

  async function handleBtnSalvar() {
    if (name === '') {
      setMessageName('Nome é obrirgatório');
      return;
    }

    await firebase
      .firestore()
      .collection('users')
      .doc(userAccount.user_id)
      .update({
        name: name,
        whatsapp: whatsapp,
      })
      .then(() => {
        userAccount.name = name;
        userAccount.whatsapp = whatsapp;
        Alert.alert('Sucesso', 'Informações foram alteradas com sucesso!');
      });
  }

  return (
    <>
      <PhotoUserContext.Provider
        value={{
          photoUserAccount,
          loading,
          name,
          setName,
          whatsapp,
          setWhatsapp,
          messageName,
          setMessageName,
          handleImg,
          handleBtnSalvar,
        }}
      >
        {children}
      </PhotoUserContext.Provider>
    </>
  );
}

export default PhotoUserContext;
