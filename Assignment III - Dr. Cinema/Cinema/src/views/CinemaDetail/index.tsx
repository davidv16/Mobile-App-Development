import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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
    let filtered: IMovie[] = movies.filter(m => m.showTimes.some(c => c.cinema.id === cinema.id));
    /* 
    for (const i of movies) {
      for (const s of i.showTimes as []) {
        // @ts-ignore
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
      <Text>{cinema.description}</Text>

      <MovieList movies={filteredMovies} cinema={selectedCinema} />
    </View>
  );
};

export default CinemaDetail;
