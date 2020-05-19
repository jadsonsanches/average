import styled from 'styled-components/native';

import GlobalStyle from '../../styles';

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
  margin: 20px 0 40px;
`;
export const Titulo = styled.Text`
  font-size: 40px;
  color: ${GlobalStyle.primary};
  font-family: 'ABeeZee';
`;
export const Header = styled.View`
  align-items: center;
  margin: 20px 0;
`;
export const SubTitulo = styled.Text`
  font-size: 20px;
  color: ${GlobalStyle.white};
  padding: 0 50px;
  text-align: center;
  font-family: 'ABeeZee';
`;
export const Form = styled.View`
  margin-bottom:10px;
`
