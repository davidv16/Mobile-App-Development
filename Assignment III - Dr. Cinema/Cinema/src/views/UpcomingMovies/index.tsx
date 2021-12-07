import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
<<<<<<< HEAD
import { getUpcoming } from '../../actions/upcomingActions';
import { useDispatch } from 'react-redux';
import UpcomingMovieList from '../../components/UpcomingMovieList';

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcoming());
=======
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
>>>>>>> 873ca9463551a6a95bca4a898a1b33268af6deb2
  }, [])

  const sortUpcomingMovies = (data: IUpcomingMovie[]) => {
    setUpcomingMovies(data.sort((a, b) => ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))));
  }
  return (
    <View>
<<<<<<< HEAD
      <Text>UpcomingMovies</Text>
      <UpcomingMovieList/>
=======
      <UpcomingMovieList movies={upcomingMovies as IUpcomingMovie[]} />
>>>>>>> 873ca9463551a6a95bca4a898a1b33268af6deb2
    </View>
  );
}

export default UpcomingMovies;