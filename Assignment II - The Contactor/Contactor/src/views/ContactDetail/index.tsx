import React, { useState } from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const ContactDetail = ({ route }: any) => {
  const { contact, editContact } = route.params;

  return (
    <View>
      <Image
        source={{ uri: contact.image }}
        style={styles.image}
      />
      <Text style={styles.boardTitle}>{contact.name}</Text>
      <Text style={styles.boardTitle}>{contact.phoneNumber}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => editContact(contact)}
      >
        <Text style={{ color: 'blue' }}>
          <AntDesign name="edit" style={styles.icon} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactDetail;
