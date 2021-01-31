import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { IPerson, IPersonstate } from '../reducers/personReducer';

export enum PersonActionTypes {
  GET_ALL = 'GET_ALL',
}
export interface IPersonGetAllAction {
  type: PersonActionTypes.GET_ALL;
  Persons: IPerson[];
}

export type CharacterActions = IPersonGetAllAction;

export const getAllPersons: ActionCreator<
  ThunkAction<Promise<any>, IPersonstate, null, IPersonGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const reqLinks = [];
      const testCall = await axios.get('https://swapi.dev/api/people')
      const pagesNumber: number = Math.ceil(testCall.data.count / testCall.data.results.length)
      // Start from second page as we already have the data from 1st page:
      for (let i = 2; i <= pagesNumber; i++) {
        reqLinks.push('https://swapi.dev/api/people/?page=' + i)
      }

      const responses = await Promise.all(
        reqLinks.map(link => 
          axios(link).then(({data: responses}) => responses)
        ))
      
      const result = [...responses, testCall.data]
        .map(_res => _res.results) 
        .flat(1)

      dispatch({
        Persons: result,
        type: PersonActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};