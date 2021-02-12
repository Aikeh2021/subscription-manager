import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// Elements in component styles
const styles = {
  thead: {
    backgroundColor: "#bdbdbd"
  },
  img: {
      height: "2em",
  }
}


const AdminDB = () => {
const [subscriptions, setSubscriptions] = useState([]);

useEffect(() => {
    getSubs();
}, [])

// Function def that triggers the API call to get all subs in the sub in the database
const getSubs = () => {
    axios.get("/api/subscriptions").then((response) => {
        // console.log(response.data);
        setSubscriptions(response.data)
    }).catch((err) => {
        console.log(err);
    }) 
};

// Function def that triggers the API call to delete sub from database
const deleteSub = (id) => {
    console.log("You deleted me :(");
    console.log(id);
    axios.delete(`/api/subscriptions/${id}`).then((response) => {
        // console.log(response.data);
        getSubs();
    }).catch((err) => {
        console.log(err);
    });

};

// Creating the admin dashboard table
  return (
    <>
    <br/>
    <br/>
    <div>
    <div className="container">
    <div className="row">
    <div className="col s12">
    <table>
        <thead style={styles.thead}>
          <tr>
            <th>Subscription Name</th>
            <th>Image</th>
            <th>Plan 1</th>
            <th>Plan 2</th>
            <th>Plan 3</th>
            <th>Plan 4</th>
            <th>Category</th>
            <th>Update Subscription</th>
            <th>Delete Subscription</th>
          </tr>
        </thead>
        <tbody>
            {/* Mapping over the subscriptions in the database and creating a row for them in the adminDB */}
            {subscriptions.map(subscription => (
                <tr key={subscription._id}>
                <td>{subscription.subscription_name}</td>
                <td><img src={subscription.subscription_thumbnail} alt={subscription.subscription_name} style={styles.img} /></td>
                {subscription.subscription_price.map(price => (
                                  <td>{price}</td>
                ))}
                {/* <td>{subscription.subscription_price[0]}</td> */}
                {/* <td>{subscription.subscription_price[1]}</td>
                <td>{subscription.subscription_price[2]}</td>
                <td>{subscription.subscription_price[3]}</td> */}
                <td>{subscription.subscription_category}</td>
                <td><Link to={`/admin/${subscription._id}`}><button className="waves-effect waves-light btn-small"><i className="material-icons left">update</i>UPDATE</button></Link></td>
                <td><button className="waves-effect waves-light btn-small" onClick={() => {deleteSub(subscription._id)}}><i className="material-icons left">delete</i>DELETE</button></td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
    </div>

    {/* Button to add a new subscription to admin dashboard */}
    <div className="row center">
        <div className="col s12">
        <Link to="/admin/new-subscription"><button className="waves-effect waves-light btn-large"><i className="material-icons left">add</i>Add New Subscription</button></Link>
        </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default AdminDB;