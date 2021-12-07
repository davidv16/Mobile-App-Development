import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getUpcomingMovies } from '../../services';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import ICinema from '../../models/ICinema';

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<IUpcomingMovie[]>()
  useEffect(() => {
    (async() => {
    const data = await getUpcomingMovies();
    sortUpcomingMovies(data);
  })();
  }, [])

  const sortUpcomingMovies = (data: IUpcomingMovie[]) => {
    setUpcomingMovies(data.sort((a, b) => ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))));
  }
  return (
    <View>
      <UpcomingMovieList movies={upcomingMovies as IUpcomingMovie[]} />
    </View>
  );
}

export default UpcomingMovies;