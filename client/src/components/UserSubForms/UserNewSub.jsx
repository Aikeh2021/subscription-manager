import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const UserNewSub = () => {
  const [subs, setSubs] = useState([]);
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
    }
  };


  //Axios call to get the subscriptions from the database:
  useEffect(() => {
    getAdminSubs();
  }, []);

  const getAdminSubs = () => {
    axios
      .get("/api/subscriptions")
      .then((response) => {
        console.log(response.data);
        setSubs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form action="" className="col s12">
      <label style={{ fontFamily: "Roboto", fontSize: 30, color: "black"}}>
        Select A Subscription To Track
      </label>
      <select className="browser-default">
        <option value="" disabled selected>
          Choose your subscription
        </option>
        {subs.map((sub) => (
          <option
            data-icon={sub.subscription_thumbnail}
            className="left"
            key={sub._id}
          >
            {sub.subscription_name}--{`$${sub.subscription_price}`}
          </option>
        ))}
      </select>
      <div className="row">
        <Link className="col s12 center valign" to="/dashboard">
        <button class="waves-effect waves-light btn-large" style={styles.buttons}><i class="material-icons left">add</i>Add to my dashboard</button>
        </Link>
      </div>
      </form>
    </div>
  );
};

export default UserNewSub;
