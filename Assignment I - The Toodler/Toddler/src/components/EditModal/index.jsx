import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, Button } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const EditModal = ({
    isOpen,
    closeModal,
    takePhoto,
    selectFromCameraRoll,
    editBoard
}) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailPhoto, setThumbnailphoto] = useState('');

    const handleSubmit = () => {
        const newBoard = {
            name: name,
            description: description,
            thumbnailPhoto: thumbnailPhoto
        };
        editBoard(newBoard);
        closeModal(true);
    }

    return(
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}>
            <TouchableOpacity>
                <Entypo style={styles.icon} name="camera" />
            </TouchableOpacity>

            <TextInput
              placeholder="Name"


              onChangeText={(text) => setName(text)}
            />
            <TextInput
              placeholder="Description"


              onChangeText={(text) => setDescription(text)}
            />
            <TouchableOpacity
                onPress={() => selectFromCameraRoll()}>
                <Entypo style={styles.icon} name="image" />
            </TouchableOpacity>
            <Button title="Save" onPress={() => handleSubmit()} />

        </Modal>
    )
};

export default EditModal;