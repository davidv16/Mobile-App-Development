import axios from 'axios';
import ICinema from '../models/ICinema';
import IGenre from '../models/IGenre';
import IMovie from '../models/IMovie';
import ISchedule from '../models/ISchedule';
import IShowTime from '../models/IShowTime';
import credentials from '../resources/credentials.json';
import IUpcomingMovie from '../models/IUpcomingMovie';

let apiResponse = {
  success: '',
  message: '',
  token: '',
};
const url = 'https://api.kvikmyndir.is';

export const authentiateApi = async () => {
  if (apiResponse.token === '' || undefined) {
    try {
      const response = await axios.post(
        `${url}/authenticate`,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      apiResponse = response.data;
      console.log(apiResponse.token);
      return apiResponse;
    } catch (e) {
      console.log(e);
    }
  }
  return apiResponse;
};

export const getCinemas = async () => {
  const cinemas: ICinema[] = [];
  try {
    const response = await axios.get(`${url}/theaters`, {
      headers: {
        'x-access-token': apiResponse.token,
      },
    });
    const cinemasTrimmed: any = whiteSpaceAndHyphenDESTROYER(response.data);
    for (const i of cinemasTrimmed) {
      const cinema: ICinema = {
        id: i.id,
        name: i.name,
        description: i.description,
        completeAddress: `${i.address}, ${i.city}`,
        phone: i.phone,
        website: i.website,
      };
      cinemas.push(cinema);
    }
    return cinemas;
  } catch (e) {
    console.log(e);
  }
  return cinemas as ICinema[];
};

export const getUpcomingMovies = async () => {
  const upcomingMovies: IUpcomingMovie[] = [];
  try {
    const response = await axios.get(`${url}/upcoming`, {
      headers: {
        'x-access-token': apiResponse.token,
      },
    });
    const moviesTrimmed: any = whiteSpaceAndHyphenDESTROYER(response.data);
    // populate the return value
    for (const i of moviesTrimmed) {
      const trailers: string[] = [];
      for (const t of i.trailers) {
        for (const r of t.results) {
          trailers.push(r.key);
        }
      }

      const upComingMovie: IUpcomingMovie = {
        title: i.title,
        poster: i.poster,
        releaseDate: i.releasedateIS,
        // @ts-ignore
        trailers,
      };
      upcomingMovies.push(upComingMovie);
    }
    return upcomingMovies as IUpcomingMovie[];
  } catch (e) {
    console.log(e);
  }
  return upcomingMovies as IUpcomingMovie[];
};

export const getMovies = async () => {
  const movies: IMovie[] = [];
  try {
    const response = await axios.get(`${url}/movies`, {
      headers: {
        'x-access-token': apiResponse.token,
      },
    });
    const moviesTrimmed: any = whiteSpaceAndHyphenDESTROYER(response.data);
    // populate the return value
    for (const i of moviesTrimmed) {
      // populate genres
      const genres: IGenre[] = [];
      const genresTrimmed: any = whiteSpaceAndHyphenDESTROYER(i.genres);
      for (const g of genresTrimmed) {
        const genre: IGenre = {
          id: g.ID,
          name: g.Name,
          nameEN: g.NameEN,
        };
        genres.push(genre);
      }

      // pobulate showtimes
      const showTimes: IShowTime[] = [];
      const schedules: ISchedule[] = [];
      for (const s of i.showtimes) {
        // populate schedules
        for (const sc of s.schedule) {
          const schedule: ISchedule = {
            time: sc.time,
            purchase_url: sc.purchase_url,
          };
          schedules.push(schedule);
        }
        const showTime: IShowTime = {
          cinema: { id: s.cinema.id, name: s.cinema.name },
          schedule: schedules,
        };
        showTimes.push(showTime);
      }
      const trailers: string[] = [];
      for (const t of i.trailers) {
        for (const r of t.results) {
          trailers.push(r.key);
        }
      }

      const movie: IMovie = {
        id: i.id,
        title: i.title,
        poster: i.poster,
        plot: i.plot,
        durationMinutes: i.durationMinutes,
        year: i.year,
        genres,
        // @ts-ignore
        trailer: trailers,
        showTimes,
      };
      movies.push(movie);
    }
    return movies as IMovie[];
  } catch (e) {
    console.log(e);
  }

  return movies as IMovie[];
};

const whiteSpaceAndHyphenDESTROYER = <T>(data: T[]) => {
  const trimmedData = data.map((l) => {
    const parsed: T[] = [];
    // @ts-ignore
    Object.keys(l).forEach((key) => parsed[key.trim()] = l[key]);
    // @ts-ignore
    Object.keys(l).forEach((key) => parsed[key.replace(/-/g, '')] = l[key]);
    return parsed;
  });

  return trimmedData;
};
