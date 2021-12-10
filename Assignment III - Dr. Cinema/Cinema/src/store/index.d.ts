import IMovie from '../models/IMovie'
import ICinema from '../models/ICinema'
import IUpcomingMovie from '../models/IUpcomingMovie'

type MovieState = {
  movies: IMovie[]
}

type CinemaState = {
  cinemas: ICinema[]
}

type UpcomingState = {
  upcoming: IUpcomingMovie[]
}

type MovieAction = {
  type: string
  payload: IMovie[]
}

type CinemaAction = {
  type: string
  payload: ICinema[]
}

type UpcomingAction = {
  type: string
  payload: IUpcomingMovie[]
}

type MovieDispatch = (args: MovieAction) => MovieAction

type CinemaDispatch = (args: CinemaAction) => CinemaAction

type UpcomingDispatch = (args: UpcomingAction) => UpcomingAction
