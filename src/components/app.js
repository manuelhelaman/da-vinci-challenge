import React, { Component } from 'react';
import HomePage from './home-page/home-page';
import Math from "./topic-pages/math";
import MathInstructions from "./topic-pages/instrocution-pages/math-instructions";
import Physics from "./topic-pages/physics";
import PhysicsInstructions from "./topic-pages/instrocution-pages/physics-instructions";
import Chemistry from "./topic-pages/chemistry";
import ChemistryInstructions from "./topic-pages/instrocution-pages/chemisrty-instructions";
import Arts from "./topic-pages/arts";
import ArtsInstructions from "./topic-pages/instrocution-pages/arts-instructions";
import Timer from './timer';
import PageTimeUp from './pageTimeUp';
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
              <Route path="/math-instructions" component={MathInstructions} />
              <Route path="/physics" component={Physics} />
              <Route path="/physics-instructions" component={PhysicsInstructions} />
              <Route path="/chemistry" component={Chemistry} />
              <Route path="/chemistry-instructions" component={ChemistryInstructions} />
              <Route path="/arts" component={Arts} />
              <Route path="/arts-instructions" component={ArtsInstructions} />
              <Route path="/timer" component ={Timer} />
              <Route path="/time-up" component={PageTimeUp} />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}
