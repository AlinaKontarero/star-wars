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
    <div className='columns is-centered'>
      <div className='column is-10'>
        <div className='columns is-multiline is-variable is-2 '>
          <AllPersonsView />
          <PersonDetailsView person={person} />
        </div>
      </div>
    </div>
  );
}
}

export default View