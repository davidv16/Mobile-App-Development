// ToDo: breyta leyfilegum swipe directions?
// ToDo: Ef notandi notar allar adferir til ad beata vid mynd hver stendur?
// ToDo: klara typescript umbreytingu

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Modal from '../Modal';
import styles from './styles';

interface Props {
  isOpen: boolean,
  closeModal: (x: boolean) => void,
  // takePhoto: () =>
  // selectFromCameraRoll: () =>
}

const AddImageModal = ({
  isOpen, closeModal, takePhoto, selectFromCameraRoll,
}: Props) => (
  <Modal
    title="Add Image"
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <TouchableOpacity
      onPress={() => takePhoto()}
    >
      <Entypo style={styles.icon} name="camera" />
    </TouchableOpacity>
    {/* <TouchableHighlight
      onPress={() => selectFromCameraRoll()}
    >
      <Entypo style={styles.icon} name="Image" />
    </TouchableHighlight> */}
  </Modal>
);

export default AddImageModal;
