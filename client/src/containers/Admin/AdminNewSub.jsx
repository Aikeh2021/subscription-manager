import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import AdminSubForm from '../../components/AdminSubForms/AdminNewSubForm';



const NewSubscription = (props) => {

const history = useHistory();

const handleFormSubmit = (e, subscriptionData) => {
  e.preventDefault();
  axios.post("/api/subscriptions", subscriptionData).then((response) => {
    // console.log(response.data)
    history.push("/admin/dashboard")
  }).catch((err) => {
    console.log(err);
  })

}
  return (
    <div>

      <div className="container">
      <div className="divider"></div>
      <h1 className="center-align">Create A New Subscription</h1>
      <div className="row">
        <br />
        <AdminSubForm handleFormSubmit={handleFormSubmit}/>

      </div>

      </div>

    </div>
  );
};

export default NewSubscription;
