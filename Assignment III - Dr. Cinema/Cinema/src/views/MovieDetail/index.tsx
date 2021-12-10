import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import GenresList from '../../components/GenresList';
import ShowTimesList from '../../components/ShowTimesList';
import ICinema from '../../models/ICinema';

const MovieDetail = ({ route }: any) => {
  const { movie, cinema } = route.params;
  const [selectedCinema] = useState<ICinema>(cinema);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1}}>
      <Image
        source={{ uri: movie.poster }}
        style={styles.image}
      />
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.boardTitle}>{`Lengd: ${movie.durationMinutes} mínutur`}</Text>
      <Text style={styles.boardTitle}>{`Útgáfu ár: ${movie.year}`}</Text>
      <Text style={styles.boardTitle}>{movie.plot}</Text>
      <GenresList genres={movie.genres} />
      <Text style={styles.boardTitle}>ShowTimes</Text>
      <ShowTimesList showTimes={movie.showTimes} cinema={selectedCinema} />
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
