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
describe('action GET_ALL', () => {
  it('creates Persons array', () => {
    store.dispatch(getPersons(mockPersons));
    expect(store.getActions()).toMatchSnapshot();
  });
});