import React, { useState, useEffect } from 'react';
import { TextInput, Button } from 'react-native';
import IContact from '../../models';
import Modal from '../Modal';

interface Props {
    selectedContact: IContact,
    isOpen: boolean,
    closeModal: (x: boolean) => void | any,
    addEditContact: (contact: IContact) => void
}

const AddBoard = ({
    selectedContact, isOpen, closeModal, addEditContact,
}: Props) => {
    const initialContact = {
        id: '',
        name: '',
        phoneNumber: '',
        image: '',
    }
    const [contact, setContact] = useState<IContact>(selectedContact);

    useEffect(() => {
        (async () => {
            //await setName(selectedContact.name);
            //await setPhoneNumber(selectedContact.phoneNumber);
            //await setImage(selectedContact.image);
            //await setContact(selectedContact);
            console.log("modal load up " + selectedContact)

        })();
    }, [])

    const handleSubmit = () => {
        //console.log(selectedContact)
        //console.log(contact)
        const newContact = {
            id: selectedContact.id,
            name: contact.name === '' ? selectedContact.name : contact.name,
            phoneNumber: contact.phoneNumber === '' ? selectedContact.phoneNumber : contact.phoneNumber,
            image: contact.image === '' ? selectedContact.image : contact.image,
        };
        addEditContact(newContact);
        closeModal(true);
        setContact(initialContact);
    };

    const inputHandler = (name: string, value: string) => {
        setContact({
            ...contact,
            [name]: value
        });
    }

    return (
        <Modal
            title={`${selectedContact.id ? 'Edit' : 'Add'} Contact`}
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <TextInput
                placeholder="Name"
                value={contact.name}
                onChangeText={(text: string) => inputHandler('name', text)}
            />
            <TextInput
                placeholder="Phone Number"
                value={contact.phoneNumber}
                onChangeText={(text: string) => inputHandler('phoneNumber', text)}
            />
            <TextInput
                placeholder="Image"
                value={contact.image}
                onChangeText={(text) => inputHandler('image', text)}
            />
            <Button title="Save" onPress={() => handleSubmit()} />

        </Modal>
    );
};

export default AddBoard;
