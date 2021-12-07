import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getCinemas } from '../../services';
import CinemaList from '../../components/CinemaList';
import ICinema from '../../models/ICinema';

const Cinemas = () => {
  const [cinemas, setCinemas] = useState<ICinema[]>();
  useEffect(() => {
    (async() => {
      setCinemas( await getCinemas());
    })();

  }, [])
  return (
    <View>
      <Text>Cinemas</Text>
      <CinemaList cinemas={cinemas as ICinema[]} />
    </View>
  );
}

export default Cinemas;