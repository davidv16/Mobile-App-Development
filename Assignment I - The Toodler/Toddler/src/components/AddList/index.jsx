import React, {useState} from 'react';
import { TextInput, Button } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const AddList = ({
    isOpen,
    closeModal,
    selectedList,
    addEditList
}) => {   
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = () => {
        const newList = {
            id: 0,
            name: name,
            color: color,
        };

        addEditList(newList);
        closeModal(true);

    }

    return(
        <Modal
            title={`${selectedList.id !== 0 ? 'Edit' : 'Add'} List`}
            isOpen={isOpen}
            closeModal={closeModal}>
            <TextInput
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              placeholder="Color"
              onChangeText={(text) => setColor(text)}
            />
            <Button title="Save" onPress={() => handleSubmit()} />

        </Modal>
    )
};

export default AddList;