import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes/index'
import reducers from './src/store/reducers';

const App = () => (
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <AppContainer />
  </Provider>
);

export default App;
