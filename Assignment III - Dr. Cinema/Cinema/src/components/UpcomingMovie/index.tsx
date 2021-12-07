import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import styles from './styles';

interface Props {
  movie: IUpcomingMovie;
}
const UpcomingMovie = ({movie}: Props) => {
  return (
    <View style={styles.listItem}>
      <Image
          source={{ uri: movie.poster }}
          style={styles.image}
        />
        <Text style={styles.text}>{movie.title}</Text>
        <Text style={styles.text}>{movie.releaseDate}</Text>
        <AntDesign name="rightcircle" size={24} color="black" />
      </View>
  );
}

export default UpcomingMovie;