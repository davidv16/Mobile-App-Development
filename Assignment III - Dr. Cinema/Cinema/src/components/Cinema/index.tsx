import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Pressable, Image,
} from 'react-native';
import ICinema from '../../models/ICinema';
import styles from './styles';

interface Props {
  cinema: ICinema;
}
const Cinema = ({ cinema }: Props) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => navigate('CinemaDetail' as never, { cinema } as never)}
    >
      <View style={styles.listItem}>
        <Text style={styles.text}>{cinema.name}</Text>
        <Text style={styles.text}>{cinema.website}</Text>

        <AntDesign name="rightcircle" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default Cinema;
