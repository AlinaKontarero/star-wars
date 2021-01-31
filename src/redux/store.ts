import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import {
  personReducer,
  IPersonstate,
} from './reducer';
export interface IAppState {
  PersonState: IPersonstate;
}

const rootReducer = combineReducers<IAppState>({
  PersonState: personReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}