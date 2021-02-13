import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import AdminNewSubForm from '../../components/AdminSubForms/AdminNewSubForm';



const NewSubscription = () => {

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
      <h1 className="center m12" style={{textAlign:"center", fontFamily: 'Monoton'}}>CREATE A NEW SUBSCRIPTION</h1>
      <div className="row">
        <br />
        <AdminNewSubForm handleFormSubmit={handleFormSubmit}/>

      </div>

      </div>

    </div>
  );
};

export default NewSubscription;
