import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Partner from './components/layout/Partners';
import './App.css';
//Redux
import { Provider } from 'react-redux';

import store from './store';

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Partner} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBhfyekbl4Y9cqQJAnP2ULXjKkXEV0kiT0'
// })(App);
