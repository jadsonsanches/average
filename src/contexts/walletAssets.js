import React, { useContext, createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

import AuthContext from './auth';

const WalletAssetContext = createContext(null);

export function WalletAssetsProvider({ children }) {
  const { userAccount } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWalletVisible, setModalWalletVisible] = useState(false);

  const [wallets, setWallets] = useState([]);
  const [walletSelect, setWalletSelect] = useState({});
  const [name, setName] = useState('');
  const [messageName, setMessageName] = useState('');
  const [totalValue, setTotalValue] = useState('0.00K');
  const [result, setResult] = useState('0.00K');
  const [variation, setVariation] = useState('0.00');

  let ArrayWallet = [];
  let dataWallet = {};

  // ASSIM QUE CARREGA O USER ACCOUNT, CARREGA AS CARTEIRAS QUE ELE TEM
  useEffect(() => {
    if (userAccount) {
      async function getWallets() {
        setLoading(true);

        await firebase
          .firestore()
          .collection('wallets')
          .where('user_id', '==', userAccount.user_id)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              ArrayWallet.push(doc.data());
            });

            setWallets(ArrayWallet);
          })
          .catch(error => {
            console.log(error);
          });

        setLoading(false);
      }

      getWallets();
    }
  }, [userAccount]);

  // FUNÇÃO PARA SALVAR UMA NOVA CARTEIRA
  async function handleBtnSalvar() {
    try {
      if (name === '') {
        setMessageName('Nome é obrirgatório');
        return;
      }

      dataWallet = {
        id: userAccount.user_id + Math.floor(Math.random() * 1000),
        description: name,
        total: '0,00',
        user_id: userAccount.user_id,
      };

      setLoading(true);

      const wall = await firebase
        .firestore()
        .collection('wallets')
        .doc()
        .set(dataWallet);

      setWallets([...wallets, dataWallet]);

      //Alert.alert('Sucesso', 'Foto atualizada com sucesso!');

      setLoading(false);

      closeModal();
    } catch (error) {
      console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`);
      setLoading(false);
      handleError(error);
    }
  }

  // ERRORS
  const handleError = error => {
    // if (error.code) {
    //   switch (error.code) {
    //     case 'auth/invalid-email':
    //       setMessageEmail('Email inválido');
    //       break;
    //   }
    // }
  };

  // CLOSE MODAL
  function closeModal() {
    setModalVisible(false);
    setModalWalletVisible(false);
    setName('');
    setMessageName('');
  }

  // QUANDO CLICAR NO BOX DA CARTEIRA
  function handleClickWallet(wallet) {
    setWalletSelect(wallet);
    setModalWalletVisible(true);
  }

  // QUANDO CLICAR NO BOTÃO LIXEIRA PARA DELETAR A CARTEIRA E SEUS ATIVOS VINCULADOS
  function handleClickTrash() {
    Alert.alert(
      'Excluir carteira e ativos',
      'Deseja realmente excluir a carteira e ativos vinculados?',
      [
        {
          text: 'Não',
          onPress: () => {
            return;
          },
        },
        {
          text: 'Sim',
          onPress: () => {
            deleteWallet();
          },
        },
      ],
    );
  }

  // FUNÇÃO PARA DELETAR WALLET SELECIONADA
  async function deleteWallet() {
    try {
      setLoading(true);

      const wall = await firebase
        .firestore()
        .collection('wallets')
        .where('id', '==', walletSelect.id)
        .get();

      if (wall.empty) {
        Alert.alert(
          'Detectamos um problema',
          'Por favor tente novamente mais tarde ou entre em contato conosco.',
        );
        return;
      }

      wall.forEach(doc => {
        async function deleteDoc() {
          await firebase.firestore().collection('wallets').doc(doc.id).delete();
        }

        deleteDoc();

        setWallets(wallets.filter(wall => wall.id !== doc.data().id));
      });

      setLoading(false);
      closeModal();
    } catch (error) {
      console.log(`CODE: ${error.code} | MESSAGE: ${error.message}`);
      setLoading(false);
      handleError(error);
    }
  }

  return (
    <>
      <WalletAssetContext.Provider
        value={{
          loading,
          wallets,
          walletSelect,
          setWalletSelect,
          totalValue,
          result,
          variation,
          modalVisible,
          modalWalletVisible,
          name,
          setName,
          messageName,
          setModalVisible,
          setModalWalletVisible,
          handleBtnSalvar,
          handleClickWallet,
          handleClickTrash,
          closeModal,
        }}
      >
        {children}
      </WalletAssetContext.Provider>
    </>
  );
}

export default WalletAssetContext;
