import * as React from 'react'
import Chip from '../components/Chip'

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
    const rowWrapper = (key: string, value: string | JSX.Element) => {
      return (
        <div className='column is-full'> 
          <p><b>{key}: </b><span>{value}</span></p>
        </div>
      )
    }
    return (
      <div className='column is-full'>
        <div className='columns is-multiline is-variable is-2'>
          <div className='column is-full'>
            <h2>Person details</h2>
          </div>
          {rowWrapper('Name', person.name)}
          {rowWrapper('Birth year', person.birthYear)}
          {rowWrapper('Gender', <i className={`fas fa-${personGender()} fa-lg`}></i>)}
           {person.films.length > 0 && person.films.map((_film, index) => (
             <div className='column is-narrow' key={index}>
              <Chip label={_film}/>
            </div>
        ))}
        </div>
      </div>
    )
  }
}

export default PersonDetailsView