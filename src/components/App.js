import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import "./../styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Social Posts</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
