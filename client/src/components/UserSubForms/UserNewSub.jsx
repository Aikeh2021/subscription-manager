import React, { useEffect, useState } from "react";
import axios from "axios";

const UserNewSub = () => {
    const [subscriptions, setSubscriptions] = useState([]);

  //Axios call to get the subscriptions from the database:
    useEffect(() => {
      getAdminSubs();
    }, []);

    const getAdminSubs = () => {
      axios
        .get("/api/subscriptions")
        .then((response) => {
          console.log(response.data);
          setSubscriptions(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        {subscriptions.map(subscription => 
        <div className="col s3">
          <div className="card">
            <div className="card-image">
              <img
                src={subscription.subscription_thumbnail}
                alt={subscription.subscription_name}
              />
              <button className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </button>
            </div>
            <div className="card-content">
              <h5>{subscription.subscription_name}</h5>
              <p>Price: {`$${subscription.subscription_price}`}/month</p>
              <p>Type: {subscription.subscription_category}</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default UserNewSub;
