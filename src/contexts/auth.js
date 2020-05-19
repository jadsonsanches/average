import React, { createContext, useEffect, useState } from 'react';
import { StatusBar, BackHandler, Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import * as Font from 'expo-font';
import * as firebase from 'firebase';

import { firebaseConfig } from '../config/firebaseConfig';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');

  // CARREGA AS FONTES
  useEffect(() => {
    function loadFonts() {
      setLoading(true);

      async function useFonts(fontMap) {
        await Font.loadAsync(fontMap);
        loadStoragedData();

        setLoading(false);
        console.log('Fontes foram carregadas!');
      }

      const fontsLoaded = useFonts({
        ABeeZee: require('../assets/fonts/ABeeZee-Regular.ttf'),
        'ABeeZee-Italic': require('../assets/fonts/ABeeZee-Italic.ttf'),
      });
    }

    loadFonts();
  }, []);

  // CARREGA O FIREBASE
  useEffect(() => {
    function loadFirebase() {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase foi iniciado com sucesso!');
      }
    }

    loadFirebase();
  }, []);

  async function loadStoragedData() {
    setLoading(true);
    const storagedUser = await AsyncStorage.getItem('@RNAuth:user');

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    } else {
      setUser(null);
    }

    setLoading(false);
  }

  BackHandler.addEventListener('hardwareBackPress', function () {
    BackHandler.exitApp();
  });

  // LIMPA CAMPO DE MENSAGENS
  function clearMessages() {
    setMessageEmail('');
    setMessagePassword('');
  }

  // LOGIN
  async function login(email, password) {
    try {
      clearMessages();

      if (email === '') {
        setMessageEmail('Email é obrigatório');
        return;
      }
      if (password === '') {
        setMessagePassword('Senha é obrigatória');
        return;
      }

      setLoading(true);

      await firebase.auth().signInWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;

      setUser(currentUser);

      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(currentUser));

      setLoading(false);
    } catch (error) {
      console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`);
      setLoading(false);
      handleAuthError(error);
    }
  }

  // LOGOUT
  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  // ERRORS
  const handleAuthError = error => {
    if (error.code) {
      switch (error.code) {
        case 'auth/invalid-email':
          setMessageEmail('Email inválido');
          break;
        case 'auth/wrong-password':
          setMessagePassword('Senha inválida');
          break;
        case 'auth/user-not-found':
          Alert.alert(
            'Usuário não encontrado',
            'E-mail ou senha estão incorretos. Deseja se cadastrar?',
            [
              {
                text: 'Não',
                onPress: () => {},
              },
              {
                text: 'Sim',
                onPress: () => navigation.push('NewUser'),
              },
            ],
          );
          break;
        case 'auth/user-disabled':
          Alert.alert(
            'Usuário desabilitado',
            'Usuário encontra-se desabilitado, por favor entre em contato conosco.',
          );
          break;
        case 'auth/too-many-requests':
          Alert.alert(
            'Tente novamente',
            'Tentativas de login sem exito, por favor tente novamente mais tarde.',
          );
          break;
      }
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <AuthContext.Provider
        value={{
          signed: !!user,
          loading,
          messageEmail,
          messagePassword,
          login,
          signOut
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContext;
