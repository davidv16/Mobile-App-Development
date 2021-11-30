import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';
import IContact from '../../models';
import Modal from '../Modal';
import { useNavigation } from '@react-navigation/native';

interface Props {
  selectedContact: IContact,
  isOpen: boolean,
  closeModal: (x: boolean) => void | any,
  addEditContact: (contact: IContact) => void
}

const AddBoard = ({ selectedContact, isOpen, closeModal, addEditContact }: Props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    const newContact = {
      id: '',
      name: name,
      phoneNumber: phoneNumber,
      image: image
    };
    addEditContact(newContact);
    closeModal(true);
  }

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
      <Button title="Save" onPress={() => handleSubmit()} />

    </Modal>
  )
};

export default AddBoard;