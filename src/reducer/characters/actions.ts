import { Action, Dispatch } from "redux";

export const SET_CHARACTERS = 'SET_CHARACTERS';

export const getCharacters = () => {
  return (dispatch: Dispatch<Action>) =>
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(res => res.results)
      .then(characters =>
        dispatch(setCharacters(characters))
      );
}

export const setCharacters = (characters: any[]) => {
  return {
    type: SET_CHARACTERS,
    characters,
  };
}