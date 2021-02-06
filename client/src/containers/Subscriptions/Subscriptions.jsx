import React from 'react';

const Subscriptions = () => {
    return (
<div className="container">    
 <div className="row">
<div> <h1 className="center-align">Add a Subscription</h1>
    <form className="col s12">
    <div className="row">
       
        <div className="input-field col s6">
        <input id="featured"/>
        <label htmlFor= "featured Subscriptions">Featured Subscriptions </label>
  <select className="browser-default">
    <option value="" disabled selected></option>
    <option value="1">Hulu</option>
    <option value="3">Spotify</option>
    <option value="2">Netflix</option>
    <option value="3">Amazon</option>
    <option value="3">Apple Music</option>

  </select>
    <label></label>
  
        </div>

        <div className="row">
       
        <div className="input-field col s6">
        <input id="featured"/>
        <label htmlFor= "featured subscription price">Price</label>
  <select className="browser-default">
    <option value="" disabled selected></option>
    <option value="1">$5.99</option>
    <option value="3">$8.99</option>
    <option value="2">$12.99</option>
    <option value="3">$17.99</option>
    <option value="3">$25.99</option>

  </select>
    <label></label>
  </div>
        </div>
        </div>
      {/* </div> */}
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Name of Subscription" id="subscription" type="text"/>
          <label htmlFor="subscription">Add New Subscription</label>
        </div>
        <div className="input-field col s6">
        <input placeholder="Subscription Price" id="price" type="text"/>
          <label htmlFor="subscription price">Subscription Price</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
        <input placeholder="Subscription Plan" id="plan" type="text"/>
          <label htmlFor="subscription Plan">Subscription Plan</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
        <button className="btn waves-effect waves-light">Add to dashboard
   </button>
        </div>
       </div>
    </form>
    </div>
    </div>
       </div>
       
  );
};

export default Subscriptions;




  

  
