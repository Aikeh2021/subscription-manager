import React, { useEffect, useState } from "react";

const styles = {
  thead: {
    backgroundColor: "#bdbdbd"
  }
}


const UserDashboard = () => {
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
            <th>Subscriptions</th>
            <th>Current Amount</th>
            <th>Subscription Price Change</th>
            <th>Update Subscription</th>
            <th>Delete Subscription</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Image</td>
            <td>$13.99</td>
            <td>$1.00</td>
            <td><a href="/" className="waves-effect waves-light btn-small"><i className="material-icons left">update</i>UPDATE</a></td>
            <td><a href="/" className="waves-effect waves-light btn-small"><i className="material-icons left">delete</i>DELETE</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default UserDashboard;
