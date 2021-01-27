import { SET_CHARACTERS } from './actions';

const initialState: any[] = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return action.characters;
    default:
      return state;
  }
};