import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import UpComingMovie from '../UpcomingMovie';

interface Props {
  setCurrentYouTube: (id: string) => void;
  setModal: (x: boolean) => void;
}

const UpcomingMovieList = ({ setCurrentYouTube, setModal }: Props) => {
  const movies = useSelector((state:any) => state.upcoming)
  return (
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
}
export default UpcomingMovieList;
