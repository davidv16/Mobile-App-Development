import React from 'react';
import { View, FlatList } from 'react-native';
import Cinema from '../Cinema';
import {useSelector} from 'react-redux';
import ICinema from '../../models/ICinema';

const CinemaList = () => {
  const cinemas: ICinema[] = useSelector((state:any) => state.cinemas)

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
