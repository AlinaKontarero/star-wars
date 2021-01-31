import * as React from 'react';
import View from './View';
import '../styles/App.css';

const App = () => {
  return (
    <div className='columns is-centered App'>
      <div className='column is-10'>
        <div className='columns is-multiline is-variable is-2 '>
          <View />
        </div>
      </div>
    </div>
  );
};

export default App;
