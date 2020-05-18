import styled from 'styled-components/native';

import GlobalStyle from '../../styles';

export const BtnPrimary = styled.TouchableOpacity`
  background-color: ${GlobalStyle.primary};
  border-radius: 7px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const BtnSecondary = styled.TouchableOpacity`
  background-color: ${GlobalStyle.dark_gray};
  border-radius: 7px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const BtnPrimaryText = styled.Text`
  color: ${GlobalStyle.white};
  font-family: 'ABeeZee-Italic';
  text-shadow: 1px 1px 1px ${GlobalStyle.secondary};
  font-size: 17px;
`;
export const BtnSecondaryText = styled.Text`
  color: ${GlobalStyle.white};
  font-family: 'ABeeZee-Italic';
  text-shadow: 1px 1px 1px ${GlobalStyle.light_black};
  font-size: 17px;
`;
