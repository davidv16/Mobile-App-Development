import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ICinema from '../../models/ICinema';
import Cinema from '../Cinema';


interface Props {
  cinemas: ICinema[];
}

const CinemaList = ({cinemas}: Props) => {
  return (
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
  );
}

export default CinemaList;