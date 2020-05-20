import styled from 'styled-components/native';

import GlobalStyle from '../../styles';

export const BtnPrimary = styled.TouchableOpacity`
  background-color: ${GlobalStyle.primary};
  border-radius: 7px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
export const BtnSecondary = styled.TouchableOpacity`
  background-color: ${GlobalStyle.dark_gray};
  border-radius: 7px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
export const BtnDanger = styled.TouchableOpacity`
  background-color: ${GlobalStyle.danger};
  border-radius: 7px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
export const BtnLightBlack = styled.TouchableOpacity`
  background-color: ${GlobalStyle.light_black};
  border-radius: 7px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
export const BtnMiniPrimary = styled.TouchableOpacity`
  background-color: ${GlobalStyle.primary};
  border-radius: 7px;
  height: 30px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
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
export const BtnDangerText = styled.Text`
  color: ${GlobalStyle.white};
  font-family: 'ABeeZee-Italic';
  text-shadow: 1px 1px 1px ${GlobalStyle.dark_danger};
  font-size: 17px;
`;
export const BtnLightBlackText = styled.Text`
  color: ${GlobalStyle.white};
  font-family: 'ABeeZee-Italic';
  text-shadow: 1px 1px 1px ${GlobalStyle.black};
  font-size: 17px;
`;
export const BtnMiniPrimaryText = styled.Text`
  color: ${GlobalStyle.white};
  font-family: 'ABeeZee-Italic';
  text-shadow: 1px 1px 1px ${GlobalStyle.secondary};
  font-size: 12px;
`;
