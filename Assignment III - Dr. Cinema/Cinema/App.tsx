import React from 'react';
import AppContainer from './src/routes/index'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';


const App = () => (
<Provider store={createStore(reducers, applyMiddleware(thunk))}>
  <AppContainer/>
</Provider>
);

export default App;
