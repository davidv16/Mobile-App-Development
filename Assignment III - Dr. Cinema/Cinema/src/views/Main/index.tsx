import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import * as services from '../../services';

const Main = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    services.authentiateApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Dr. Cinema</Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Cinemas' as never)}
      >
        <Text style={styles.buttonText}>Cinemas</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('UpcomingMovies' as never)}
      >
        <Text style={styles.buttonText}>Upcoming Movies</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Main;
