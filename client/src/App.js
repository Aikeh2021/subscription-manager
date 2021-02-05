import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import LoginPage from "./containers/LoginPage/LoginPage";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
import Subscriptions from "./containers/Subscriptions/Subscriptions";
import UserDashboard from "./containers/UserDashboard/UserDashboard";



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/dashboard" component={UserDashboard} />
        <Route exact path="/subscriptions" component={Subscriptions} />
      </Switch>
      
    </Router>

  );
}

export default App;

