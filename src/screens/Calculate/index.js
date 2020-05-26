import React, { useState } from 'react';
import { Modal, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import imgAsset from '../../assets/img/average-icon.png';

import InputIcon from '../../components/Input';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '../../components/Button';
import styles from './styles';

import {
  Container,
  Body,
  CardBody,
  Title,
  ViewHalf,
  Half,
  LastHalf,
  ValorInvestido,
  Vr,
  HeaderModal,
  BtnBack,
  TitleModal,
  BodyHeader,
  ImgAsset,
  TitleAsset,
  GroupModal,
  LastGroupModal,
  Description,
  Valor,
  ValorVerde,
} from './styles';

export default function Calculate() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Calcular Preço Médio" />

        <Body>
          <ScrollView>
            <CardBody>
              <Title>Status Atual</Title>
              <InputIcon
                label={'Ativo:'}
                nameIcon={'file'}
                colorIcon={'#19DD89'}
                placeholderInput={'Por exemplo PETR4, MAGLU3, etc..'}
                selectionColor={'#19DD89'}
              />
              <ViewHalf>
                <Half>
                  <InputIcon
                    label={'Cotas Atuais:'}
                    nameIcon={'plus-circle'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'0'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                  />
                </Half>
                <LastHalf>
                  <InputIcon
                    label={'Preço Médio:'}
                    nameIcon={'dollar-sign'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'R$ 0,00'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                  />
                </LastHalf>
              </ViewHalf>
            </CardBody>
            <CardBody>
              <Title>Status a Investir</Title>
              <ViewHalf>
                <Half>
                  <InputIcon
                    label={'Cotas a Comprar:'}
                    nameIcon={'plus-circle'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'0'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                  />
                </Half>
                <LastHalf>
                  <InputIcon
                    label={'Preço Atual:'}
                    nameIcon={'dollar-sign'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'R$ 0,00'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                  />
                </LastHalf>
              </ViewHalf>

              <ValorInvestido>
                Valor Investido: <Vr>R$ 0,00</Vr>
              </ValorInvestido>
            </CardBody>
          </ScrollView>
          <Button
            labelButton={'CALCULAR'}
            type={'Primary'}
            onPress={() => setModalVisible(true)}
          />
        </Body>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <SafeAreaView style={{ backgroundColor: '#ffffff' }}></SafeAreaView>
          <HeaderModal>
            <BtnBack
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Feather name="arrow-left-circle" size={25} color="#19DD89" />
            </BtnBack>
            <TitleModal>RELATÓRIO PREÇO MÉDIO</TitleModal>
          </HeaderModal>
          <Container>
            <Body style={styles.modal}>
              <BodyHeader>
                <ImgAsset source={imgAsset} />
                <TitleAsset>PETR4 - PETROBRÁS</TitleAsset>
              </BodyHeader>
              <GroupModal>
                <Description>Cotas Atuais</Description>
                <Valor>235</Valor>
              </GroupModal>
              <GroupModal>
                <Description>Preço Médio</Description>
                <Valor>R$ 25,35</Valor>
              </GroupModal>
              <GroupModal>
                <Description>Cotas a Comprar</Description>
                <Valor>100</Valor>
              </GroupModal>
              <GroupModal>
                <Description>Preço Atual</Description>
                <Valor>R$ 16,20</Valor>
              </GroupModal>
              <GroupModal>
                <Description>Valor Investido</Description>
                <Valor>R$ 1.620,00</Valor>
              </GroupModal>
              <GroupModal>
                <Description>Cotas Futuras</Description>
                <ValorVerde>335</ValorVerde>
              </GroupModal>
              <GroupModal>
                <Description>Preço Médio Futuro</Description>
                <ValorVerde>R$ 23,50</ValorVerde>
              </GroupModal>
              <LastGroupModal>
                <Description>Diferença de Preço Médio</Description>
                <ValorVerde>R$ -1,85</ValorVerde>
              </LastGroupModal>

              <Button labelButton={'ENVIAR PARA MEU E-MAIL'} type={'Primary'} />
            </Body>
          </Container>
        </Modal>
      </Container>
    </SafeAreaView>
  );
}
