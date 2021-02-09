import axios from 'axios';
import AdminSubForm from '../AdminSubForm/AdminSubForm';

const NewSubscription = () => {


const handleFormSubmit = (e, subscriptionData) => {
  e.preventDefault();
  axios.post("/api/subscriptions", subscriptionData).then((response) => {
    console.log(response.data)
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
        <AdminSubForm handleFormSubmit={handleFormSubmit}/>

      </div>

      </div>

    </div>
  );
};

export default NewSubscription;
