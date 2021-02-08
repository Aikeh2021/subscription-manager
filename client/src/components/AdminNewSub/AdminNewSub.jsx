import React, { useState } from "react";

const NewSubscription = () => {

const [subscription_name, setSubscription_name] = useState ("");
const [subscription_price1, setSubscription_price1] = useState ("");
const [subscription_price2, setSubscription_price2] = useState ("");
const [subscription_price3, setSubscription_price3] = useState ("");
const [subscription_thumbnail, setSubscription_thumbnail] = useState ("");
const [subscription_category, setSubscription_category] = useState ("");

  return (
    <div>

      <div className="container">
      <div className="divider"></div>
      <h1 className="center-align">Create A New Subscription</h1>
      <div className="row">
        <form className="col s11 offset-m1">
          <div className="row">
            <div className="input-field col s10">
              <input
                placeholder="Enter new subscription name"
                id="subscription_name"
                type="text"
              />
              <label htmlFor="subscription_name">Subscription Provider</label>
            </div>
            <div className="row">
              <div className="col s9">
                <div className="input-field col s3">
                  <input id="subscription_price1" type="text" />
                  <label htmlFor="subscription_price1">Plan Pricing #1</label>
                </div>
                <div className="input-field col s3">
                  <input id="subscription_price2" type="text" />
                  <label htmlFor="subscription_price2">Plan Pricing #2</label>
                </div>
                <div className="input-field col s3">
                  <input id="subscription_price3" type="text" />
                  <label htmlFor="subscription_price3">Plan Pricing #3</label>
                </div>
              </div>
            </div>
          </div>
          {/* Will need to edit this later to accept a url for when admin wants to add a thumbnail sized logo */}
          <div className="row">
            <div className="input-field col s10">
              <input id="subscription_thumbnail" type="text" />
              <label htmlFor="subscription_thumbnail">Subscription Logo</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10">
              <input id="subscription_category" type="text" />
              <label htmlFor="subscription_category">Service Type</label>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
            <a class="waves-effect waves-light btn-large"><i className="material-icons right">create</i>Add New Subscription</a>

            </div>
          </div>
        </form>
      </div>
      </div>

    </div>
  );
};

export default NewSubscription;
