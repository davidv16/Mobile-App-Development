import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  isOpen: boolean,
  //TODO: checka á þessu
  closeModal: any,
  title: string,
  children: any
}

const Modal = ({
  isOpen,
  closeModal,
  title,
  children,
}: Props) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop
    onBackButtonPress={closeModal}
    onBackdropPress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['up', 'down']}
    style={styles.modal}
  >
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  </NativeModal>
);

export default Modal;
