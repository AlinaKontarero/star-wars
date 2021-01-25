import * as React from 'react'
import Table from '../components/Table'

interface Props {

}

class AllPersonsView extends React.Component<Props, never> {
  public async componentDidMount() {
    this.getPersons()
  }

  private getPersons = () => {
    const persons = fetch(`https://swapi.dev/api/people/`, {
      method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(
        //   {
        //     flowCriteria: this.props.flowCriteria,
        //     relatedObject: this.props.relatedObject
        //   }
        // )
    }
  
    )
      .then( x => x.json)
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e)
        return {}
      })
      if(persons) {
        const results = JSON.stringify(persons)
        console.log('results::: ', results)
        return persons
      }
    }

  render() {
    return (
      <div className='column is-full'>
        <div className='columns is-multiline'>
          <div className='column is-full'>
            <h2>Star Wars people </h2>
          </div>
          <div className='column is-full'>
            <Table />
          </div>
        </div>
      
      </div>
    )
  }
}

export default AllPersonsView