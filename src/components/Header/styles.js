import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import GlobalStyle from '../../styles';

export const HeaderGradient = styled(LinearGradient)`
  height: 100px;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;
export const ViewRight = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const LblValorTotal = styled.Text`
  color: ${GlobalStyle.white};
  font-size: 15px;
  font-family: 'ABeeZee-Italic';
  text-align: right;
`;
export const TxtValorTotal = styled.Text`
  color: ${GlobalStyle.white};
  font-weight: bold;
  font-size: 15px;
  text-align: right;
`;
export const ImgUser = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-color: ${GlobalStyle.white};
  border-width: 2px;
  margin-left: 10px;
`;
export const Logotipo = styled.Image`
  width: 130px;
  resize-mode: contain;
`;
