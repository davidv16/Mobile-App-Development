import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, Button } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const AddList = ({
    isOpen,
    closeModal,
    addList
}) => {

    
    
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = () => {
        const newList = {
            name: name,
            color: color,
        };

        addList(newList);
        closeModal(true);

    }

    return(
        <Modal
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