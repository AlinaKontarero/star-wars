import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { IFilm, IFilmState } from '../reducers/filmReducer';

export enum FilmActionTypes {
  GET_ALL = 'GET_ALL',
}

export interface IFilmGetAllAction {
  type: FilmActionTypes.GET_ALL;
  Films: IFilm[];
}

export type FilmActions = IFilmGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllFilms: ActionCreator<
  ThunkAction<Promise<void>, IFilmState, null, IFilmGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://swapi.dev/api/films');
      dispatch({
        Films: response.data.results,
        type: FilmActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};