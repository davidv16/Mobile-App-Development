import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Image, Pressable,
} from 'react-native';
import IMovie from '../../models/IMovie';
import styles from './styles';
import GenresList from '../GenresList';
import ICinema from '../../models/ICinema';

interface Props {
  movie: IMovie
  cinema: ICinema | undefined
}
const Movie = ({ movie, cinema }: Props) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => navigate('Movie' as never, { movie, cinema } as never)}
    >
      <View style={styles.listItem}>
        <Image
          source={{ uri: movie.poster }}
          style={styles.image}
        />
        <Text style={styles.text}>{movie.title}</Text>
        <Text style={styles.text}>{movie.year}</Text>
        <GenresList genres={movie.genres} />
        <AntDesign name="rightcircle" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default Movie;
