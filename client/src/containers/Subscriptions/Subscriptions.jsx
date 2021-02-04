import React from 'react';

const Subscriptions = () => {
    return (
      <div>
<div className="container">
        <h5> Please select a Subscription </h5>
<div class="row">
<label></label>
<select class="browser-default" enabled>
<option value="enabled" enabled value></option>
<option value="1">Hulu</option>
<option value="2">Netflix</option>
<option value="3">Amazon</option>
<option value="3">Apple music</option>
</select>
</div>
</div>
<div className="container">
        <h5> Please select a monthly plan </h5>
<div class="row">
<label></label>
<select class="browser-default" enabled>
<option value="enabled" enabled value>Basic</option>
<option value="1">$5:99</option>
<option value="2">$8.99</option>
<option value="3">$12.99</option>

</select>
</div>
</div>

<div className="container">
        <h5>  </h5>
<div class="row">
<label></label>
<select class="browser-default" enabled>
<option value="enabled" enabled value>Standard</option>
<option value="1">$5:99</option>
<option value="2">$8.99</option>
<option value="3">$13.99</option>

</select>
</div>
</div>


<div className="container">
        <h5> </h5>
<div class="row">
<label></label>
<select class="browser-default" enabled>
<option value="enabled" enabled value>Premium</option>
<option value="1">$11.99</option>
<option value="2">$17.99</option>
<option value="3">$25.99</option>

</select>


</div>

</div>


      </div>

      
  );
};

export default Subscriptions;




  

  
