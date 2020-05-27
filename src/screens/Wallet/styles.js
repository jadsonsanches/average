import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import GlobalStyle from '../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1AC079',
  },
  listCardWallet: {
    marginBottom: 10,
  },
  modal: {
    backgroundColor: '#f5f5f5',
  },
});

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Body = styled.View`
  flex: 1;
  padding: 20px 24px;
`;
export const CardWallet = styled.View`
  height: 110px;
  background-color: ${GlobalStyle.white};
  flex-direction: column;
  border-radius: 10px;
  border-color: ${GlobalStyle.gray};
  border-width: 1px;
  margin-bottom: 10px;
`;
export const HeaderCardWallet = styled.View`
  background-color: ${GlobalStyle.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-color: ${GlobalStyle.light_gray};
  border-bottom-width: 1px;
`;
export const TitleCardWallet = styled.Text`
  color: ${GlobalStyle.primary};
  padding: 5px 0;
  font-size: 17px;
  font-family: 'ABeeZee-Italic';
`;
export const BodyCardWallet = styled.View`
  flex: 1;
  padding: 3px;
  flex-direction: row;
`;
export const BoxBodyCardWallet = styled.View`
  flex: 1;
  border-right-color: ${GlobalStyle.light_gray};
  border-right-width: 1px;
  align-items: center;
  justify-content: center;
`;
export const LastBoxBodyCardWallet = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const LittleTitle = styled.Text`
  font-size: 11px;
  padding: 3px;
  font-family: 'ABeeZee-Italic';
`;
export const Description = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
export const HeaderModal = styled.View`
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${GlobalStyle.white};
  border-color: ${GlobalStyle.gray};
  border-bottom-width: 1px;
`;
export const BtnBack = styled.TouchableOpacity`
  height: 60px;
  width: 50px;
  position: absolute;
  left: 15px;
  align-items: center;
  justify-content: center;
`;
export const BtnDelete = styled.TouchableOpacity`
  height: 60px;
  width: 50px;
  position: absolute;
  right: 15px;
  align-items: center;
  justify-content: center;
`;
export const TitleModal = styled.Text`
  color: ${GlobalStyle.dark_gray};
  font-size: 17px;
  margin: 0 65px;
  text-align: center;
  font-family: 'ABeeZee-Italic';
  text-shadow: 0px 0px 1px ${GlobalStyle.dark_gray};
`;
