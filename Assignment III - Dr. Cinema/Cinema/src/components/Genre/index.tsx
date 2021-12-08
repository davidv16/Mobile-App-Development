import React from 'react';
import { View, Text } from 'react-native';
import IGenre from '../../models/IGenre';
import styles from './styles';

interface Props {
  genre: IGenre
}
const Genre = ({ genre }: Props) => (
  <View style={styles.listItem}>
    <Text style={styles.text}>{genre.name}</Text>
  </View>
);

export default Genre;
