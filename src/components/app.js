import React, { Component } from 'react';
import HomePage from './home-page/home-page';
import Math from "./topic-pages/math";
import Physics from "./topic-pages/physics";
import Chemistry from "./topic-pages/chemistry";
import Arts from "./topic-pages/arts";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/math" component={Math} />
              <Route path="/physics" component={Physics} />
              <Route path="/chemistry" component={Chemistry} />
              <Route path="/arts" component={Arts} />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}
