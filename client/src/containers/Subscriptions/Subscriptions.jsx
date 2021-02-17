// import { useState } from "react";

import React from 'react';
import SubscriptionForm from "../../components/SubscriptionForm/SubscriptionForm";
import axios from "axios";
import { useHistory } from 'react-router-dom';
// import e from "express";
// import { set } from "mongoose";

const Subscriptions = () => {

        const history = useHistory();

        // Added custom methods bt preventing default

        const handleFormSubmit=(e, userData) =>{
        e.preventDefault();

        // Adding a conditional statement
        
        let subscription_name;
        if (userData.subscription === "") 
        {
subscription_name=userData.featured
        }
        else {subscription_name = userData.subscription};

        // if input box is empty, use the drop down options
        let subscription_price;
        if (userData.price === "") 
        {
subscription_price=userData.featuredPrice
        }
        else {subscription_price = userData.price};
        const id=localStorage.getItem("currentUserId")
        
// axios post 
// Updated the axios post
        axios.post("/api/users/submit", {subscription_name, id, subscription_plan:userData.plan, subscription_price})
        // Added axios promise
        .then((response)=> {
                console.log(response);
                history.push("/dashboard");
        })
        .catch((err) => {
                console.log(err);
        });
 };
        // Make API call to the backend

    return (
<>
<h1 className="center-align" style={{textAlign:"center", fontFamily: 'Monoton'}}> ADD A SUBSCRIPTION </h1> 
<div className="divider"></div>
<br />

<div className="container"> 
<div style={{paddingTop: 15, paddingBottom: 20, backgroundColor: "green", borderRadius: 30}}></div>   
 <div className="row">
         <div className="col"> 
{/* Added a handle form submit */}
    {/* removed the form */}

    </div>
       </div>
    <div className="row">
            <SubscriptionForm handleFormSubmit={handleFormSubmit}/>
       </div>
      </div>
      </> 
  );
};

export default Subscriptions;




  

  
