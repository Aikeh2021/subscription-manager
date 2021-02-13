import React from 'react';

const UserDBGreeting = ({UsersName}) => {

    return (
        <div>
            <h1 style={{textAlign: "center", fontFamily: "Monoton"}}> Subscription Dashboard For: {UsersName}</h1>
        </div>
    );
};

export default UserDBGreeting;