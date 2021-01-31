import { PersonActionTypes } from "../redux/actions"
import { initialPersonstate, personReducer } from "../redux/reducer"
import { mockPersons } from "./mockups/mockPersons"

describe('personReducer', () => {
  it('should return the initial state', () => {
    expect(personReducer(undefined, {
      type: PersonActionTypes.GET_ALL,
      Persons: []
    })).toMatchSnapshot()
  })

  it('should handle GET_ALL', () => {
    expect(
      personReducer(initialPersonstate,
        {
          type: PersonActionTypes.GET_ALL,
          Persons: mockPersons
        })
    ).toMatchSnapshot()
  })
})