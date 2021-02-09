import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AdminLoginPage from "./containers/AdminLoginPage/AdminLoginPage";
import Home from "./containers/Home/Home";
import LoginPage from "./containers/LoginPage/LoginPage";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
import Subscriptions from "./containers/Subscriptions/Subscriptions";
import UserDashboard from "./containers/UserDashboard/UserDashboard";
import SubscriptionForm from '../src/containers/Admin/SubscriptionForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/dashboard" component={UserDashboard} />
        <Route exact path="/subscriptions" component={Subscriptions} />
<<<<<<< HEAD
        <Route exact path="/adminLoginPage" component={AdminLoginPage} />
=======
        <Route exact path="/admin/new-subscription" component={SubscriptionForm} />
>>>>>>> 21f3ad23fef4024bf861dde01f7c3d5c107cb7ce
      </Switch>
    </Router>
  );
}

export default App;
