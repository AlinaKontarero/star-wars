import * as React from 'react'
import { connect } from 'react-redux';
import Loading from '../components/Loading'
import Table from '../components/Table'
import { IAppState } from '../store/Store';
import { IPerson } from '../reducers/personReducer';
import PersonDetailsView from './PersonDetailsView';

type IFilm = {
  title: string
  url: string
}

interface Props {
  allPersons: IPerson[]
}

interface State {
  films: IFilm[]
  selected?: IPerson
}

class AllPersonsView extends React.Component<Props, State>{
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

  private namedFilms = (filmUrls: string[]): string[] => {
    const filmTitles: string[] = []
      filmUrls.forEach(_url => {
      for(let i = 0; i < this.state.films.length; i++) {
        if(_url === this.state.films[i].url) {
          filmTitles.push(this.state.films[i].title)
        }
      }
    })
    return filmTitles
  } 

  render() {
    const toDisplayPersons = this.props.allPersons.map((_p: any) => ({
      name: _p.name,
      height:_p.height === 'unknown' ? _p.height : parseInt(_p.height),
      mass: _p.mass === 'unknown' ? _p.mass : parseInt(_p.mass),
    }))

    const setSelected = (personName: string ) => {
      const selectedPerson: IPerson | undefined = this.props.allPersons.find(_person => _person.name === personName)
      this.setState({ selected: selectedPerson })
    }

    const onClose = () => {
      this.setState({ selected: undefined})
    }

  return (
    <div className='column is-full'>
      <div className='columns is-multiline'>
        <div className='column is-full'>
          <h2>Star Wars people </h2>
        </div>
          {this.props.allPersons.length > 0 
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
          />
         )} 
      </div>
    </div>
    )
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    allPersons: store.PersonState.Persons,
  };
};

export default connect(mapStateToProps)(AllPersonsView)
