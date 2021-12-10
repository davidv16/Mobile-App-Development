import React from 'react';
import { Image, View, Text } from 'react-native';
import IMovie from '../../models/IMovie';
import styles from './styles';

interface Props {
  movie: IMovie
}

const MovieDetailHeader = ({ movie }: Props) => (
  <View>
    <Image
      source={{ uri: movie.poster }}
      style={styles.image}
    />
    <Text style={styles.movieTitle}>{movie.title}</Text>
    <Text style={styles.boardTitle}>{`Lengd: ${movie.durationMinutes} mínutur`}</Text>
    <Text style={styles.boardTitle}>{`Útgáfu ár: ${movie.year}`}</Text>
    <Text style={styles.boardTitle}>{movie.plot}</Text>
  </View>

)

export default MovieDetailHeader;
