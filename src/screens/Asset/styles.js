import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import GlobalStyle from '../../styles';

export default StyleSheet.create({
  listAssets: {},
  safeArea: {
    flex: 1,
    backgroundColor: '#1AC079',
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
export const CardBody = styled.View`
  flex: 1;
  background-color: ${GlobalStyle.white};
  border-width: 1px;
  border-color: ${GlobalStyle.gray};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImgAsset = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
export const View = styled.View`
  padding: 0 0 0 10px;
  flex: 1;
`;
export const TitleAsset = styled.Text`
  color: ${GlobalStyle.primary};
  font-size: 15px;
  height: 16px;
  font-family: 'ABeeZee-Italic';
  text-shadow: 0px 0px 1px ${GlobalStyle.primary};
`;
export const Broker = styled.Text`
  font-family: 'ABeeZee-Italic';
`;
export const SubView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ViewHalf = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Half = styled.View`
  width: 48%;
  margin-right: 2%;
`;
export const LastHalf = styled.View`
  width: 50%;
  margin-right: 0;
`;
export const ViewBalance = styled.View``;
export const ViewQuantity = styled.View``;
export const SubViewTitle = styled.Text`
  color: ${GlobalStyle.light_black};
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.black};
`;
export const SubViewDescription = styled.Text``;

export const HeaderModal = styled.View`
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${GlobalStyle.white};
  border-color: ${GlobalStyle.gray};
  border-width: 1px;
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
