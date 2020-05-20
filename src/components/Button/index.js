import React from "react";

import {
  BtnPrimary, BtnSecondary, BtnDanger, BtnLightBlack, BtnMiniPrimary, BtnPrimaryText, BtnSecondaryText, BtnDangerText, BtnLightBlackText, BtnMiniPrimaryText
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
    } else if(type == 'Danger'){
      return(
        <BtnDanger {...rest}>
          <BtnDangerText>{labelButton}</BtnDangerText>
        </BtnDanger>
      )
    } else if(type == 'LightBlack'){
      return(
        <BtnLightBlack {...rest}>
          <BtnLightBlackText>{labelButton}</BtnLightBlackText>
        </BtnLightBlack>
      )
    } else if(type == 'MiniPrimary'){
      return(
        <BtnMiniPrimary {...rest}>
          <BtnMiniPrimaryText>{labelButton}</BtnMiniPrimaryText>
        </BtnMiniPrimary>
      )
    }
  }

  return verifica(type);
}
