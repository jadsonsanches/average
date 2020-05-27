import React from 'react';
import { Feather } from '@expo/vector-icons';

import { FormGroup, Label, GroupIconPicker, Picker, Message } from './styles';

export default function PickerIcon({
  label,
  nameIcon,
  colorIcon,
  selectedValue,
  // placeholderPicker,
  // keyboardType,
  // selectionColor,
  // secureTextEntry,
  // maxLength,
  // value,
  children,
  message,
  ...rest
}) {
  //console.log(message);

  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <GroupIconPicker>
        <Feather name={nameIcon} size={20} color={colorIcon} />
        <Picker
          selectedValue={selectedValue}
          {...rest}

          // placeholder={placeholderPicker}
          // placeholderTextColor={'#ddd'}
          // keyboardType={keyboardType}
          // selectionColor={selectionColor}
          // secureTextEntry={secureTextEntry}
          // maxLength={maxLength}
          // autoCorrect={false}
          // value={value}
        >
          {children}
        </Picker>
      </GroupIconPicker>
      {message !== '' && <Message>{message}</Message>}
    </FormGroup>
  );
}
