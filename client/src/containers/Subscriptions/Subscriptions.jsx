// import { useState } from "react";
import React, {useState}from 'react';
// import e from "express";
// import { set } from "mongoose";

const Subscriptions = () => {

        const [featured, setFeatured]= useState("");
        const [featuredPrice, setFeaturedPrice]= useState("");
        const [subscription,setSubscription] =useState("");
        const [price,setPrice] =useState("");
        const [plan,setPlan] =useState("");

    return (
<div className="container">    
 <div className="row">
<div> <h1 className="center-align">Add a Subscription</h1> 
    <form className="col s12" >
    <div className="row">
       
        <div className="input-field col s6">
        {/* <input id="featured"/> */}
        <label htmlFor= "featured Subscriptions"></label>
  <select className="browser-default" id="featured" type="" name="featured" value={featured} onChange={(e) =>{
                  setFeatured(e.target.value);
          }}>
    <option value="" disabled selected>Featured Subscriptions</option>
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
        {/* <input id="featured"/> */}
        <label htmlFor= "featured subscription price"></label>
  <select className="browser-default" id="featured price" type="" name="featured price" value={featuredPrice} onChange={(e) =>{
                  setFeaturedPrice(e.target.value);
          }}>
    <option value="" disabled selected>Price</option>
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

                {/* Value comes in from state, a change in the value sets the title on state and triggers a re-render */}
          <input placeholder="" id="subscription" type="text" name="subscription" value={subscription} onChange={(e) =>{
                  setSubscription(e.target.value);
          }}/>
          <label htmlFor="subscription">Add New Subscription</label>
        </div>
        <div className="input-field col s6">
        <input placeholder="" id="price" type="text" name="price" value={price} onChange={(e) =>{
                  setPrice(e.target.value);
          }}/>
          <label htmlFor="subscription price">Subscription Price</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
        <input placeholder="" id="plan" type="text" name="plan" value={plan} onChange={(e) =>{
                  setPlan(e.target.value);
          }}/>
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




  

  
