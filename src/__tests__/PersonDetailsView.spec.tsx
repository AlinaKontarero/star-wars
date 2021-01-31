import React from 'react';
import { Provider } from 'react-redux';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import PersonDetailsView from '../views/PersonDetailsView';
import { mockFilms } from './mockups/mockFilms';
import { mockPersons } from './mockups/mockPersons';
 
const mockStore = configureStore([]);
 
describe('PersonDetailsView Component', () => {
  let store;
  let component: ReactTestRenderer
 
  beforeEach(() => {
    store = mockStore({
      PersonState: {
        Persons: mockPersons,
      } 
    });
 
    component = renderer.create(
      <Provider store={store}>
        <PersonDetailsView films={mockFilms} person={mockPersons[0]} onClose={() => console.log('close')} />
      </Provider>
    );
  });
  
  
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});