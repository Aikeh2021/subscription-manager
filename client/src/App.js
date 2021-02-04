
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import SignUpForm from "./containers/SignUpForm/SignUpForm";




function App() {
  return (
    <Router>
      <Navbar/>
      <SignUpForm/>
    
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;

