import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './components/Pages';
import LandingCH from './components/LandingCH';
import Known from './components/Known';
import Succss from './components/Success';
import About from './components/About';
import { Router, Route, IndexRoute, HistoryLocation } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history={HistoryLocation} >
        <Route path="/" component={Pages}>
          <IndexRoute component={LandingCH} />
          <Route path="/known" component={Known} />
          <Route path="/success" component={Succss} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <App
    url='http://localhost:3001/api/topics'
    pollInterval={2000} />,
  document.getElementById('app')
);