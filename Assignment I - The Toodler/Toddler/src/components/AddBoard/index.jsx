import React, {useState} from 'react';
import { TextInput, Button } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const AddBoard = ({
    selectedBoard,
    isOpen,
    closeModal,
    addEditBoard
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

        addEditBoard(newBoard);
        closeModal(true);
    }

    return(
        <Modal
            style={styles.modal}
            title={`${selectedBoard.id !== 0 ? 'Edit' : 'Add'} Board`}
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <TextInput
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              placeholder="Description"
              onChangeText={(text) => setDescription(text)}
            />
            <TextInput
              placeholder="Thumbnail Photo"
              onChangeText={(text) => setThumbnailphoto(text)}
            />
            <Button title="Save" onPress={() => handleSubmit()} />

        </Modal>
    )
};

export default AddBoard;