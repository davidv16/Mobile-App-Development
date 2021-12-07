import ISchedule from '../ISchedule';
import ICinema from '../ICinema';

export default interface IShowTime {
  cinema: ICinema;
  schedule: ISchedule[];
};
