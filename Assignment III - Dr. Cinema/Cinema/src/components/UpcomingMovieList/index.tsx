import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpComingMovie from '../UpcomingMovie';
import styles from './styles';

interface Props {
  setCurrentYouTube: (id: string) => void;
  setModal: (x: boolean) => void;
}

const UpcomingMovieList = ({ setCurrentYouTube, setModal }: Props) => {
  const upcoming: IUpcomingMovie[] = useSelector((state: any) => state.upcoming)
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        numColumns={1}
        data={upcoming}
        renderItem={({ item }) => (
          <UpComingMovie
            setCurrentYouTube={setCurrentYouTube}
            movie={item}
            setModal={setModal}
          />
        )}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => <View style={{ backgroundColor: 'black', height: 20 }} />}
      />
    </View>
  );
};
export default UpcomingMovieList;
