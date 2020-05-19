import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import GlobalStyle from '../../styles';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1AC079',
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
export const ImgUser = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
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
