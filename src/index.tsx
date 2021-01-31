import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { IAppState } from './redux/store';
import { getAllPersons } from './redux/actions';
import App from './App';
import './index.css';

interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

const store = configureStore();
store.dispatch(getAllPersons());

ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
) as HTMLElement);