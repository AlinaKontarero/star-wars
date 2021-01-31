import { Reducer } from 'redux';
import {
  CharacterActions,
  PersonActionTypes,
} from './actions';
import { IPerson } from './types';


export interface IPersonstate {
  readonly Persons: IPerson[];
}

export const initialPersonstate: IPersonstate = {
  Persons: [],
};

export const personReducer: Reducer<IPersonstate, CharacterActions> = (
  state = initialPersonstate,
  action
) => {
  switch (action.type) {
    case PersonActionTypes.GET_ALL: {
      return {
        ...state,
        Persons: action.Persons,
      };
    }
    default:
      return state;
  }
};