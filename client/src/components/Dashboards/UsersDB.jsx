import React from "react";

const styles = {
  thead: {
    backgroundColor: "#bdbdbd"
  }
}


const Dashboard = () => {

// FIX ME: Once the routes are working, put this into a useEffect Hook.
// axios.get('/api/subscriptions', (req, res) => {

// }).then((response) => {
//   console.log(response.data);
// }).catch((err) => {
// console.log(err)
// });


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
            <th>Current Amount</th>
            <th>Subscription Price Change</th>
            <th>Update Subscription</th>
            <th>Delete Subscription</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>$13.99</td>
            <td>$1.00</td>
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

export default Dashboard;
