import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IContact from '../../models';
import AddImageModal from '../AddImageModal';
import Modal from '../Modal';
import styles from './styles';

interface Props {
  selectedContact: IContact,
  isOpen: boolean,
  closeModal: (x: boolean) => void | any,
  addEditContact: (contact: IContact) => void
  openImageModal: () => void
}

const AddBoard = ({
  selectedContact, isOpen, closeModal, addEditContact, openImageModal,
}: Props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    const newContact = {
      id: '',
      name,
      phoneNumber,
      image,
    };
    addEditContact(newContact);
    closeModal(true);
  };

  return (
    <Modal
      title={`${selectedContact.id ? 'Edit' : 'Add'} Contact`}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <TextInput
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        placeholder="Image"
        onChangeText={(text) => setImage(text)}
      />
      <Button title="camera" onPress={() => openImageModal(true)}>
        {/* <Entypo style={styles.icon} name="camera" /> */}
        {/* <Entypo style={styles.icon} name="image" /> */}
      </Button>
      <Button title="Save" onPress={() => handleSubmit()} />

    </Modal>
  );
};

export default AddBoard;
