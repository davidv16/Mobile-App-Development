import React from 'react';
import {
    View, Image, Text, TouchableOpacity, Linking,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const ContactDetail = ({ route }: any) => {
    const { contact, editContact, deleteContact } = route.params;

    return (
        <View>
            <Image
                source={{ uri: contact.image }}
                style={styles.image}
            />
            <Text style={styles.boardTitle}>{contact.name}</Text>
            <Text
                onPress={() => Linking.openURL(`tel:${contact.phoneNumber}`)}
                style={styles.boardTitle}>{contact.phoneNumber}
            </Text>
            <View style={styles.editDeleteContacts}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(`tel:${contact.phoneNumber}`)}
                >
                    <Text style={{ color: 'green' }}>
                        <AntDesign name="phone" style={styles.icon} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => editContact(contact)}
                >
                    <Text style={{ color: 'blue' }}>
                        <AntDesign name="edit" style={styles.icon} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => deleteContact(contact)}
                >
                    <Text style={{ color: 'red' }}>
                        <AntDesign name="delete" style={styles.icon} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ContactDetail;
