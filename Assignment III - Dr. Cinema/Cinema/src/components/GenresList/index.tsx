import React from 'react';
import { View, FlatList } from 'react-native';
import Genre from '../Genre';
import IGenre from '../../models/IGenre';

interface Props {
  genres: IGenre[];
}
const GenresList = ({ genres }: Props) => (
  <View>
    <FlatList
      numColumns={2}
      data={genres}
      renderItem={({ item }) => (
        <Genre
          genre={item}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

export default GenresList;
