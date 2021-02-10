import React, { useState } from "react";


const AdminSubForm = ({ handleFormSubmit }) => {
  const [subscription_name, setSubscription_name] = useState("");
  const [subscription_price1, setSubscription_price1] = useState("");
  const [subscription_price2, setSubscription_price2] = useState("");
  const [subscription_price3, setSubscription_price3] = useState("");
  const [subscription_thumbnail, setSubscription_thumbnail] = useState("");
  const [subscription_category, setSubscription_category] = useState("");



  
  return (
    <div>
      <>
        <form
          className="col s11 offset-m1"
          onSubmit={(e) => {
            handleFormSubmit(e, {
              subscription_name: subscription_name,
              subscription_price: [
                subscription_price1,
                subscription_price2,
                subscription_price3,
              ],
              subscription_thumbnail: subscription_thumbnail,
              subscription_category: subscription_category,
            });
          }}
        >
          <div className="row">
            <div className="input-field col s10">
              <input
                placeholder="Enter new subscription name"
                id="subscription_name"
                type="text"
                value={subscription_name}
                onChange={(e) => {
                  setSubscription_name(e.target.value);
                }}
              />
              <label htmlFor="subscription_name">Subscription Provider</label>
            </div>
            <div className="row">
              <div className="col s9">
                {/* May need to revisit this because price is supposed to be an array */}
                <div className="input-field col s3">
                  <input
                    id="subscription_price1"
                    type="text"
                    value={subscription_price1}
                    onChange={(e) => {
                      setSubscription_price1(e.target.value);
                    }}
                  />
                  <label htmlFor="subscription_price1">Plan Pricing #1</label>
                </div>
                <div className="input-field col s3">
                  <input
                    id="subscription_price2"
                    type="text"
                    value={subscription_price2}
                    onChange={(e) => {
                      setSubscription_price2(e.target.value);
                    }}
                  />
                  <label htmlFor="subscription_price2">Plan Pricing #2</label>
                </div>
                <div className="input-field col s3">
                  <input
                    id="subscription_price3"
                    type="text"
                    value={subscription_price3}
                    onChange={(e) => {
                      setSubscription_price3(e.target.value);
                    }}
                  />
                  <label htmlFor="subscription_price3">Plan Pricing #3</label>
                </div>
              </div>
            </div>
          </div>
          {/* Will need to edit this later to accept a url for when admin wants to add a thumbnail sized logo */}
          <div className="row">
            <div className="input-field col s10">
              <input
                id="subscription_thumbnail"
                type="text"
                value={subscription_thumbnail}
                onChange={(e) => {
                  setSubscription_thumbnail(e.target.value);
                }}
              />
              <label htmlFor="subscription_thumbnail">Subscription Logo</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10">
              <input
                id="subscription_category"
                type="text"
                value={subscription_category}
                onChange={(e) => {
                  setSubscription_category(e.target.value);
                }}
              />
              <label htmlFor="subscription_category">Service Type</label>
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <button className="waves-effect waves-light btn-large">
                <i className="material-icons right">create</i>Add New
                Subscription
              </button>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};

export default AdminSubForm;
