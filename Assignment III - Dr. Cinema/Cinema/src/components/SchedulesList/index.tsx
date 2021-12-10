import React from 'react';
import { View, FlatList } from 'react-native';
import Schedule from '../Schedule';
import ISchedule from '../../models/ISchedule';

interface Props {
  schedules: ISchedule[];
}

const SchedulesList = ({ schedules }: Props) => (
  <View>
    <FlatList
//      nestedScrollEnabled
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
