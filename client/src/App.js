import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import LoginPage from "./containers/LoginPage/LoginPage";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
// import Subscriptions from "./containers/Subscriptions/Subscriptions";
import UserNewSubForm from './containers/UserNewSubForm/UserNewSubForm';
import UserDashboard from "./containers/UserDashboard/UserDashboard";
import AdminDashboard from "./containers/Admin/AdminDashboard";
import AdminNewSub from '../src/containers/Admin/AdminNewSub';
import AdminEditSub from '../src/containers/Admin/AdminEditSub';
import Contact from './containers/Contact/Contact';
import SubMannyLogo from './assets/logos/SubMannyLogo.png';
import About from './containers/About/About';


function App() {
  return (
    <Router>
      <Navbar logo={SubMannyLogo}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/dashboard" component={UserDashboard} />
        <Route exact path="/newsub" component={UserNewSubForm} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/admin/new-subscription" component={AdminNewSub} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/:id" component={AdminEditSub} />
      </Switch>
    </Router>
  
  );
}

export default App;
