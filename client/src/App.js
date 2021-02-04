<<<<<<< HEAD
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
import Subscriptions from "./containers/Subscriptions/Subscriptions";



function App() {
  return (
    <Router>
      <Navbar/>
      <SignUpForm/>
      <Subscriptions/>
    
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
>>>>>>> b397be2272922bfadacc417b5ffe2ada30ddc506
  );
}

export default App;

