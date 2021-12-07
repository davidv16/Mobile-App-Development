import IGenre from '../IGenre';
import IShowTimes from '../IShowTime';

export default interface IMovie {
  id: number;
  title: string;
  poster: string;
  plot?: string;
  durationMinutes?: number;
  year: string;
  genres?: IGenre[];
  trailers?: string[];
  showTimes?: IShowTimes[];
};
