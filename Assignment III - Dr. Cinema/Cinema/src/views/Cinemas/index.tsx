import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CinemaList from '../../components/CinemaList';
import { useDispatch } from 'react-redux';
import {getCinemasDispatch } from '../../store/actions/cinemasAction'
import { getMoviesDispatch } from '../../store/actions/movieAction';

const Cinemas = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemasDispatch());
    dispatch(getMoviesDispatch());
  }, [])
  
  return (
    <View>
      <CinemaList />
    </View>
  );
};

export default Cinemas;
