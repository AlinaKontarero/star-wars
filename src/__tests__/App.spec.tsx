import React from "react";
import { configure, shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from "../App";

configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const store = mockStore({});

describe("App Component", () => {
it("should render App without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <App />
        </Provider>
      ).exists()
    ).toBe(true);
  });
});