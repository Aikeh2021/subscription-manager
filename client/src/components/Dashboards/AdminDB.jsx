import React, { useEffect, useState } from "react";
import axios from 'axios';


const styles = {
  thead: {
    backgroundColor: "#bdbdbd"
  },
  img: {
      height: "2em",
      width: ""
  }
}


const AdminDB = () => {
const [subscriptions, setSubscriptions] = useState([]);

useEffect(() => {
    axios.get("/api/subscriptions").then((response) => {
        console.log(response.data);
        setSubscriptions(response.data)
    }).catch((err) => {
        console.log(err);
    }) 
}, [])

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
            {subscriptions.map(subscription => (
                <tr key={subscription._id}>
                <td>{subscription.subscription_name}</td>
                <td><img src={subscription.subscription_thumbnail} alt={subscription.subscription_name} style={styles.img} /></td>
                {/* May need to ask about how to do a for loop here to create a td for each plan in the price array */}
                <td>{subscription.subscription_price[0]}</td>
                <td>{subscription.subscription_price[1]}</td>
                <td>{subscription.subscription_price[2]}</td>
                <td>{subscription.subscription_price[3]}</td>
                <td>{subscription.subscription_category}</td>
                <td><button className="waves-effect waves-light btn-small"><i className="material-icons left">update</i>UPDATE</button></td>
                <td><button className="waves-effect waves-light btn-small"><i className="material-icons left">delete</i>DELETE</button></td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
    </div>
    <div className="row center">
        <div className="col s12">
        <button className="waves-effect waves-light btn-large"><i className="material-icons left">add</i>Add New Subscription</button>
        </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default AdminDB;