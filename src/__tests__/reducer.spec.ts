import { CharacterActionTypes } from "../redux/actions/PersonActions"
import { initialPersonstate, personReducer } from "../redux/reducers/personReducer"
import { mockPersons } from "./mockups/mockPersons"



describe('personReducer', () => {
  it('should return the initial state', () => {
    expect(personReducer(undefined, {
      type: CharacterActionTypes.GET_ALL,
      Persons: []
    })).toMatchSnapshot()
  })

  it('should handle GET_ALL', () => {
    expect(
      personReducer(initialPersonstate,
        {
          type: CharacterActionTypes.GET_ALL,
          Persons: mockPersons
        })
    ).toMatchSnapshot()
  })
})