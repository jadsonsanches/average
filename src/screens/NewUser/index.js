import React, { useState } from 'react';
import { StatusBar, Alert, View, ActivityIndicator } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

import InputIcon from '../../components/Input';
import Button from '../../components/Button';

import bg from '../../assets/img/background.png';
import logoImg from '../../assets/img/logotipo.png';

import {
  Container,
  ImgBackground,
  Header,
  ImgLogotipo,
  Titulo,
  SubTitulo,
  Form,
} from './styles';

export default function NewUser({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messagePassword, setMessagePassword] = useState('');
  const [messagePasswordConfirm, setMessagePasswordConfirm] = useState('');

  async function newUser() {
    try {
      clearComponents();

      if (name === '') {
        setMessageName('Nome é obrirgatório');
        return;
      }
      if (email === '') {
        setMessageEmail('Email é obrirgatório');
        return;
      }
      if (password === '') {
        setMessagePassword('Senha é obrirgatória');
        return;
      }
      if (passwordConfirm === '') {
        setMessagePasswordConfirm('Confirmação de senha é obrirgatória');
        return;
      }
      if (password !== passwordConfirm) {
        setMessagePasswordConfirm(
          'Senha de confirmação diferente da senha informada',
        );
        return;
      }

      setLoading(true);
      const userAuth = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      let data = {
        avatar_url: '',
        email: email.toLowerCase(),
        name: name,
        total: '0,00',
        whatsapp: '',
        user_id: userAuth.user.uid,
      };

      await firebase
        .firestore()
        .collection('users')
        .doc(userAuth.user.uid)
        .set(data);

      setLoading(false);

      Alert.alert(
        'Sucesso',
        'Cadastro realizado com sucesso, seja bem vindo!',
        [
          {
            text: 'Realizar o login',
            onPress: () => navigation.push('SignIn'),
          },
        ],
      );
    } catch (error) {
      console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`);
      handleAuthError(error);
    }
  }

  function clearComponents() {
    setMessageName('');
    setMessageEmail('');
    setMessagePassword('');
    setMessagePasswordConfirm('');
  }

  const handleAuthError = error => {
    setLoading(false);

    if (error.code) {
      switch (error.code) {
        case 'auth/invalid-email':
          setMessageEmail('Email inválido');
          break;
        case 'auth/weak-password':
          setMessagePassword('Senha deverá ser com mais de 6 caractéres');
          break;
        case 'auth/email-already-in-use':
          setMessageEmail('Email já esta sendo utilizado em outra conta');
          break;
      }
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <Container>
        <ImgBackground source={bg} resizeMode="cover">
          <Header>
            <ImgLogotipo source={logoImg} />
            <Titulo>Novo Usuário</Titulo>
            <SubTitulo>Preencha todos os campos para se cadastrar!</SubTitulo>
          </Header>
          <Form>
            <InputIcon
              nameIcon={'user'}
              colorIcon={'#19DD89'}
              placeholderInput={'Nome Completo'}
              keyboardType={'default'}
              selectionColor={'#19DD89'}
              secureTextEntry={false}
              value={name}
              onChangeText={name => setName(name)}
              message={messageName}
            />

            <InputIcon
              nameIcon={'send'}
              colorIcon={'#19DD89'}
              placeholderInput={'E-mail'}
              keyboardType={'email-address'}
              selectionColor={'#19DD89'}
              secureTextEntry={false}
              value={email}
              onChangeText={email => setEmail(email)}
              message={messageEmail}
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
          </Form>

          <Button
            labelButton={'CADASTRAR'}
            type={'Primary'}
            onPress={() => newUser()}
          />

          <Button
            labelButton={'CANCELAR'}
            type={'Secondary'}
            onPress={() => navigation.push('SignIn')}
          />
        </ImgBackground>
      </Container>
    </>
  );
}
