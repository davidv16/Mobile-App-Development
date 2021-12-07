import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import ICinema from '../../models/ICinema';
import { getUpcoming } from '../../actions/upcomingActions';
import { useDispatch } from 'react-redux';

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcoming());
  }, [])

  // const sortUpcomingMovies = (data: IUpcomingMovie[]) => {
  //   setUpcomingMovies(data.sort((a, b) => ((a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))));
  // }
  return (
    <View>
      <UpcomingMovieList  />
    </View>
  );
}

export default UpcomingMovies;