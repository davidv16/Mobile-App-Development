import React from 'react';
import { View, Image, Text, Pressable, TouchableOpacity } from 'react-native'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import IContact from '../../models';

interface Props {
    contact: IContact
}

const Contact = ({ contact }: Props) => {
    const { navigate } = useNavigation();
    return (
        <Pressable
            onPress={() => navigate('ContactDetail' as never, { contact: contact } as never)}
            onLongPress={() => { }}
        >
            <View style={styles.listItem}>
                <Image
                    source={{ uri: contact.image }}
                    style={styles.image}
                />
                <Text style={styles.text}>{contact.name}</Text>
                <AntDesign name="rightcircle" size={24} color="black" />
            </View>
        </Pressable>
    );
};

export default Contact;