import React from "react";
import Form from "./components/Form";
import Login from "./components/Login";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route index component={Login} />
        <Route path="/form" exact component={Form} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
