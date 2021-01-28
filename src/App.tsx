import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import View from './views/View';

const App = () => {
  return (
    <div className='columns is-centered App'>
      <div className='column is-10'>
        <div className='columns is-multiline is-variable is-2 '>
          <View />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
