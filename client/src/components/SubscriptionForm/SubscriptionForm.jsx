import React, { useState} from 'react';
import ReactDOM from 'react-dom';


const SubscriptionForm = ({handleFormSubmit}) => {
const styles={
  fnt:{
    fontFamily: 'Roboto'
  }
}
    const [featured, setFeatured]= useState("");
        const [featuredPrice, setFeaturedPrice]= useState("");
        const [subscription,setSubscription] =useState("");
        const [price,setPrice] =useState("");
        const [plan,setPlan] =useState("");

        const subscriptions= ["Hulu","Spotify","Netflix","Amazon","Apple Music"];
      const prices =["8.99","12.99","17.99", "25.99"];

         {/* Subscription mapping */}
      function Sub (props) {
        
        return <option>{props.value}</option>;
      }
      function DropSubs(props) {
        const Subscriptions = props.subscriptions;
        return (
          <>
          <select>
            {subscription.map((subscriptions) => 
         <option key={subscription.toString ()}
         value={subscription} />

            )}
          </select>
          </>
            );
      };
      

      // Prices mapping

      function SubPrice(props) {
        
        return <option>{props.value}</option>;
      }
      function DropArrow(props) {
        const Prices = props.prices;
        return (
          <>
          <select>
            {price.map((prices) => 
         <option key={price.toString ()}
         value={price} />

            )}
          </select>
          </>
            );
      };
     
      

      // Removed this.Already in Index.js.
    //   ReactDOM.render(<Subscriptions />, document.getElementById('main-root'))
    //     // <subscriptions subscriptions={subscriptions} />,
        
    // };

  
    return (
        <form className="col s12" style={styles.fnt} onSubmit= {(e)=>  {handleFormSubmit (e, {featured,featuredPrice,subscription,price, plan,
        });
        } } >
        <div className="row">
       
       <div className="input-field col s6">


       {/* <input id="featured"/> */}
       <label htmlFor= "featured Subscriptions"></label>
 <select className="browser-default" id="featured" type="" name="featured" value={featured} onChange={(e) =>{
                 setFeatured(e.target.value);
         }}>
   <option value="" defaultValue>Featured Subscriptions</option>
   <option value="ADD NEW SUBSCRIPTIONS">ADD NEW SUBSCRIPTIONS</option>
  

  { subscriptions.map(s => {
return <option value={s}>{s}</option>
  })};

{/* Mapped Out */}
   {/* <option value="Hulu">Hulu</option>
   <option value="Spotify">Spotify</option>
   <option value="Netflix">Netflix</option>
   <option value="Amazon">Amazon</option>
   <option value="Apple Music">Apple Music</option> */}
   
 </select>
   <label></label>
 
       </div>

       <div className="row">
      
       <div className="input-field col s6">
       {/* <input id="featured"/> */}
       <label htmlFor= "featured subscription price"></label>
 <select className="browser-default" id="featured price" type="" name="featured price" value={featuredPrice} onChange={(e) =>{
                 setFeaturedPrice(e.target.value);
         }}>
   <option value="" defaultValue>Price</option>
   <option value="ADD A CUSTOM PRICE">ADD A CUSTOM PRICE</option>

   {/* Mapped out */}
   {/* <option value="$5.99">5.99</option>
   <option value="$8.99">8.99</option>
   <option value="$12.99">12.99</option>
   <option value="$17.99">17.99</option>
   <option value="$25.99">25.99</option> */}
   { prices.map(s => {
return <option value={s}>{s}</option>
  })};

 </select>
   <label></label>
 </div>
       </div>
       </div>
     {/* </div> */}
     <div className="row">
{/****Add a conditional rendering for the price and subscription if the user doesn't select them *****/}
       {/* conditional rendering for the forms */}
       { featured === "ADD NEW SUBSCRIPTIONS" && (
          <div className="input-field col s6">

          {/* Value comes in from state, a change in the value sets the title on state and triggers a re-render */}
    <input placeholder="" id="subscription" type="text" name="subscription" value={subscription} onChange={(e) =>{
            setSubscription(e.target.value);
    }}/>
    <label htmlFor="subscription">Add New Subscription</label>
  </div>
       )}
       {/* conditional rendering for the forms */}
{ featuredPrice === "ADD A CUSTOM PRICE" && (
<div className="input-field col s6">
       <input placeholder="" id="price" type="text" name="price" value={price} onChange={(e) =>{
                 setPrice(e.target.value);
         }}/>
         <label htmlFor="subscription price">Subscription Price</label>
       </div>
  
)}

     </div>
     <div className="row">
       <div className="input-field col s6">
       <input placeholder="" id="plan" type="text" name="plan" value={plan} onChange={(e) =>{
                 setPlan(e.target.value);
         }}/>
         <label htmlFor="subscription Plan">Subscription Plan</label>
       </div>
     </div>
     <div className="row center align">
        <div className="col s12">
        <button className="btn waves-effect waves-light" style={{borderRadius: 30, backgroundColor: "#008000", fontFamily: 'Roboto'}}>Add to dashboard
   </button>
        </div>
       </div>
    </form>
  
        );

        }  
      
export default SubscriptionForm;