import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import Chip from '../components/Chip'
import { Zoom } from '@material-ui/core';
import Loading from '../components/Loading';
import { IPerson } from '../redux/reducers/personReducer';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { IFilm } from './View';

interface Props {
  person: IPerson
  onClose: () => void 
  films: IFilm[]
}

class PersonDetailsView extends React.Component<Props, never> { 
  render() {
    const { person, films, onClose } = this.props
    const genderIcon = (): IconName => {
      switch(person.gender) {
        case 'male':
          return 'mars'
        case 'female':
          return 'venus'
        case 'n/a':
        default:
          return 'genderless'
      }
    }

    const setFilmTitles = (url: string) =>  films.find(film => film.url === url)

    const filmsSection = (): JSX.Element => {
      const filmsArr: IFilm[] = []
      const filteredByUrlFilms = person.films.map(_movie => filmsArr.push(setFilmTitles(_movie) || {} as IFilm))
      return filmsArr.length === 0 
        ? <Loading />
        : <> {filmsArr.map((_film: IFilm, index: number) => (
           <div className='column is-narrow' key={index}>
            <Chip label={_film.title}/>
          </div>
          ))}
          </>
    }

    const rowWrapper = (key: string, value: string | number | JSX.Element) => {
      return (
        <div className='column is-full'> 
          <p><b>{key}: </b><span>{value}</span></p>
        </div>
      )
    }

    return (
      <div className='column is-full'>
        <div className='columns is-multiline is-variable is-2 is-vcentered'>
          <div className='column'>
            <h2>Person details</h2>
          </div>
          <div className='column is-narrow'>
          <Tooltip title='Close' TransitionComponent={Zoom} arrow={true} placement={'top'}>
            <IconButton 
              onClick={onClose} 
              color='inherit'
              >
              <CloseIcon />
            </IconButton>
          </Tooltip>
          </div>
          {rowWrapper('Name', person.name)}
          {rowWrapper('Birth year', person.birth_year)}
          {rowWrapper('Gender', <FontAwesomeIcon icon={["fas", genderIcon() ]} size='lg' />)}
          {filmsSection()}
        </div>
      </div>
    )
  }
}

export default PersonDetailsView