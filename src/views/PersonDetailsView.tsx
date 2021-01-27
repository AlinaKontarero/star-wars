import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import Chip from '../components/Chip'
import { Zoom } from '@material-ui/core';
import Loading from '../components/Loading';
import { ICharacter } from '../reducers/personReducer';
import { IconName } from '@fortawesome/free-solid-svg-icons';

interface Props {
  person: ICharacter
  onClose: () => void 
}

class PersonDetailsView extends React.Component<Props, never> {

  
  render() {
    // const films = this.namedFilms()

    const { person } = this.props
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
              onClick={this.props.onClose} 
              color='inherit'
              >
              <CloseIcon />
            </IconButton>
          </Tooltip>
          </div>
          {rowWrapper('Name', person.name)}
          {rowWrapper('Birth year', person.birth_year)}
          {rowWrapper('Gender', <FontAwesomeIcon icon={["fas", genderIcon() ]} size='lg' />)}
          
          {person.films.length > 0 
            ? person.films.map((_film: string, index: number) => (
             <div className='column is-narrow' key={index}>
              <Chip label={_film}/>
            </div>
            ))
            : <Loading />
          }
        </div>
      </div>
    )
  }
}

export default PersonDetailsView