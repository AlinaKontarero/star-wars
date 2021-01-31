import configureMockStore from 'redux-mock-store'
import { CharacterActionTypes } from '../redux/actions/PersonActions';
import { IPerson } from '../redux/reducers/personReducer';
import { mockPersons } from './mockups/mockPersons';

const getPersons = (persons: IPerson[]) => ({
  type: CharacterActionTypes.GET_ALL,
  Persons: persons
});

const mockStore = configureMockStore()
const store = mockStore({})
describe('action creators', () => {
  it('creates CREATE_SUCCESS when creating a to-do was successful', () => {
    store.dispatch(getPersons(mockPersons));
    expect(store.getActions()).toMatchSnapshot();
  });
});