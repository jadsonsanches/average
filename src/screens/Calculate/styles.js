import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import GlobalStyle from '../../styles';

export default StyleSheet.create({
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
  background-color: ${GlobalStyle.white};
  border-width: 1px;
  border-color: ${GlobalStyle.gray};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Title = styled.Text`
  color: ${GlobalStyle.primary};
  font-size: 17px;
  padding: 3px 0;
  border-bottom-width: 1px;
  border-color: ${GlobalStyle.gray};
  margin-bottom: 10px;
  font-family: 'ABeeZee-Italic';
  text-shadow: 0px 0px 1px ${GlobalStyle.secondary};
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
export const ValorInvestido = styled.Text`
  text-align: center;
  font-size: 17px;
  color: ${GlobalStyle.light_black};
  padding: 10px;
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.black};
`;
export const Vr = styled.Text`
  color: ${GlobalStyle.primary};
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.primary};
`;
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
export const BodyHeader = styled.View`
  margin: 10px 0 20px;
  flex-direction: column;
  align-items: center;
`;
export const ImgAsset = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
export const TitleAsset = styled.Text`
  font-weight: bold;
  font-size: 17px;
  padding: 5px 0;
  color: ${GlobalStyle.light_black};
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.black};
`;
export const GroupModal = styled.View`
  border-color: ${GlobalStyle.gray};
  border-top-width: 1px;
  padding: 10px 0;
  flex-direction: row;
  justify-content: space-between;
`;
export const LastGroupModal = styled.View`
  border-color: ${GlobalStyle.gray};
  border-top-width: 1px;
  border-bottom-width: 1px;
  padding: 10px 0;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Description = styled.Text`
  font-size: 17px;
  color: ${GlobalStyle.light_black};
  font-family: 'ABeeZee-Italic';
`;
export const Valor = styled.Text`
  font-size: 17px;
  color: ${GlobalStyle.light_black};
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.black};
`;
export const ValorVerde = styled.Text`
  font-size: 17px;
  color: ${GlobalStyle.primary};
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.primary};
`;
