import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import GlobalStyle from '../../styles';

export default StyleSheet.create({
  breadcrumb: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 30,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export const TituloBreadcrumb = styled.Text`
  color: ${GlobalStyle.light_black};
  font-size: 15px;
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.black};
`;
