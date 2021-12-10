import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { getMovies } from '../../services';
import IMovie from '../../models/IMovie';
import MovieList from '../../components/MovieList';
import ICinema from '../../models/ICinema';

const CinemaDetail = ({ route }: any) => {
  const { cinema } = route.params;
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [selectedCinema] = useState<ICinema>(cinema);

  useEffect(() => {
    filterCinemaMovies();
  }, []);

  const filterCinemaMovies = async () => {
    const movies: IMovie[] = await getMovies();
    const filtered: IMovie[] = movies
      // @ts-ignore
      .filter((m) => m.showTimes
        .some((c) => c.cinema.id === cinema.id));
    /*
    for (const i of movies) {
      for (const s of i.showTimes as []) {
        if (s.cinema.id === cinema.id) {
          filtered.push(i);
        }
      }
    }
    console.log(filtered);
    */
    setFilteredMovies(filtered);
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.boardTitle}>{cinema.name}</Text>
      <Text style={styles.boardTitle}>{cinema.completeAddress}</Text>
      <Text style={styles.boardTitle}>{cinema.phone}</Text>
      <Text style={styles.boardTitle}>{cinema.website}</Text>
      <Text style={styles.description}>{cinema.description}</Text>
      <ScrollView style={{ flex: 1 }}>
        <MovieList movies={filteredMovies} cinema={selectedCinema} />
      </ScrollView>
    </View>
  );
};

export default CinemaDetail;
