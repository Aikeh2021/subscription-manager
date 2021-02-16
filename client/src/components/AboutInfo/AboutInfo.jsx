import React from "react";

const AboutInfo = () => {
  return (
    <div className="row">
      <p style={{fontSize: 20, font:"Roboto"}}>
        Nowadays many people pay for at least one subscription. They provide us
        with services like meal prep ingredients, music and podcasts, and the TV
        shows and movies we know and love.
      </p>
      <p style={{fontSize: 20, font:"Roboto"}}>
        But no one likes to be surprised by random price increases. Oftentimes
        we only notice after reviewing our bank statement and realizing the
        total is a little less than we expected.
      </p>
      <p style={{fontSize: 20, font:"Roboto"}}>
        So to save you from the mini heart attack you may experience after
        thinking hackers got a hold of your account information, we came up with
        the application Sub Manny!
      </p>
      <p style={{fontSize: 20, font:"Roboto"}}>
        Sub Manny is the website that notifies you when your subscription
        services raise your plan pricing. And with that information you
        hopefully won't be surprised by your next bank statement.
      </p>
    </div>
  );
};

export default AboutInfo;
