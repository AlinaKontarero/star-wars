import * as React from 'react'
import { Tooltip, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import Chip from '../components/Chip'
import { Zoom } from '@material-ui/core';
import { IPerson } from '../stores/person';
import Loading from '../components/Loading';

interface Props {
  person: IPerson
}

class PersonDetailsView extends React.Component<Props, never> {

  
  render() {
    // const films = this.namedFilms()

    const { person } = this.props
    const genderIcon = ():string => {
      switch(person.gender) {
        case 'MALE':
          return 'mars'
        case 'FEMALE':
          return 'venus'
        case 'UNDEFINED':
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
    const onClose = () => {
      console.log('close::: ', this.props.person)
      this.props.person.deselect()
      console.log('after::: ', this.props.person)
    }


    return (
      <div className='column is-full'>
        <div className='columns is-multiline is-variable is-2'>
          <div className='column'>
            <h2>Person details</h2>
          </div>
          <div className='column is-narrow'>
          <Tooltip title='Close' TransitionComponent={Zoom} arrow={true} placement={'top'}>
            <IconButton 
              onChange={onClose} 
              color='inherit'
              >
              <CloseIcon />
            </IconButton>
          </Tooltip>
          </div>
          {rowWrapper('Name', person.name)}
          {rowWrapper('Birth year', person.birthYear)}
          {rowWrapper('Gender', <i className={`fas fa-${genderIcon()} fa-lg`}></i>)}
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