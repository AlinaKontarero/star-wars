import * as React from 'react'
import Loading from '../components/Loading'
import Table from '../components/Table'
import { IPerson } from '../stores/person'

interface Props {
  allPersons: IPerson[]
  getSelectedPerson: (name: string | undefined) => void
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
                getSelectedPerson={props.getSelectedPerson}
              />
            </div>
          : <Loading />
        }
      </div>
    
    </div>
    )
  }


export default AllPersonsView