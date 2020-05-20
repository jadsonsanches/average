import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';

import AuthContext from '../../contexts/auth';

import InputIcon from '../../components/Input';
import Button from '../../components/Button';
import Breadcrumb from '../../components/Breadcrumb';
import styles from './styles';

import {
  Container,
  Body,
  CardBody,
  BodyHeader,
  ImgUser,
  Group,
  LastGroup,
  Description,
  Valor,
  Space10,
  HeaderModal,
  BtnBack,
  TitleModal,
} from './styles';

export default function Setting() {
  const { userAccount, signOut } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Container>
        <Breadcrumb Titulo="Configurações" />

        <Body>
          <ScrollView>
            <CardBody>
              <BodyHeader>
                <ImgUser source={{ uri: userAccount.avatar_url }} />
              </BodyHeader>

              <Group>
                <Description>Nome</Description>
                <Valor>{userAccount.name}</Valor>
              </Group>
              <Group>
                <Description>E-mail</Description>
                <Valor>{userAccount.email}</Valor>
              </Group>
              <LastGroup>
                <Description>WhatsApp</Description>
                <Valor>{userAccount.whatsapp}</Valor>
              </LastGroup>
              {/* <LastGroup>
                <Description>Senha</Description>
                <Button
                  labelButton={'MUDAR SENHA'}
                  type={'MiniPrimary'}
                  onPress={() => {}}
                />
              </LastGroup> */}
            </CardBody>
          </ScrollView>
          <Button
            labelButton={'EDITAR INFORMAÇÕES'}
            type={'Primary'}
            onPress={() => setModalVisible(true)}
          />
          <Space10></Space10>
          <Button
            labelButton={'SAIR DA CONTA'}
            type={'LightBlack'}
            onPress={() => signOut()}
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
            <TitleModal>CADASTRAR NOVA CARTEIRA</TitleModal>
          </HeaderModal>
          <Container>
            <Body style={styles.modal}>
              <InputIcon
                label={'Nome:'}
                nameIcon={'user'}
                colorIcon={'#19DD89'}
                placeholderInput={'Informe um nome para a carteira'}
                selectionColor={'#19DD89'}
              />

              <Button labelButton={'SALVAR'} type={'Primary'} />
            </Body>
          </Container>
        </Modal>
      </Container>
    </SafeAreaView>
  );
}
