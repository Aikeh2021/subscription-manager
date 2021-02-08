import React from "react";

const NewSubscription = () => {
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
                id="sub_name"
                type="text"
              />
              <label htmlFor="sub_name">Subscription Provider</label>
            </div>
            <div className="row">
              <div className="col s9">
                <div className="input-field col s3">
                  <input id="plan1" type="text" />
                  <label htmlFor="plan1">Plan Pricing #1</label>
                </div>
                <div className="input-field col s3">
                  <input id="plan2" type="text" />
                  <label htmlFor="plan2">Plan Pricing #2</label>
                </div>
                <div className="input-field col s3">
                  <input id="plan3" type="text" />
                  <label htmlFor="plan3">Plan Pricing #3</label>
                </div>
              </div>
            </div>
          </div>
          {/* Will need to edit this later to accept a url for when admin wants to add a thumbnail sized logo */}
          <div className="row">
            <div className="input-field col s10">
              <input id="logo" type="text" />
              <label htmlFor="logo">Subscription Logo</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s10">
              <input id="category" type="text" />
              <label htmlFor="category">Service Type</label>
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
