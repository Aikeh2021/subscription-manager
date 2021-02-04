
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
  );
}

export default App;

