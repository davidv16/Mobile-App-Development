import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  View, Text, Image, Pressable,
} from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import styles from './styles';

interface Props {
  movie: IUpcomingMovie;
  setCurrentYouTube: (id: string) => void;
  setModal: (x: boolean) => void;
}
const UpcomingMovie = ({ movie, setCurrentYouTube, setModal }: Props) => {
  const [isTrailer, setIsTrailer] = useState(movie.trailers[0]);
  
  const setYoutubeTrailerId = () => {
    for (const t of movie.trailers) {
      if (!(t === undefined)) {
        setCurrentYouTube(t);
        setIsTrailer(t)
        break;
      }
    }
  };

  const handlePress = () => {
    setModal(true);
    setYoutubeTrailerId();
  };
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: movie.poster }}
        style={styles.image}
      />
      <Text style={styles.text}>{movie.title}</Text>
      <Text style={styles.text}>{movie.releaseDate}</Text>

      {isTrailer ?
        <Pressable onPress={() => handlePress()}
          style={styles.button}>
          <Text style={styles.buttonText}>Trailer</Text>
        </Pressable>
        : null}
    </View>

  );
};

export default UpcomingMovie;
