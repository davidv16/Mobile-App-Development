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
      const data = await getCinemas();
      sortCinemas(data)
      
    })();

  }, [])

  const sortCinemas = (data: ICinema[]) => {
    setCinemas(data.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))));
  }
  return (
    <View>
      <CinemaList cinemas={cinemas as ICinema[]} />
    </View>
  );
}

export default Cinemas;