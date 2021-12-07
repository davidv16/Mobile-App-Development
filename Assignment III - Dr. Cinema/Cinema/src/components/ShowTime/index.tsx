import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import SchedulesList from '../SchedulesList';
import ICinema from '../../models/ICinema';
import IShowTime from '../../models/IShowTime';
import styles from './styles';

interface Props {
  showTime: IShowTime;
}
const ShowTime = ({ showTime }: Props) => {
  return (
    <View style={styles.listItem}>
      
      <AntDesign name="rightcircle" size={24} color="black" />
    </View>
  );
}

export default ShowTime;