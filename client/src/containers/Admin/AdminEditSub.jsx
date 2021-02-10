import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import AdminEditSubForm from '../../components/AdminSubForms/AdminEditSubForm';

const AdminEditSub = () => {

const history = useHistory();

const handleFormSubmit = (e, subscriptionData, id) => {
  e.preventDefault();
  axios.put(`/api/subscriptions/${id}`, subscriptionData).then((response) => {
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
      <h1 className="center-align">Edit An Existing Subscription</h1>
      <div className="row">
        <br />
        <div>
            <AdminEditSubForm handleFormSubmit={handleFormSubmit}/>
        </div>

      </div>

      </div>

    </div>
  );
};

export default AdminEditSub;