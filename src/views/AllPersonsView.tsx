import * as React from 'react'
import Table from '../components/Table'

interface Props {
  getPersons: () => any
}

const AllPersonsView = (props: Props) => {
    const persons = props.getPersons().persons

    const newArr = persons.map((_hero: any) => ({
      name: _hero.name,
      height: _hero.height,
      mass: _hero.mass,
      birthYear: _hero.birth_year,
      gender: _hero.gender,
      films: _hero.films
    }))

    console.log('newArr === ', newArr)

    return (
      <div className='column is-full'>
        <div className='columns is-multiline'>
          <div className='column is-full'>
            <h2>Star Wars people </h2>
          </div>
          <div className='column is-full'>
            <Table /* data={newArr} */  />
          </div>
        </div>
      
      </div>
    )
  }


export default AllPersonsView