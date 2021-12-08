import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getUpcomingMovies } from '../../services';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import YouTube from '../../components/Youtube';
import { useSelector, useDispatch } from 'react-redux';
import {getUpcoming} from '../../store/actions/upcomingActions';

const UpcomingMovies = () => {
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  // const [currentYouTubeId, setCurrentYouTubeId] = useState<string>('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcoming());
  }, [])

  // const sortUpcomingMovies = (data: IUpcomingMovie[]) => {
  //   setUpcomingMovies(
  //     data.sort((a, b) => (
  //       (a.title > b.title) ? 1
  //         : ((b.title > a.title) ? -1
  //           : 0))),
  //   );
  // };
  // console.log(upcomingMovies)
  // const handleCloseModal = () => {
  //   setIsAddModalOpen(false);
  //   setCurrentYouTubeId('');
  // };
  return (
    <View>
      <UpcomingMovieList
        // setCurrentYouTube={(id: string) => setCurrentYouTubeId(id)}
        // setModal={() => setIsAddModalOpen(true)}
      />
      {/* <YouTube
        youTubeId={currentYouTubeId}
        isOpen={isAddModalOpen}
        closeModal={() => handleCloseModal()}
      /> */}
    </View>
  );
};

export default UpcomingMovies;
