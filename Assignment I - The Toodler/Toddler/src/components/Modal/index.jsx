import React from 'react'
import NativeModal from 'react-native-modal'
import { View, Text } from 'react-native'
import styles from "./styles";


const Modal = ({
    isOpen,
    closeModal,
    title,
    children
}) => (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop = {true}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['up', 'down']}
        style = {styles.modal}>
        <View style={styles.body}>  
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    </NativeModal>
);

export default Modal;