import React, { useState } from 'react';
import {
  TextInput, Button, View, TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as ImageService from '../../services/ImageService';
import * as ImageFileService from '../../services/ImageFileService';
import IContact from '../../models';
import Modal from '../Modal';
import styles from './styles';

interface Props {
  selectedContact: IContact,
  isOpen: boolean,
  closeModal: (x: boolean) => void | any,
  addEditContact: (contact: IContact) => void
}

const AddContact = ({
  selectedContact, isOpen, closeModal, addEditContact,
}: Props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    addEditContact({
      id: selectedContact.id,
      name,
      phoneNumber,
      image,

    });
    closeModal(true);
  };

  const takePhoto = async () => {
    const imageLocation = await ImageService.takePhoto();
    if (imageLocation.length > 0) {
      const photo = await ImageFileService.addImage(imageLocation);
      setImage(photo.location);
    }
  };

  const getPhoto = async () => {
    const imageLocation = await ImageService.selectFromCameraRoll();
    setImage(imageLocation);
  };

  React.useEffect(() => {
    // Initialize fields when modal is opened
    if (isOpen) {
      setName(selectedContact.name);
      setPhoneNumber(selectedContact.phoneNumber);
      setImage(selectedContact.image);
    }
  }, [isOpen]);

  return (
    <Modal
      title={`${selectedContact.id ? 'Edit' : 'Add'} Contact`}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <View style={styles.image}>
        <TextInput
          placeholder="Image"
          value={image}
          onChangeText={(text) => setImage(text)}
        />
        <TouchableOpacity onPress={() => takePhoto()}>
          <Entypo style={styles.icon} name="camera" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getPhoto()}>
          <Entypo style={styles.icon} name="image" />
        </TouchableOpacity>
      </View>
      <Button title="Save" onPress={() => handleSubmit()} />
    </Modal>
  );
};

export default AddContact;
