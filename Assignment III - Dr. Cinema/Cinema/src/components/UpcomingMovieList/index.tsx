import React from 'react';
import { View, FlatList } from 'react-native';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../UpcomingMovie';
import styles from './styles';
interface Props {
  movies: IUpcomingMovie[];
  setCurrentYouTube: () => void;
  setModal: (x: boolean) => void;
}

const UpcomingMovieList = ({ movies, setCurrentYouTube, setModal }: Props) => (
  <View style={styles.container}>
    <FlatList
      horizontal
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
      ItemSeparatorComponent={() => <View style={{backgroundColor:'black', height:20}}>
        </View>}
    />
  </View>
);

export default UpcomingMovieList;
