import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ICinema from '../../models/ICinema';
import ShowTime from '../ShowTime';
import IShowTime from '../../models/IShowTime';


interface Props {
  showTimes: IShowTime[];
}

const ShowTimesList = ({showTimes}: Props) => {
  return (
    <View>
    <FlatList
      numColumns={1}
      data={showTimes}
      renderItem={({ item }) => (
        <ShowTime
          showTime={item}
        />
      )}
      keyExtractor={(item) => item.cinema.name}
    />
  </View>
  );
}

export default ShowTimesList;