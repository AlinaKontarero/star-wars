import configureMockStore from 'redux-mock-store'
import { PersonActionTypes } from '../redux/actions';
import { IPerson } from '../redux/types';
import { mockPersons } from './mockups/mockPersons';

const getPersons = (persons: IPerson[]) => ({
  type: PersonActionTypes.GET_ALL,
  Persons: persons
});

const mockStore = configureMockStore()
const store = mockStore({})
describe('action GET_ALL', () => {
  it('creates Persons array', () => {
    store.dispatch(getPersons(mockPersons));
    expect(store.getActions()).toMatchSnapshot();
  });
});