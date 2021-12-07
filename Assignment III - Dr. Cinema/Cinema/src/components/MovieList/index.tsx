import React from 'react';
import { View, FlatList } from 'react-native';
import IMovie from '../../models/IMovie';
import Movie from '../Movie';
import ICinema from '../../models/ICinema';

interface Props {
  movies: IMovie[];
  cinema: ICinema;
}
const MovieList = ({ movies, cinema }: Props) => (
  <View>
    <FlatList
      numColumns={1}
      data={movies}
      renderItem={({ item }) => (
        <Movie
          movie={item}
          cinema={cinema}
        />
      )}
      keyExtractor={(item) => item.title}
    />
  </View>
);

export default MovieList;
