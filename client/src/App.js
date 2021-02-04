import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
import UserDashboard from './components/UserDashboard/UserDashboard';




function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/dashboard" component={UserDashboard} />
      </Switch>
      
    </Router>

  );
}

export default App;

