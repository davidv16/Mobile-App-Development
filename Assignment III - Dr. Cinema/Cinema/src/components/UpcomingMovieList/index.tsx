import React from 'react';
import { View, Text, FlatList } from 'react-native';
<<<<<<< HEAD
=======
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../../components/UpcomingMovie';
>>>>>>> 873ca9463551a6a95bca4a898a1b33268af6deb2
import styles from './styles';
import { useSelector } from 'react-redux';
import Movie from '../Movie';
import IUpcomingMovie from '../../models/IUpcomingMovie';

<<<<<<< HEAD
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
=======

interface Props {
  movies: IUpcomingMovie[];
}

const UpcomingMovieList = ({movies}: Props) => {
  return (
    <View>
      <FlatList
        numColumns={1}
        data={movies}
        renderItem={({ item }) => (
          <UpComingMovie
            movie={item}
          />
        )}
        keyExtractor={(item) => item.title}
      />
>>>>>>> 873ca9463551a6a95bca4a898a1b33268af6deb2
    </View>
  );
}

export default UpcomingMovieList;