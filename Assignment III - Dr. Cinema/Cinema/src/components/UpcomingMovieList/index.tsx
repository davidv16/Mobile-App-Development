import React from 'react';
import { View, Text, FlatList } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../UpcomingMovie';
import styles from './styles';
import { useSelector } from 'react-redux';


// interface Props {
//   movies: IUpcomingMovie[];
// }

const UpcomingMovieList = () => {
  const movies = useSelector(state =>state)
  // console.log(movies)
  return (
    <View>
      <FlatList
        numColumns={1}
        data={movies.upcomingReducer}
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