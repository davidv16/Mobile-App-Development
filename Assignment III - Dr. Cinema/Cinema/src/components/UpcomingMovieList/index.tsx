import React from 'react';
import { View, FlatList } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../UpcomingMovie';

interface Props {
  movies: IUpcomingMovie[];
  setCurrentYouTube: () => void;
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
