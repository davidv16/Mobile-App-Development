import React, { useState } from 'react';
import { View } from 'react-native';
import GenresList from '../../components/GenresList';
import ShowTimesList from '../../components/ShowTimesList';
import ICinema from '../../models/ICinema';
import MovieDetailHeader from '../../components/MovieDetailHeader';


const MovieDetail = ({ route }: any) => {
  const { movie, cinema } = route.params;
  const [selectedCinema] = useState<ICinema>(cinema);
  return (
    <View>
      <MovieDetailHeader movie={movie} />
      <GenresList genres={movie.genres} />
      <ShowTimesList showTimes={movie.showTimes} cinema={selectedCinema} />


    </View>
  );
};

export default MovieDetail;
