import { Reducer } from 'redux';
import { FilmActions, FilmActionTypes } from '../actions/FilmsActions';

export interface IFilm {
  title: string
  episode_id: string | number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}

export interface IFilmState {
  readonly Films: IFilm[];
}

const initialPersonstate: IFilmState = {
  Films: [],
};

export const filmsReducer: Reducer<IFilmState, FilmActions> = (
  state = initialPersonstate,
  action
) => {
  switch (action.type) {
    case FilmActionTypes.GET_ALL: {
      return {
        ...state,
        Films: action.Films,
      };
    }
    default:
      return state;
  }
};