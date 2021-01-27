import * as React from 'react'
import { connect } from 'react-redux';
import Loading from '../components/Loading'
import Table from '../components/Table'
import { IAppState } from '../store/Store';
import { ICharacter } from '../reducers/personReducer';
import PersonDetailsView from './PersonDetailsView';

interface Props {
  allPersons: ICharacter[]
}

const AllPersonsView = (props: Props) => {
  const toDisplayPersons = props.allPersons.map((_p: any) => ({
    name: _p.name,
    height: _p.height,
    mass: _p.mass,
  }))


  return (
    <div className='column is-full'>
      <div className='columns is-multiline'>
        <div className='column is-full'>
          <h2>Star Wars people </h2>
        </div>
          {props.allPersons.length > 0 
          ? 
            <div className='column is-full'>
              <Table 
                rows={toDisplayPersons}  
                // getSelectedPerson={props.getSelectedPerson}
              />
            </div>
          : <Loading />
        }
        {props.allPersons[0] && (
            <PersonDetailsView person={props.allPersons[0]} />
         )} 
      </div>
    
    </div>
    )
  }
// Grab the Persons from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    allPersons: store.Personstate.Persons,
  };
};

export default connect(mapStateToProps)(AllPersonsView)

// public componentDidMount() {
//   // Get all films: 
//   fetch('https://swapi.dev/api/films/')
//     .then(res => res.json())
//     .then(data => {
//       const filteredFilms = data.results.map((_film: any) => ({
//         title: _film.title,
//         url: _film.url
//       }))
//       this.setState({ filmsArray: filteredFilms });
//     })
//     .catch(err => console.log(err.message));


//   // Get all persons
//   const requests = [];

//   for (let i = 1; i <= 9; i++) {
//     requests.push(fetch('https://swapi.dev/api/people/?page=' + i));
//   }

//   Promise.all(requests)
//     .then(res => Promise.all(res.map(r => r.json())))
//     .then(data => {
//       const people: any[] = [];

//       data.forEach(d => {people.push(...d.results)});

//       const filteredPeople: any[] = people.map((_hero: any) => ({
//         name: _hero.name,
//         height: _hero.height,
//         mass: _hero.mass,
//         birthYear: _hero.birth_year,
//         gender: _hero.gender,
//         films: this.namedFilms(_hero.films),
//         isSelected: false
//       } ))

//       this.setState({ peopleArray: filteredPeople });
//       console.log('people:::: ', this.state.peopleArray)
//     })
//     .catch(err => console.log(err.message));
// }

// private namedFilms = (filmUrls: string[]): string[] => {
//   const filmTitles: string[] = []
//     filmUrls.forEach(_url => {
//     for(let i = 0; i < this.state.filmsArray.length; i++) {
//       if(_url === this.state.filmsArray[i].url) {
//         filmTitles.push(this.state.filmsArray[i].title)
//       }
//     }
//   })
//   console.log('titles::: ', filmTitles)
//   return filmTitles
// } 