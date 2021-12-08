import React from 'react';
import { View, Text, FlatList } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../UpcomingMovie';
import styles from './styles';
import { useSelector } from 'react-redux';


// interface Props {
//   movies: IUpcomingMovie[];
// }
// todo fixing movies type
const UpcomingMovieList = () => {
  const movies:any = useSelector((state:any) =>state.upcomingReducer)
  console.log(movies)
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