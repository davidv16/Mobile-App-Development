import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import YouTube from '../../components/Youtube';
import { getUpcomingDispatch } from '../../store/actions/upcomingAction';

const UpcomingMovies = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentYouTubeId, setCurrentYouTubeId] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingDispatch());
  }, [])

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setCurrentYouTubeId('');
  };
  return (
    <View>
      <UpcomingMovieList
        setCurrentYouTube={(id: string) => setCurrentYouTubeId(id)}
        setModal={() => setIsAddModalOpen(true)}
      />
      <YouTube
        youTubeId={currentYouTubeId}
        isOpen={isAddModalOpen}
        closeModal={() => handleCloseModal()}
      />
    </View>
  );
};

export default UpcomingMovies;
