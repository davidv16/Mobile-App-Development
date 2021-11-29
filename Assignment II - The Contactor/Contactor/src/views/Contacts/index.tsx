import React from 'react';
import { View, Text } from 'react-native';
import AddContact from '../../components/AddContact';
import ContactList from '../../components/ContactList';
import Search from '../../components/Search';

const Contacts = () => {
    return (
        <View>
            Contacts View
            <Search />
            <ContactList />
            <AddContact />
        </View>
    );
};

export default Contacts;