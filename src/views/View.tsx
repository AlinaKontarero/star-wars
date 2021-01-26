import * as React from 'react'
import { Provider } from 'mobx-react'
import Footer from '../components/Footer';  
import { IPerson } from '../stores/person';
import usePersons from '../utils/persons';
import AllPersonsView from './AllPersonsView';
import PersonDetailsView from './PersonDetailsView';

interface State {
  selectedPersonName: string | undefined
}

class View extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      selectedPersonName: undefined
    };
  }

  public updateSelected = (name: string | undefined ) => {
    this.setState({ selectedPersonName: name })
    console.log('selected::: ', this.state.selectedPersonName)
  }

 
  render() {


  const person = {
    name: "Obi-Wan Kenobi", 
    birthYear: "57BBY",
    gender: "MALE", 
    films:  [
      "http://swapi.dev/api/films/1/", 
      "http://swapi.dev/api/films/2/", 
      "http://swapi.dev/api/films/3/", 
      "http://swapi.dev/api/films/4/", 
      "http://swapi.dev/api/films/5/", 
      "http://swapi.dev/api/films/6/"
    ], 
    isSelected: true,
    mass: '150',
    height: '150'
  } as IPerson

  return (
    // <Provider person={person as IPerson }>

    <div className='columns is-centered'>
      <div className='column is-10'>
        <div className='columns is-multiline is-variable is-2 '>
          <AllPersonsView 
            getPersons={usePersons}
            getSelectedPerson={this.updateSelected}
            />
          {person.isSelected && (
            <PersonDetailsView person={person.details} />
            )}
          <Footer />
        </div>
      </div>
    </div>
            // </Provider>
  );
}
}

export default View