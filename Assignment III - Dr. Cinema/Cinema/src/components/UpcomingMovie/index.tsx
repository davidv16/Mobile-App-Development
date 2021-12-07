import { AntDesign } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import styles from './styles';

interface Props {
  movie: IUpcomingMovie;
  setCurrentYouTube: (id: string) => void;
  setModal: (x: boolean) => void;
}
const UpcomingMovie = ({movie, setCurrentYouTube, setModal}: Props) => {

  useEffect(() => {
    
  }, [])

  const setYoutubeTrailerId = () => {
      for(const t of movie.trailers) {
        if(!(t === undefined)){
          setCurrentYouTube(t);
          break;
        }
      }
  }

  const handlePress = () => {
    setModal(true);
    setYoutubeTrailerId()
  }
  return (
    <Pressable onPress={() => handlePress()}>
    <View style={styles.listItem}>
      <Image
          source={{ uri: movie.poster }}
          style={styles.image}
        />
        <Text style={styles.text}>{movie.title}</Text>
        <Text style={styles.text}>{movie.releaseDate}</Text>
        <AntDesign name="rightcircle" size={24} color="black" />
      </View>

    </Pressable>
  );
}

export default UpcomingMovie;