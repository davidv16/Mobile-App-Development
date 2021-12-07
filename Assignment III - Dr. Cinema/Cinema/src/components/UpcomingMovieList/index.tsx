import React from 'react';
import { View, Text, FlatList } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../UpcomingMovie';
import styles from './styles';

interface Props {
  movies: IUpcomingMovie[];
  setCurrentYouTube: (id: string) => void;
  setModal: (x: boolean) => void;
}

const UpcomingMovieList = ({ movies, setCurrentYouTube, setModal }: Props) => (
  <View>
    <FlatList
      numColumns={1}
      data={movies}
      renderItem={({ item }) => (
        <UpComingMovie
          setCurrentYouTube={setCurrentYouTube}
          movie={item}
          setModal={setModal}
        />
      )}
      keyExtractor={(item) => item.title}
    />
  </View>
);

export default UpcomingMovieList;
