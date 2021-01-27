import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import AllPersonsView from './views/AllPersonsView';

const App: React.SFC<{}> = () => {
  return (
    <div className='columns is-centered App'>
      <div className='column is-10'>
        <div className='columns is-multiline is-variable is-2 '>
          <AllPersonsView />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
