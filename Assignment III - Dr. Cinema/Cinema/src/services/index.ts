import axios from 'axios';
import ICinema from '../models/ICinema';
import IGenre from '../models/IGenre';
import IMovie from '../models/IMovie';
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
      console.log(apiResponse);
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
      const cinemasTrimmed = whiteSpaceDESTROYER(response.data);
      console.log(response.data);
      console.log(cinemasTrimmed)
    for(const i of cinemasTrimmed) {
      //let trimmedAddress = Object.keys(i.address.trim());
      //console.log(trimmedAddress)
      let cinema: ICinema = {
        id: i.id,
        name: i.name,
        description: i.descrition,
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
    console.log(genres.data);
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
    console.log(images.data);
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
    console.log(upcomingMovies.data);
    return upcomingMovies.data;
  } catch (e) {
    console.log(e);
  }
}

export const getMovies = async (cinemaID?: number) => {
  let movies: IMovie[] = [];
  try{
    const response = await axios.get(
      `${url}/movies`, {
        headers: {
          'x-access-token': apiResponse.token
        }
      });
    // populate the return value
    for(const i of response.data) {
      // populate genres
      //let genres: IGenre[] = [];
      //for(const g of i.genres) {
      //  let genre: IGenre = {
      //    id: g.ID,
      //    name: g.Name,
      //    nameEN: g.NameEN
      //  }
      //  //console.log(genre);
      //  genres.push(genre);
      //}

      // pobulate showtimes
      let showTimes: IShowTime[] = [];
      let schedules: ISchedule[] = [];
      for(const s of i.showtimes) {
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

      let movie: IMovie = {
        id: i.id,
        title: i.title,
        poster: i.poster,
        plot: i.plot,
        durationMinutes: i.durationMinutes,
        year: i.year,
        //genres: genres,
        ////trailer: i.trailer,
        showTimes: showTimes
      }
      movies.push(movie);
    }
    //console.log(whiteSpaceDESTROYER(movies));
    return movies as IMovie[];
  } catch (e) {
    console.log(e);
  }
  
  return movies as IMovie[];
}

const whiteSpaceDESTROYER = <T>(data: T[]) => {
  return Object.keys(data).map(k => data[k] = typeof data[k] === 'string' ? data[k].trim() : data[k]);
}
