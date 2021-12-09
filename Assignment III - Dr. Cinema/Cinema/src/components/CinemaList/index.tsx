import React from 'react';
import { View, FlatList } from 'react-native';
import ICinema from '../../models/ICinema';
import Cinema from '../Cinema';
import {useSelector} from 'react-redux';

interface Props {
  cinemas: ICinema[];
}

const CinemaList = () => {
  const cinemas = useSelector((state:any) => state.cinema)
  console.log(cinemas)
  return(
  <View>
    <FlatList
      numColumns={1}
      data={cinemas}
      renderItem={({ item }) => (
        <Cinema
          cinema={item}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
  )};

export default CinemaList;
