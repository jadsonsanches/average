import styled from 'styled-components/native';

import GlobalStyle from '../../styles';

export const FormGroup = styled.View`
  flex-direction: column;
  margin-bottom: 5px;
`;
export const GroupIconInput = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${GlobalStyle.white};
  padding: 0 10px;
  border-radius: 7px;
  border-color: ${GlobalStyle.gray};
  border-width: 1px;
  margin-bottom: 5px;
`;
export const Label = styled.Text`
  color: ${GlobalStyle.light_black};
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 2px;
  font-family: 'ABeeZee';
  text-shadow: 0px 0px 1px ${GlobalStyle.black};
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 17px;
  padding: 7px;
  font-family: 'ABeeZee-Italic';
`;
export const Message = styled.Text`
  color: ${GlobalStyle.danger};
  font-size: 14px;
  margin-right: 5px;
  text-align: right;
  font-family: 'ABeeZee';
`;
