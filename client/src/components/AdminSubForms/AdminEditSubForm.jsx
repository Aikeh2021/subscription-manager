import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AdminEditSubForm = ({ handleFormSubmit }) => {


const [subscription_name, setSubscription_name] = useState("");
const [subscription_price, setSubscription_price] = useState("");
const [subscription_thumbnail, setSubscription_thumbnail] = useState("");
const [subscription_category, setSubscription_category] = useState("");


const { id } = useParams();

useEffect(() => {
    console.log(id)
    if(id){
        axios.get(`/api/subscriptions/${id}`).then((response) => {
            console.log(response.data);
            setSubscription_name(response.data.subscription_name);
            setSubscription_price(response.data.subscription_price);
            setSubscription_thumbnail(response.data.subscription_thumbnail);
            setSubscription_category(response.data.subscription_category);
        }).catch((err) => {
            console.log(err);
        });
    }
}, [id]);

return (
  <div>
    <>
    <form
          className="col s11 offset-m1"
          onSubmit={(e) => {
            handleFormSubmit(e, {
              subscription_name: subscription_name,
              subscription_price: 
                subscription_price,
              subscription_thumbnail: subscription_thumbnail,
              subscription_category: subscription_category,
            }, id);
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
            <div className="col s10">
              <div className="input-field col s5">
                <input
                  id="subscription_price"
                  type="text"
                  value={subscription_price}
                  onChange={(e) => {
                    setSubscription_price(e.target.value);
                  }}
                />
                <label htmlFor="subscription_price">Plan Pricing #1</label>
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
              <i className="material-icons right">update</i>Update
              Subscription
            </button>
          </div>
        </div>
      </form>
    </>
  </div>
);

};


export default AdminEditSubForm;