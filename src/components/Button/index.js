import React from "react";

import {
  BtnPrimary, BtnSecondary, BtnPrimaryText, BtnSecondaryText
} from "./styles";

export default function Button({ labelButton, type, ...rest }) {

  function verifica(type) {
    if (type == 'Primary') {
      return(
        <BtnPrimary {...rest}>
          <BtnPrimaryText>{labelButton}</BtnPrimaryText>
        </BtnPrimary>
      )
    } else if(type == 'Secondary'){
      return(
        <BtnSecondary {...rest}>
          <BtnSecondaryText>{labelButton}</BtnSecondaryText>
        </BtnSecondary>
      )
    }
  }

  return verifica(type);
}
