import React from 'react';
import { render, screen } from '@testing-library/react';
import View from './views/View';
import { shallow } from 'enzyme';
import App from './App';
import { Store } from '@material-ui/icons';
import { Provider } from 'react-redux';

// xtest('display heading', () => {
//   render(<View />);
//   const headingElement = screen.getByText(/star wars people/i);
//   expect(headingElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  shallow(<App />);
});

// it("renders Account header", () => {
//   const TestComponent = <Provider store={Store}><View /></Provider>
//   const welcome = <h1>Star Wars people </h1>;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });

// import { render, fireEvent, screen } from '../../test-utils'
// import App from '../../containers/App'

// it('Renders the connected app with initialState', () => {
//   render(<App />, { initialState: { user: 'Redux User' } })

//   expect(screen.getByText(/redux user/i)).toBeInTheDocument()
// })