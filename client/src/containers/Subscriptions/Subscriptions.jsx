// import { useState } from "react";

import React from 'react';
import SubscriptionForm from "../../components/SubscriptionForm/SubscriptionForm";
import axios from "axios";
// import e from "express";
// import { set } from "mongoose";

const Subscriptions = () => {

        // Added custom methods bt preventing default

        const handleFormSubmit=(e, subscriptionsData) =>{
        e.preventDefault();
// axios post 
        axios.post("api/subscriptions", subscriptionsData)
        // Added axios promise
        .then((response)=> {
                console.log(response.data);
        })
        .catch((err) => {
                console.log(err);
        });
 };
        // Make API call to the backend

    return (
<div className="container">    
 <div className="row">
         <div className="col"> 
<h1 className="center-align"> Add a Subscription </h1> 
{/* Added a handle form submit */}
    {/* removed the form */}

    </div>
       </div>
    <div className="row">
            <SubscriptionForm handleFormSubmit={handleFormSubmit}/>
       </div>
      </div> 
  );
};

export default Subscriptions;




  

  
