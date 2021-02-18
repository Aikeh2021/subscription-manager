import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
// import M from "materialize-css";


const UserNewSub = () => {
  const [subs, setSubs] = useState([]);
  const [valueState, setValueState] = useState("");
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

  const history = useHistory();

  //Function to submit a subscription to the user's dashboard
  const addSubscription = (e) => {
    e.preventDefault();
    console.log(valueState);
    axios.post("/api/users/subscriptions", {subscriptionId: valueState}).then(() => {
      history.push("/dashboard");
    })

  }
  


  return (
    <div>
      <form onSubmit={addSubscription} className="col s12">
      <label style={{ fontFamily: "Roboto", fontSize: 30, color: "black"}}>
        Select A Subscription To Track
      </label>
      <select className="browser-default" defaultValue={'DEFAULT'} value={valueState} onChange={(e) => {
        const selectedSub=e.target.value;
        setValueState(selectedSub);
      }} >
        <option value="DEFAULT" disabled selected>
          Choose your subscription
        </option>
        {subs.map((sub) => (
          <option
            className="left"
            key={sub._id}
            value={sub._id}
          >
            {sub.subscription_name}--{`$${sub.subscription_price}`}
          </option>
        ))}
      </select>
      {/* Checking to make sure the correct option is being selected and set onChange */}
      {/* {valueState} */}
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        {/* <Link className="col s12 center valign" to="/dashboard"> */}
        <button className="waves-effect waves-light btn-large" style={styles.buttons} type="submit"><i className="material-icons left">add</i>Add to my dashboard</button>
        {/* </Link> */}
      </div>
      </form>
    </div>
  );
};

export default UserNewSub;
