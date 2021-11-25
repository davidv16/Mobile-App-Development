import React from 'react'
import NativeModal from 'react-native-modal'
import { View, Text, Modal } from 'react-native'
import styles from "./styles";


const modal = (
    isOpen,
    closeModal,
    title,
    children
) => (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop = {true}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['up', 'down']}
        style = {styles.modal}>
            <View style={styles} >  
                <Text>{title}</Text>
                {children}
            </View>
    </NativeModal>

);

// Modal.propTypes = {
//     isOpen : propTypes.bool.isRequired,
//     closeModal: propTypes.func.isRequired,
//     title: propTypes.string,
//     children: propTypes.node
// }