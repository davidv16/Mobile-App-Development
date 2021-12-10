import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import * as services from '../../services';
import { AntDesign } from '@expo/vector-icons';

const Main = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    services.authentiateApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Dr. Cinema</Text>
      <AntDesign name="videocamera" size={200} color="lightgray" style={styles.logo}/>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('Cinemas' as never)}
      >
        <Text style={styles.buttonText}>Kvikmyndahús</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigate('UpcomingMovies' as never)}
      >
        <Text style={styles.buttonText}>Vætanlegar myndir</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Main;
