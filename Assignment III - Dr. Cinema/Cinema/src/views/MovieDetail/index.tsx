import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import GenresList from '../../components/GenresList';
import ShowTimesList from '../../components/ShowTimesList';
import ICinema from '../../models/ICinema';

const MovieDetail = ({ route }: any) => {
  const { movie, cinema } = route.params;
  const [selectedCinema] = useState<ICinema>(cinema);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: movie.poster }}
        style={styles.image}
      />
      <Text style={styles.boardTitle}>{movie.title}</Text>
      <Text style={styles.boardTitle}>{`Duration: ${movie.durationMinutes} minutes`}</Text>
      <Text style={styles.boardTitle}>{`Release Year: ${movie.year}`}</Text>
      <Text style={styles.boardTitle}>{movie.plot}</Text>
      <GenresList genres={movie.genres} />
      <Text style={styles.boardTitle}>ShowTimes</Text>
      <ShowTimesList showTimes={movie.showTimes} cinema={selectedCinema} />

    </View>
  );
};

export default MovieDetail;
