import * as React from 'react'
import Footer from '../components/Footer';  
import { IPerson } from '../stores/person';
import AllPersonsView from './AllPersonsView';
import PersonDetailsView from './PersonDetailsView';

interface State {
  selectedPersonName: string | undefined
  peopleArray: IPerson[]
  filmsArray: {
    title: string 
    url: string
  }[]
}

class View extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      selectedPersonName: undefined,
      peopleArray: [],
      filmsArray: []
    };
  }

  public componentDidMount() {
    // Get all films: 
    fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
      .then(data => {
        const filteredFilms = data.results.map((_film: any) => ({
          title: _film.title,
          url: _film.url
        }))
        this.setState({ filmsArray: filteredFilms });
      })
      .catch(err => console.log(err.message));


    // Get all persons
    const requests = [];

    for (let i = 1; i <= 9; i++) {
      requests.push(fetch('https://swapi.dev/api/people/?page=' + i));
    }

    Promise.all(requests)
      .then(res => Promise.all(res.map(r => r.json())))
      .then(data => {
        const people: any[] = [];

        data.forEach(d => {people.push(...d.results)});

        const filteredPeople: IPerson[] = people.map((_hero: any) => ({
          name: _hero.name,
          height: _hero.height,
          mass: _hero.mass,
          birthYear: _hero.birth_year,
          gender: _hero.gender,
          films: this.namedFilms(_hero.films),
          isSelected: false
        } as IPerson))

        this.setState({ peopleArray: filteredPeople });
        console.log('people:::: ', this.state.peopleArray)
      })
      .catch(err => console.log(err.message));
  }

  private namedFilms = (filmUrls: string[]): string[] => {
    const filmTitles: string[] = []
      filmUrls.forEach(_url => {
      for(let i = 0; i < this.state.filmsArray.length; i++) {
        if(_url === this.state.filmsArray[i].url) {
          filmTitles.push(this.state.filmsArray[i].title)
        }
      }
    })
    console.log('titles::: ', filmTitles)
    return filmTitles
  } 

  private updateSelected = (name: string | undefined ) => {
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
            allPersons={this.state.peopleArray}
            getSelectedPerson={this.updateSelected}
            />
          {person.isSelected && (
            <PersonDetailsView person={person} />
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