import React from 'react';
import { Feather } from '@expo/vector-icons';

import { FormGroup, Label, GroupIconInput, Input, Message } from './styles';

export default function InputIcon({
  label,
  nameIcon,
  colorIcon,
  placeholderInput,
  keyboardType,
  selectionColor,
  secureTextEntry,
  maxLength,
  value,
  message,
  ...rest
}) {
  //console.log(message);

  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <GroupIconInput>
        <Feather name={nameIcon} size={20} color={colorIcon} />
        <Input
          placeholder={placeholderInput}
          placeholderTextColor={'#ddd'}
          keyboardType={keyboardType}
          selectionColor={selectionColor}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          autoCorrect={false}
          value={value}
          {...rest}
        />
      </GroupIconInput>
      {message !== '' && <Message>{message}</Message>}
    </FormGroup>
  );
}
