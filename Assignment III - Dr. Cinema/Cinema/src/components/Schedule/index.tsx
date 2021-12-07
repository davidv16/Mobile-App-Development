import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import ICinema from '../../models/ICinema';
import ISchedule from '../../models/ISchedule';
import styles from './styles';

interface Props {
  schedule: ISchedule;
}
const Schedule = ({ schedule }: Props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{schedule.time}</Text>
      <Text style={styles.text}>{schedule.time}</Text>
      <AntDesign name="rightcircle" size={24} color="black" />
    </View>
  );
}

export default Schedule;