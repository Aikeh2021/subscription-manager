import React from 'react';

const UserDBGreeting = ({UsersName}) => {
    const styles = {
        h1: {
          textAlign: "center",
        }
      };
    return (
        <div>
            <h1 style={styles.h1}> Subscription Dashboard For: {UsersName}</h1>
        </div>
    );
};

export default UserDBGreeting;