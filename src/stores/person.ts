import { Instance, types } from "mobx-state-tree"


export const Gender = types.enumeration('Status', [
  'MALE', 'FEMALE', 'UNDEFINED'
])

export type IGender = Instance<
  typeof Gender
> 

export const Person = types
  .model('Person', {
    name: types.optional(types.string, ''),
    birthYear: types.optional(types.string, ''),
    height: types.optional(types.string, ''),
    gender: types.optional(Gender, 'UNDEFINED'),
    mass: types.optional(types.string, ''),
    films: types.optional(types.array(types.string), []),
    isSelected: types.optional(types.boolean, false)
  })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .actions((self: any) => {
    const  select = () => {
      if(self.isSelected === false) {
        self.isSelected = true 
      }
    }
    const deselect = () => {
      if(self.isSelected === true) {
        self.isSelected = false 
      }
    }
    return {
      select, 
      deselect
    }
  })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .views((self: any) => {
    return {
      get details() {
      return {
        name: self.name,
        birthYear: self.birthYear, 
        gender: self.gender,
        films: self.films
      }
    },
    get tableOptions() {
      return {
        name: self.name,
        height: parseFloat(self.height),
        mass: parseFloat(self.mass)
        }
      }
    }
  })

  export type IPerson = Instance<typeof Person>