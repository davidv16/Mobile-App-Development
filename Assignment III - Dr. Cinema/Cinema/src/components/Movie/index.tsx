import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, Text, Image, Pressable,
} from 'react-native';
import IMovie from '../../models/IMovie';
import styles from './styles';
import GenresList from '../GenresList';
import ICinema from '../../models/ICinema';
import IGenre from '../../models/IGenre';

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

        <View style={styles.titleSection}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>

        <View style={styles.mainSection}>
          <View style={styles.imageBox}>
            <Image
              source={{ uri: movie.poster }}
              style={styles.image}
            />
          </View>
          <View style={styles.genresSection}>
            <GenresList genres={movie.genres as IGenre[]} />
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.year}>{movie.year}</Text>
        </View>

      </View>
    </Pressable>
  );
};

export default Movie;
