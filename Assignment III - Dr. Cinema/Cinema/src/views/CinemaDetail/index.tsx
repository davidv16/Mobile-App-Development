import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import IMovie from '../../models/IMovie';
import MovieList from '../../components/MovieList';
import ICinema from '../../models/ICinema';

const CinemaDetail = ({ route }: any) => {
  const movies = useSelector((state:any) => state.movies);
  const { cinema } = route.params;
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [selectedCinema] = useState<ICinema>(cinema);

  useEffect(() => {
    filterCinemaMovies();
  }, []);

  const filterCinemaMovies = async () => {
    const filtered: IMovie[] = movies
      .filter((m: any) => m.showTimes
        .some((c: any) => c.cinema.id === cinema.id));
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
