import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  // FIX ME: Once the routes are working, put this into a useEffect Hook.
  axios
    .get("/api/users/populated", (req, res) => {})
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  // Elements in component styles
  const styles = {
    thead: {
      backgroundColor: "#DCDCDC",
      fontFamily: "Roboto",
    },
    img: {
      height: "2em",
    },
    buttons: {
      borderRadius: 30,
      backgroundColor: "#008000",
      fontFamily: "Roboto",
    },
  };

  return (
    <>
      <br />
      <br />
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <table>
                <thead style={styles.thead}>
                  <tr>
                    <th>Subscription Name</th>
                    <th>Logo</th>
                    <th>Current Plan</th>
                    {/* <th>Plan Price Change</th> */}
                    <th>Category</th>
                    {/* <th>Update Subscription</th> */}
                    <th>Delete Subscription</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td style={styles.img}>Image</td>
                    <td>$13.99</td>
                    {/* <td>$1.00</td> */}
                    <td>Music Streaming</td>
                    {/* <td><button className="waves-effect waves-light btn-small" style={styles.buttons}><i className="material-icons left">update</i>UPDATE</button></td> */}
                    <td>
                      <button
                        className="waves-effect waves-light btn-small"
                        style={styles.buttons}
                      >
                        <i className="material-icons left">delete</i>DELETE
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row center valign">
            <Link to="/newsub">
              <button
                className="waves-effect waves-light btn-large"
                style={styles.buttons}
              >
                <i className="material-icons left">add</i>Add New Subscription
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
