import React, { useState, useContext } from 'react';
import { Text, View, StatusBar, Alert, AsyncStorage } from 'react-native';

import AuthContext from "../../contexts/auth";

import InputIcon from '../../components/Input';
import Button from '../../components/Button';

import bg from '../../assets/img/background.png';
import logoImg from '../../assets/img/logotipo.png';
import styles from './styles';

import {
  Container,
  ImgBackground,
  ImgLogotipo,
  LoginTxt,
  Header,
  LinkCadastro,
} from './styles';

export default function SignIn({ navigation }) {
  const { login, messageEmail, messagePassword } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
      login(email, password);

      // await firebase
      //   .firestore()
      //   .collection('users')
      //   .where('user_id', '==', currentUser.uid)
      //   .get()
      //   .then(snapshot => {
      //     if (snapshot.empty) {
      //       console.log('NO MATCHING DOCUMENTS');
      //     }

      //     snapshot.forEach(doc => {
      //       //console.log(doc.id, '=>', doc.data());
      //       //setUserStorage(doc.data());
      //       navigation.push('Routes');
      //     });
      //   });
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <Container>
        <ImgBackground source={bg} resizeMode="cover">
          <Header>
            <ImgLogotipo source={logoImg} />
            <LoginTxt>Login</LoginTxt>
          </Header>

          <InputIcon
            nameIcon={'at-sign'}
            colorIcon={'#19DD89'}
            placeholderInput={'Email'}
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

          <View style={styles.viewCadastre}>
            <Text style={styles.novoUsuario}>Novo Usuário?</Text>
            <LinkCadastro onPress={() => navigation.push('NewUser')}>
              <Text style={styles.b}>Cadastre-se</Text>
            </LinkCadastro>
          </View>

          <Button
            labelButton={'LOGIN'}
            type={'Primary'}
            onPress={() => handleLogin()}
          />
        </ImgBackground>
      </Container>
    </>
  );
}
