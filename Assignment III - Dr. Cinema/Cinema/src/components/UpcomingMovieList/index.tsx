import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import Movie from '../Movie';
import IUpcomingMovie from '../../models/IUpcomingMovie';

const UpcomingMovieList = () => {
  const upcomingMovies: IUpcomingMovie =  useSelector(state => state)
  return (
    <View>
      <Text>UpcomingMovieList</Text>
      <FlatList
      numColumns={1}
      data={upcomingMovies}
      renderItem={({ item }) => (
        <Movie
          movie={item}/>
    </View>
  );
}

export default UpcomingMovieList;