import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ICinema from '../../models/ICinema';
import IShowTime from '../../models/IShowTime';
import SchedulesList from '../SchedulesList';

interface Props {
  showTimes: IShowTime[];
  cinema: ICinema
}

const ShowTimesList = ({ showTimes, cinema }: Props) => {
  const [selectedCinema] = useState<IShowTime[]>({
    ...showTimes
      .filter((x) => x.cinema.id === cinema.id),
  });

  return (
    <View>
      <Text>{selectedCinema[0].cinema.name}</Text>
      <SchedulesList schedules={selectedCinema[0].schedule} />
    </View>
  );
};

export default ShowTimesList;
