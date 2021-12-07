import axios from 'axios';
import ICinema from '../models/ICinema';
import IGenre from '../models/IGenre';
import IMovie from '../models/IMovie';
import ITrailer from '../models/ITrailer';
import ISchedule from '../models/ISchedule';
import IShowTime from '../models/IShowTime';
import credentials from '../resources/credentials.json'
let apiResponse = {
  success: '',
  message: '',
  token: ''
};
const url: string = 'https://api.kvikmyndir.is';

export const authentiateApi = async () => {
  if(apiResponse.token === '') {
    try {
      const response = await axios.post(
        `${url}/authenticate`, 
        credentials, {
          headers: { 
            'Content-Type': 'application/json'
        }
      });
      apiResponse = response.data;
      console.log(apiResponse.token);
      return apiResponse;
    } catch (e) {
      console.log(e);
    }
  } else {
    return apiResponse;
  }

}

export const getCinemas = async () => {
  let cinemas: ICinema[] = [];
  try{
    const response = await axios.get(
      `${url}/theaters`, {
        headers: {
          'x-access-token': apiResponse.token
        }
      });
      const cinemasTrimmed: any = whiteSpaceDESTROYER(response.data);
      // console.log(cinemasTrimmed)
    for(const i of cinemasTrimmed) {
      let cinema: ICinema = {
        id: i.id,
        name: i.name,
        description: i.description,
        completeAddress: `${i.address}, ${i.city}`,
        phone: i.phone,
        website: i.website
      }
      cinemas.push(cinema);
    }
    return cinemas;
  } catch (e) {
    console.log(e);
  }
  return cinemas as ICinema[];
}

export const getGenres = async () => {
  try{
    const genres = await axios.get(
      `${url}/genres`, {
        headers: {
          'x-access-token': apiResponse.token
        }
      });
    //console.log(genres.data);
    return genres.data;
  } catch (e) {
    console.log(e);
  }
}

export const getImages = async () => {
  try{
    const images = await axios.get(
      `${url}/images`, {
        headers: {
          'x-access-token': apiResponse.token
        }
      });
    //console.log(images.data);
    return images.data;
  } catch (e) {
    console.log(e);
  }
}

export const getUpcomingMovies = async () => {
  try{
    const upcomingMovies = await axios.get(
      `${url}/upcoming`, {
        headers: {
          'x-access-token': apiResponse.token
        }
      });
    // console.log(upcomingMovies.data);
    return upcomingMovies.data;
  } catch (e) {
    console.log(e);
  }
}

export const getMovies = async () => {
  let movies: IMovie[] = [];
  try{
    const response = await axios.get(
      `${url}/movies`, {
        headers: {
          'x-access-token': apiResponse.token
        }
      });
    const moviesTrimmed: any = whiteSpaceDESTROYER(response.data);
    // populate the return value
    for(const i of moviesTrimmed) {
      // populate genres
      let genres: IGenre[] = [];
      const genresTrimmed: any = whiteSpaceDESTROYER(i.genres);
      for(const g of genresTrimmed) {

        let genre: IGenre = {
          id: g.ID,
          name: g.Name,
          nameEN: g.NameEN
        }
        genres.push(genre);
      }

      // pobulate showtimes
      let showTimes: IShowTime[] = [];
      let schedules: ISchedule[] = [];
      for(const s of i.showtimes) {
        //populate schedules
        for(const sc of s.schedule) {
        let schedule: ISchedule = {
          time: sc.time,
          purchase_url: sc.purchase_url
        }
        schedules.push(schedule);
      }
        let showTime: IShowTime = {
          cinema: { id: s.cinema.id, name: s.cinema.name },
          schedule: schedules
        }
        showTimes.push(showTime);
      }
      let trailers: string[] = [];
      for(const t of i.trailers) {
        for(const r of t.results) {
          trailers.push(r.key);
        }
      }

      let movie: IMovie = {
        id: i.id,
        title: i.title,
        poster: i.poster,
        plot: i.plot,
        durationMinutes: i.durationMinutes,
        year: i.year,
        genres: genres,
        //@ts-ignore
        trailer: trailers,
        showTimes: showTimes
      }
      movies.push(movie);
    }    
    return movies as IMovie[];
  } catch (e) {
    console.log(e);
  }
  
  return movies as IMovie[];
}

const whiteSpaceDESTROYER = <T>(data: T[]) => {
  const trimmedData = data.map((l) => {
    const parsed: T[] = [];
    //@ts-ignore
    Object.keys(l).forEach((key) => parsed[key.trim()] = l[key]);
    return parsed;
  })

  return trimmedData;
}
