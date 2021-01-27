import React, { useEffect } from 'react';
import './App.css';
import View from './views/View';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { getCharacters } from './reducer/characters/actions';


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
));
store.dispatch(getCharacters());
console.log('store::: ', store.dispatch(getCharacters()))
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
    <Provider store={store}>
    <div className="App">
      <View />
    </div>
    </Provider>
  );
}

export default App;
