import React from "react";

import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery1 from "./pages/Gallery1";
import Gallery2 from "./pages/Gallery2";
import Gallery3 from "./pages/Gallery3";
import Paintings from "./pages/Paintings";
import Exhibition from "./pages/Exhibition";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Paintings" component={Paintings} />
          <Route path="/Gallery1" component={Gallery1} />
          <Route path="/Gallery2" component={Gallery2} />
          <Route path="/Gallery3" component={Gallery3} />
          <Route path="/Exhibition" component={Exhibition} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
