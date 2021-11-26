import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, TextInput, Button } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const AddTask = ({
    isopen,
    closeModal,
    addTask
}) =>{
    <Modal>
        <TextInput
            placeholder="Name"
            onChangeText={(text) => setName(text)}
        />
        <TextInput
            placeholder="Description"
            onChangeText={(text) => setDescription(text)}
        />
        <Button title="Save" onPress={() => handleSubmit()} />
    </Modal>

    

};

export default AddTask;