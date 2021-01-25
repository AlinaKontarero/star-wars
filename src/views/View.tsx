import * as React from 'react'
import AllPersonsView from './AllPersonsView';
import PersonDetailsView from './PersonDetailsView';

class View extends React.Component<{}, never> {
  render() {


  const person = {
    name: "Obi-Wan Kenobi", 
    birthYear: "57BBY",
    gender: "male", 
    films:  [
      "http://swapi.dev/api/films/1/", 
      "http://swapi.dev/api/films/2/", 
      "http://swapi.dev/api/films/3/", 
      "http://swapi.dev/api/films/4/", 
      "http://swapi.dev/api/films/5/", 
      "http://swapi.dev/api/films/6/"
    ], 
  }
  return (
    <>
      <AllPersonsView />
      <PersonDetailsView person={person} />
    </>
  );
}
}

export default View