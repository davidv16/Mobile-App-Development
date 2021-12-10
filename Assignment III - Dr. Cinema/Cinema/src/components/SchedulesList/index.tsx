import React from 'react';
import { View, FlatList } from 'react-native';
import Schedule from '../Schedule';
import ISchedule from '../../models/ISchedule';
import styles from './styles';

interface Props {
  schedules: ISchedule[];
}

const SchedulesList = ({ schedules }: Props) => (
  <View style={styles.container}>
    <FlatList
      nestedScrollEnabled
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
