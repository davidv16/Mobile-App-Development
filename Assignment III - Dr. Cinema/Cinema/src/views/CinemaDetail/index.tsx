import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getMovies } from '../../services'
import IMovie from '../../models/IMovie';
import MovieList from '../../components/MovieList';

const CinemaDetail = ({ route }: any) => {
  const { cinema } = route.params;
  const [movies, setMovies] = useState<IMovie[]>();
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>();

  useEffect(() => {
    (async() => {
      setMovies(await getMovies());

    })();
  }, []);

  const filterCinemaMovies = async () => {
    // @ts-ignore
    //console.log(...movies.filter((x) => x.showTimes.cinema.id !== cinema.id))
    // @ts-ignore
    //console.log(movies.filter((x) => x.showTimes.cinema.id === cinema.id))
   // console.log('ddf' + movies)
    //setMovies(movies.filter((x) => x.showTimes.cinema.id === cinema.id));
  }
  return (
    <View>

      <Text style={styles.boardTitle}>{cinema.name}</Text>
      <Text style={styles.boardTitle}>{cinema.description}</Text>
      <Text style={styles.boardTitle}>{cinema.completeAddress}</Text>
      <Text style={styles.boardTitle}>{cinema.phone}</Text>
      <Text style={styles.boardTitle}>{cinema.website}</Text>

      <MovieList movies={movies as IMovie[]}/>
    </View>
  );
}

export default CinemaDetail;