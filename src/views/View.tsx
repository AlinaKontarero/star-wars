import * as React from 'react'
import { connect } from 'react-redux';
import Loading from '../components/Loading'
import Table from '../components/Table'
import { IAppState } from '../redux/store';
import PersonDetailsView from './PersonDetailsView';
import { IFilm, IPerson } from '../redux/types';

interface Props {
  persons: IPerson[]
}

interface State {
  films: IFilm[]
  selected?: IPerson
}

export class View extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
      films: [],
      selected: undefined
    }
  }

  public componentDidMount() {
    fetch('https://swapi.dev/api/films/')
      .then(res => res.json())
      .then(data => {
        const filteredFilms = data.results.map((_film: any) => ({
          title: _film.title,
          url: _film.url
        }))
        this.setState({ films: filteredFilms });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    const toDisplayPersons = this.props.persons.map((_p: any) => ({
      name: _p.name,
      height:_p.height === 'unknown' ? _p.height : parseInt(_p.height),
      mass: _p.mass === 'unknown' ? _p.mass : parseInt(_p.mass),
    }))

    const setSelected = (personName: string ) => {
      const selectedPerson: IPerson | undefined = this.props.persons.find(_person => _person.name === personName)
      this.setState({ selected: selectedPerson })
    }

    const onClose = () => {
      this.setState({ selected: undefined})
    }

  return (
    <div className='column is-full'>
      <div className='columns is-multiline'>
        <div className='column is-full is-heading'>
          <h1>Star Wars people</h1>
        </div>
          {this.props.persons.length > 0 
          ? <div className='column is-full'>
              <Table 
                rows={toDisplayPersons}  
                setSelectedPerson={setSelected}
              />
            </div>
          : <Loading />
        }
        {this.state.selected && (
          <PersonDetailsView 
            person={this.state.selected} 
            onClose={onClose}
            films={this.state.films}
          />
         )} 
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    persons: store.PersonState.Persons,
  };
};

export default connect(mapStateToProps)(View)
