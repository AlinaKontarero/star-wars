import { Reducer } from 'redux';
import {
  CharacterActions,
  CharacterActionTypes,
} from '../actions/PersonActions';

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
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
    case CharacterActionTypes.GET_ALL: {
      return {
        ...state,
        Persons: action.Persons,
      };
    }
    default:
      return state;
  }
};