import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ICinema from '../../models/ICinema';
import ShowTime from '../ShowTime';
import IShowTime from '../../models/IShowTime';
import Cinema from '../Cinema';
import Schedule from '../Schedule';
import SchedulesList from '../SchedulesList';


interface Props {
  showTimes: IShowTime[];
  cinema: ICinema
}

const ShowTimesList = ({showTimes, cinema}: Props) => {
  const [selectedCinema, setSelectedCinema] = useState<IShowTime[]>({...showTimes.filter((x) => x.cinema.id === cinema.id)});


  useEffect(() => {
    console.log(selectedCinema)
  }, [])

  return (
    <View>
      <Text>{selectedCinema[0].cinema.name}</Text>
      <SchedulesList schedules={selectedCinema[0].schedule}/>
    </View>
  );
}

export default ShowTimesList;