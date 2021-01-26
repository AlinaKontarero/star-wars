import React, { useEffect } from 'react';
import './App.css';
import View from './views/View';


const App = () => {
  const [person, setPerson] = React.useState([]);
  const [films, setFilms] = React.useState([]);
  // const fetchData = async (attr: string) => {
  //     const response = await fetch(`https://swapi.dev/api/${attr}`);
  //     return response.json();
  // };

  // useEffect(() =>{
  //   fetchData('people')
  //   .then(res => {
  //     fetchData(res.people).then(people => setPerson(people.results));


  //   // fetchData('https://swapi.dev/api/people/')
  //   //   .then(res => {
  //   //     fetchData(res.people).then(people => setPerson(people.results));
  //   //     fetchData(res.films).then(films => setFilms(films.results));
  //   //   });
  // }, [])


  

  console.log(films)
  return (
    <div className="App">
      <View />
    </div>
  );
}

export default App;
