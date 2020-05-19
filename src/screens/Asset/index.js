import React, { useState } from 'react';
import { FlatList, Modal, SafeAreaView } from 'react-native';
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
  Card,
  ImgAsset,
  View,
  TitleAsset,
  ViewHalf,
  Half,
  LastHalf,
  Broker,
  SubView,
  ViewBalance,
  ViewQuantity,
  SubViewTitle,
  SubViewDescription,
  HeaderModal,
  BtnBack,
  TitleModal,
} from './styles';

export default function Asset() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Minhas Ações" />

        <Body>
          <InputIcon
            nameIcon={'search'}
            colorIcon={'#ddd'}
            placeholderInput={'Digite um ticker para pesquisar'}
            selectionColor={'#19DD89'}
          />

          <CardBody>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              style={styles.listAssets}
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <Card>
                  <ImgAsset source={imgAsset} />
                  <View>
                    <TitleAsset>PETR4 - PETROBRÁS</TitleAsset>
                    <Broker>Clear Corretora</Broker>
                    <SubView>
                      <ViewBalance>
                        <SubViewTitle>Saldo Atual</SubViewTitle>
                        <SubViewDescription>R$ 0.000,00</SubViewDescription>
                      </ViewBalance>
                      <ViewQuantity>
                        <SubViewTitle>Cotas</SubViewTitle>
                        <SubViewDescription>1000</SubViewDescription>
                      </ViewQuantity>
                    </SubView>
                  </View>
                </Card>
              )}
            />
          </CardBody>

          <Button
            labelButton={'NOVA AÇÃO'}
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
          <HeaderModal>
            <BtnBack
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Feather name="arrow-left-circle" size={25} color="#19DD89" />
            </BtnBack>
            <TitleModal>CADASTRAR NOVA AÇÃO</TitleModal>
          </HeaderModal>
          <Container>
            <Body style={styles.modal}>
              <InputIcon
                label={'Instituição Financeira:'}
                nameIcon={'shield'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe o nome da instuição financeira'}
                selectionColor={'#19DD89'}
              />
              <InputIcon
                label={'Ativo:'}
                nameIcon={'file'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe o ativo'}
                selectionColor={'#19DD89'}
              />
              <ViewHalf>
                <Half>
                  <InputIcon
                    label={'Quantidade:'}
                    nameIcon={'plus-circle'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'100'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                  />
                </Half>
                <LastHalf>
                  <InputIcon
                    label={'Valor:'}
                    nameIcon={'dollar-sign'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'R$ 0,00'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                  />
                </LastHalf>
              </ViewHalf>
              <ViewHalf>
                <Half>
                  <InputIcon
                    label={'Data da Compra:'}
                    nameIcon={'calendar'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'dd/mm/aaaa'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                    maxLength={10}
                  />
                </Half>
                <LastHalf>
                  <InputIcon
                    label={'Taxas:'}
                    nameIcon={'award'}
                    colorIcon={'#19DD89'}
                    placeholderInput={'R$ 0,00'}
                    selectionColor={'#19DD89'}
                    keyboardType={'number-pad'}
                  />
                </LastHalf>
              </ViewHalf>

              <Button labelButton={'SALVAR'} type={'Primary'} />
            </Body>
          </Container>
        </Modal>
      </Container>
    </SafeAreaView>
  );
}
