import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ICinema from '../../models/ICinema';
import ShowTime from '../ShowTime';
import IShowTime from '../../models/IShowTime';
import Schedule from '../Schedule';
import ISchedule from '../../models/ISchedule';

interface Props {
  schedules: ISchedule[];
}

const SchedulesList = ({ schedules }: Props) => (
  <View>
    <FlatList
      numColumns={1}
      data={schedules}
      renderItem={({ item }) => (
        <Schedule
          schedule={item}
        />
      )}
      keyExtractor={(item) => item.time}
    />
  </View>
);

export default SchedulesList;
