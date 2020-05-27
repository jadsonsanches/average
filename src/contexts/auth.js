import React, { createContext, useEffect, useState } from 'react';
import { StatusBar, BackHandler, Alert, YellowBox } from 'react-native';
import { AsyncStorage } from 'react-native';
import * as Font from 'expo-font';

import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import { firebaseConfig } from '../config/firebaseConfig';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  YellowBox.ignoreWarnings(['Setting a timer']);

  const [userAuth, setUserAuth] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');

  useEffect(() => {
    if (userAuth) {
      getUser();
    }
  }, [userAuth]);

  useEffect(() => {
    // CARREGA AS FONTES
    function loadFonts() {
      setLoading(true);

      async function useFonts(fontMap) {
        await Font.loadAsync(fontMap);
        //loadStoragedData();
        console.log('Fontes foram carregadas!');
      }

      const fontsLoaded = useFonts({
        ABeeZee: require('../assets/fonts/ABeeZee-Regular.ttf'),
        'ABeeZee-Italic': require('../assets/fonts/ABeeZee-Italic.ttf'),
      });
    }

    // CARREGA DADOS DO STORAGED
    async function loadStoragedData() {
      setLoading(true);
      const storagedUser = await AsyncStorage.getItem('@RNAuth:userAuth');

      if (storagedUser) {
        //getUser(JSON.parse(storagedUser));
        setUserAuth(JSON.parse(storagedUser));
      } else {
        setUserAuth(null);
        setLoading(false);
      }
    }

    loadFonts();
    loadStoragedData();
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

  // FUNÇÃO PARA QUANDO CLICAR EM VOLTAR
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

      setUserAuth(currentUser);

      await AsyncStorage.setItem(
        '@RNAuth:userAuth',
        JSON.stringify(currentUser),
      );

      //getUser(currentUser);
    } catch (error) {
      console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`);
      setLoading(false);
      handleAuthError(error);
    }
  }

  // LOGOUT
  function signOut() {
    Alert.alert('Deslogar', 'Deseja realmente deslogar da conta?', [
      {
        text: 'Não',
        onPress: () => {
          return;
        },
      },
      {
        text: 'Sim',
        onPress: () => {
          logOut();
        },
      },
    ]);
  }

  async function logOut() {
    await AsyncStorage.clear();
    setUserAuth(null);
  }

  // CARREGA OS DADOS DO USUARIO
  async function getUser() {
    try {
      setLoading(true);

      await firebase
        .firestore()
        .collection('users')
        .doc(userAuth.uid)
        .get()
        .then(res => {
          setUserAccount(res.data());
        })

      setLoading(false);
    } catch (error) {
      console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`);
    }
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
          signed: !!userAuth,
          userAuth,
          userAccount,
          loading,
          messageEmail,
          messagePassword,
          login,
          signOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContext;
