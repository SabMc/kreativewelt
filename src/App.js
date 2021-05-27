import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2";
import Gallery3 from "./components/Gallery3";
import Paintings from "./components/Paintings";
import Exhibition from "./components/Exhibition";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
