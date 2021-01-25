import * as React from 'react'
import Chip from '../components/Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IPerson = {
  name: string
  birthYear: string
  gender: string
  films: string[]
}

interface Props {
  person: IPerson
}

class PersonDetailsView extends React.Component<Props, never> {
  render() {
    const { person } = this.props
    const personGender = ():string => {
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
    console.log('gender::: ', personGender())
    return (
      <div>
        <h2>Person details</h2>
        <i className="fas fa-mars" />
        <i className="fas fa-camera"></i>
        <FontAwesomeIcon icon="user-circle" />
        <p>Name: <span>{person.name}</span></p>
        <p>Birth year: <span>{person.birthYear}</span></p>
        <p>Gender: <i className={`fas fa-${personGender()}`}></i></p>
        {person.films.length > 0 && person.films.map(_film => (
          <Chip label={_film} key={_film}/>
        ))}
      </div>
    )
  }
}

export default PersonDetailsView