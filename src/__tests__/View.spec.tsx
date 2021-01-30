import React from "react";
import { configure, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import  View from "../views/View";
import { IPerson } from "../redux/reducers/personReducer";
import { mockPersons } from "./mockPersons";
import App from "../App";

configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const store = mockStore({});

// const wrapper = shallow(
//     <Provider store={store}>
//         <View persons={[] as IPerson[]}/>
//     </Provider>
// );
// wrapper.render();
// it('View is rendering successfully', () => {
//     console.log('wrapper::: ', wrapper)
//     expect(wrapper.exists(<h1>Star Wars people</h1>)).toBe(true)
// })
// toBe(true)
// const actions = store.getActions();
// console.log('actions::: ', actions)
// expect(actions).toEqual([ { type: 'GET_ALL' } ]);

it('works', () => {
    const wrap = shallow(
            <View />
    )
    wrap.setProps({ persons: mockPersons })
  
    expect(
        wrap.containsMatchingElement(
        <h1>Star Wars people</h1>
        )
      ).toBeTruthy()
  })