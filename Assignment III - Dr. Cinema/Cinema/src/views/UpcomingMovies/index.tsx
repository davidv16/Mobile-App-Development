import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getUpcomingMovies } from '../../services';

const UpcomingMovies = () => {
  useEffect(() => {
    getUpcomingMovies();
  }, [])
  return (
    <View>
      <Text>UpcomingMovies</Text>
    </View>
  );
}

export default UpcomingMovies;