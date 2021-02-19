import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import API from "../../Utils/Api";

const Dashboard = () => {
  //Defining User's Subscription array on state and It's setState
  const [usersSubs, setUsersSubs] = useState([]);

  // Getting a single user's array of subscriptions from the database:
const getUsersSubs = () => {
  API.get("/users/subscriptions").then((response) => {
    // console.log(response);
    setUsersSubs(response.data);
  });
}

//Calling the getUsersSubs function when the component mounts
  useEffect(() => {
    getUsersSubs();
  }, []);

//Deleting a subscription from a user's array of subscriptions
const deleteUsersSub = (id) => {
  API.delete(`/users/${id}`).then((response) => {
    // console.log(response.data);
    getUsersSubs();
  })
}


  // Elements in component styles
  const styles = {
    thead: {
      backgroundColor: "#DCDCDC",
      fontFamily: "Roboto",
    },
    img: {
      height: "3em",
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
                    <th>Current Price</th>
                    {/* <th>Plan Price Change</th> */}
                    <th>Category</th>
                    {/* <th>Update Subscription</th> */}
                    <th>Delete Subscription</th>
                  </tr>
                </thead>
                {/* Mapping over the usersSubs and creating a row for each subscription in the user's array */}
                <tbody>
                  {usersSubs.map((usersSub) =>(
                    <tr key={usersSub._id}>
                    <td>{usersSub.subscription_name}</td>
                    <td><img src={usersSub.subscription_thumbnail} alt={usersSub.subscription_name} style={styles.img}/></td>
                    <td>{usersSub.subscription_price}</td>
                    <td>{usersSub.subscription_category}</td>
                    <td>
                      <button
                        className="waves-effect waves-light btn-small"
                        style={styles.buttons}
                        onClick={() => {
                          deleteUsersSub(usersSub._id);
                        }}
                      >
                        <i className="material-icons left">delete</i>DELETE
                      </button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Button for user to add new subscription */}
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
