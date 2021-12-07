import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getUpcomingMovies } from '../../services';
import IUpcomingMovie from '../../models/IUpcomingMovie';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import YouTube from '../../components/Youtube';

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<IUpcomingMovie[]>();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentYouTubeId, setCurrentYouTubeId] = useState<string>('');
  useEffect(() => {
    (async () => {
      const data = await getUpcomingMovies();
      sortUpcomingMovies(data);
      setCurrentYouTubeId('');
    })();
  }, []);

  const sortUpcomingMovies = (data: IUpcomingMovie[]) => {
    setUpcomingMovies(
      data.sort((a, b) => (
        (a.title > b.title) ? 1
          : ((b.title > a.title) ? -1
            : 0))),
    );
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setCurrentYouTubeId('');
  };
  return (
    <View>
      <UpcomingMovieList
        movies={upcomingMovies as IUpcomingMovie[]}
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
