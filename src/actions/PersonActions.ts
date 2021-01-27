// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Character Typing
import { ICharacter, IPersonstate } from '../reducers/personReducer';

// Create Action Constants
export enum CharacterActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL;
  Persons: ICharacter[];
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type CharacterActions = ICharacterGetAllAction;

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllPersons: ActionCreator<
  ThunkAction<Promise<any>, IPersonstate, null, ICharacterGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://swapi.dev/api/people');
      dispatch({
        Persons: response.data.results,
        type: CharacterActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};