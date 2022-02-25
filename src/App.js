import React from 'react';
import Form from "./components/Form";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';



const App = () => {
  return <Router><div>

    <Switch>
      <Route path="/Login" exact component={Login} />
      <Route path="/Form" exact component={Form} />
      <Route path="/home" exact component={Home}/>
    </Switch>
    </div>
    </Router>;
};

export default App;
