import React, {useState} from 'react';
import { TextInput, Button } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

const AddTask = ({
    isOpen,
    closeModal,
    selectedTask,
    addEditTask
}) =>{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = () => {
        const newTask = {
            name: name,
            description: description,
            isFinished: false,
        };

        addEditTask(newTask);
        closeModal(true);

    }
    return(
        <Modal
            title={`${selectedTask.id !== 0 ? 'Edit' : 'Add'} Task`}
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
            <Button title="Save" onPress={() => handleSubmit()} />
        </Modal>

    );
};

export default AddTask;