import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import GlobalStyle from '../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1AC079',
  },
});

export const Space10 = styled.View`
  height: 10px;
`;
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;
export const Body = styled.View`
  flex: 1;
  padding: 20px 24px;
`;
export const CardBody = styled.View`
  background-color: ${GlobalStyle.white};
  border-width: 1px;
  border-color: ${GlobalStyle.gray};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
export const BodyHeader = styled.View`
  margin: 20px 0 30px;
  align-items: center;
`;
export const ButtonFoto = styled.TouchableOpacity`

`
export const ImgUser = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const Group = styled.View`
  border-color: ${GlobalStyle.gray};
  border-top-width: 1px;
  padding: 10px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const LastGroup = styled.View`
  border-color: ${GlobalStyle.gray};
  border-top-width: 1px;
  border-bottom-width: 1px;
  padding: 10px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const Description = styled.Text`
  font-size: 17px;
  color: ${GlobalStyle.light_black};
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.black};
`;
export const Valor = styled.Text`
  font-family: 'ABeeZee-Italic';
  font-size: 17px;
  color: ${GlobalStyle.gray};
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
export const TitleModal = styled.Text`
  color: ${GlobalStyle.dark_gray};
  font-size: 17px;
  margin: 0 65px;
  text-align: center;
  font-family: 'ABeeZee-Italic';
  text-shadow: 0px 0px 1px ${GlobalStyle.dark_gray};
`;
