import React from "react";
import API from '../../Utils/Api';
import { useHistory } from "react-router-dom";
import AdminEditSubForm from '../../components/AdminSubForms/AdminEditSubForm';

const AdminEditSub = () => {

const history = useHistory();

const handleFormSubmit = (e, subscriptionData, id) => {
  e.preventDefault();
  API.put(`/subscriptions/${id}`, subscriptionData).then((response) => {
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
      <h1 className="center m12" style={{textAlign:"center", fontFamily: 'Monoton'}}>EDIT A SUBSCRIPTION</h1>
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