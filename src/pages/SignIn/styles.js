import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import GlobalStyle from '../../styles';

export default StyleSheet.create({
  novoUsuario: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'ABeeZee',
  },
  b: {
    color: '#19DD89',
    fontSize: 19,
    paddingLeft: 5,
    textDecorationLine: 'underline',
    fontFamily: 'ABeeZee-Italic',
  },
  viewCadastre: {
    marginTop: 0,
    marginBottom: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Container = styled.View`
  flex: 1;
  background-color: #222;
`;
export const ImgBackground = styled.ImageBackground`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
`;
export const ImgLogotipo = styled.Image`
  margin: 40px 0;
`;
export const LoginTxt = styled.Text`
  font-size: 40px;
  color: ${GlobalStyle.white};
  margin: 0 0 50px;
  font-family: 'ABeeZee-Italic';
`;
export const Header = styled.View`
  align-items: center;
`;
export const LinkCadastro = styled.TouchableOpacity``;
