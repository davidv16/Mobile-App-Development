import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getCinemas } from '../../services';
import CinemaList from '../../components/CinemaList';
import ICinema from '../../models/ICinema';
import { useDispatch, useSelector } from 'react-redux';
import {getCinema } from '../../store/actions/cinemasAction'

const Cinemas = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinema());
  }, [])

  // const sortCinemas = (data: ICinema[]) => {
  //   setCinemas(data.sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))));
  // };
  return (
    <View>
      <CinemaList />
    </View>
  );
};

export default Cinemas;
