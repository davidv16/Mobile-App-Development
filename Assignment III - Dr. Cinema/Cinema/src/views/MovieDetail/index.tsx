import React, { useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import GenresList from '../../components/GenresList';
import ShowTimesList from '../../components/ShowTimesList';
import ICinema from '../../models/ICinema';
import Movie from '../../components/Movie';
import MovieList from '../../components/MovieList';
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

 {/*<FlatList*/}
      //  ListHeaderComponent={
      //    <MovieDetailHeader movie={movie} />
      //  }
      //  numColumns={1}
      //  data={movie}
      //  renderItem={({ item }) =>
      //    <View>
      //      <GenresList genres={item.genres} />
//
      //      <ShowTimesList showTimes={item.showTimes} cinema={selectedCinema} />
      //    </View>
//
      //  }
      //  keyExtractor={(item) => item.title}
      ///>
