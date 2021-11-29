import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AddContact from '../../components/AddContact';
import ContactList from '../../components/ContactList';
import Search from '../../components/Search';
import IContact from '../../models';
import data from '../../resources/data.json';

//const [contacts, setContacts] = useState(data);

/*useEffect(() => {
    console.log(contacts);

}, [])
*/
const Contacts = () => {
    return (
        <View>
            Contacts View
            <Search />

            <AddContact />
        </View>
    );
};

export default Contacts;