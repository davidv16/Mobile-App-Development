import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AddContact from '../../components/AddContact';
import ContactList from '../../components/ContactList';
import Search from '../../components/Search';
import IContact from '../../models';
import data from '../../resources/data.json';


/*useEffect(() => {
    console.log(contacts);
    
}, [])
*/
const Contacts = () => {
    const [contacts, setContacts] = useState<IContact[]>(data.contacts);

    return (
        <View>
            Contacts View
            <Search />
            <ContactList contacts={contacts} />
            <AddContact />
        </View>
    );
};

export default Contacts;