import React, { useEffect, useState } from "react";
import axios from 'axios';

const styles = {
  thead: {
    backgroundColor: "#bdbdbd"
  }
}


const AdminDB = () => {


axios.get('/api/subscriptions', (req, res) => {

}).then((response) => {
  console.log(response.data);
}).catch((err) => {
console.log(err)
});


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
          <tr>
            <td>Spotify</td>
            <td>Image</td>
            <td>4.99</td>
            <td>9.99</td>
            <td>12.99</td>
            <td>14.99</td>
            <td>Music Streaming</td>
            <td><button className="waves-effect waves-light btn-small"><i className="material-icons left">update</i>UPDATE</button></td>
            <td><button className="waves-effect waves-light btn-small"><i className="material-icons left">delete</i>DELETE</button></td>
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

export default AdminDB;