import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getCinemas } from '../../services';
import CinemaList from '../../components/CinemaList';
import ICinema from '../../models/ICinema';
import { useDispatch, useSelector } from 'react-redux';

// const Cinemas = () => {
//   const [cinemas, setCinemas] = useState<ICinema[]>();
//   useEffect(() => {
//     (async() => {
//       const data = await getCinemas();
//       sortCinemas(data)
      
//     })();

//   }, [])
const Cinemas = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemas());
  }, [])
// const cinemas: ICinema[] = useSelector((state:any) => state.cinemas)
//   const sortedCinemas = (data: ICinema[]) => {
//     (cinemas.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))));
//   }
  return (
    <View>
      <CinemaList />
    </View>
  );
}

export default Cinemas;