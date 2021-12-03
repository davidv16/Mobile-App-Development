import React from 'react';
import {
  View, Image, Text, Pressable, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import IContact from '../../models';

interface Props {
  contact: IContact,
  editContact: (contact: IContact) => void,
  deleteContact: (contact: IContact) => void,
}

const Contact = ({ contact, editContact, deleteContact }: Props) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => navigate('ContactDetail' as never, { contact, editContact } as never)}
      onLongPress={() => deleteContact(contact)}
    >
      <View style={styles.listItem}>
        <Image
          source={{ uri: contact.image }}
          style={styles.image}
        />
        <Text style={styles.text}>{contact.name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => editContact(contact)}
        >
          <Text style={{ color: 'blue' }}>
            <AntDesign name="edit" style={styles.icon} />
          </Text>
        </TouchableOpacity>
        <AntDesign name="rightcircle" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default Contact;
