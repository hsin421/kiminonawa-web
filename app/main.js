import React from 'react';
import { render } from 'react-dom';
import Pages from './components/Pages';
import LandingCH from './components/LandingCH';
import Staff from './components/Staff';
import ScheduleCH from './components/Schedule';
import SpeakersCH from './components/Speakers';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Pages}>
          <IndexRoute component={LandingCH} />
          <Route path="/staff" component={Staff} />
          <Route path="/schedule" component={ScheduleCH} />
          <Route path="/speakers" component={SpeakersCH} />
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));