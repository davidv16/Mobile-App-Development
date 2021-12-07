import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { getMovies } from '../../services';
import IMovie from '../../models/IMovie';
import Movie from '../Movie';
import Genre from '../Genre';

interface Props {
  movies?: IMovie[];
}
const GenresList = ({movies}: Props) => {
  return (
    <View>
    <FlatList
      numColumns={1}
      data={movies}
      renderItem={({ item }) => (
        <Genre
          movie={item}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
  );
}

export default GenresList;