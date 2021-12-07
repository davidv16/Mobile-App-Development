import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getMovies } from '../../services'
import IMovie from '../../models/IMovie';
import MovieList from '../../components/MovieList';

const CinemaDetail = ({ route }: any) => {
  const { cinema } = route.params;
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);

  useEffect(() => {
      filterCinemaMovies();
  }, []);

  const filterCinemaMovies = async () => {
    const movies: IMovie[] = await getMovies();
    const filtered: IMovie[] = [];
    for(const i of movies) {
      for(const s of i.showTimes as []) {
        //@ts-ignore
        if(s.cinema.id === cinema.id) {
          filtered.push(i)
        }
      }
    }
    setFilteredMovies(filtered);
  }
  return (
    <View>

      <Text style={styles.boardTitle}>{cinema.name}</Text>
      <Text style={styles.boardTitle}>{cinema.completeAddress}</Text>
      <Text style={styles.boardTitle}>{cinema.phone}</Text>
      <Text style={styles.boardTitle}>{cinema.website}</Text>
      <Text >{cinema.description}</Text>

      <MovieList movies={filteredMovies} cinema={cinema}/>
    </View>
  );
}

export default CinemaDetail;