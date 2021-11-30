import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const ContactDetail = ({ route }) => {
  const { contact } = route.params;

  return (
    <View>
      <Image
        source={{ uri: contact.image }}
        style={styles.image}
      />
      <Text style={styles.boardTitle}>{contact.name}</Text>
      <Text style={styles.boardTitle}>{contact.phoneNumber}</Text>
    </View>
  );
};

export default ContactDetail;
