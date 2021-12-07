import React from 'react';
import { View, Text, FlatList } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../../components/UpcomingMovie';
import styles from './styles';


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
    </View>
  );
}

export default UpcomingMovieList;