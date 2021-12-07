import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import Genre from '../Genre';
import IGenre from '../../models/IGenre';

interface Props {
  genres?: IGenre[];
}
const GenresList = ({genres}: Props) => {
  return (
    <View>
    <FlatList
      numColumns={1}
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
}

export default GenresList;