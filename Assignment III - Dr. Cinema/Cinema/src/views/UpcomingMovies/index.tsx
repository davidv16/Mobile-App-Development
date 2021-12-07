import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getUpcoming } from '../../actions/upcomingActions';
import { useDispatch } from 'react-redux';
import UpcomingMovieList from '../../components/UpcomingMovieList';

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcoming());
  }, [])
  return (
    <View>
      <Text>UpcomingMovies</Text>
      <UpcomingMovieList/>
    </View>
  );
}

export default UpcomingMovies;