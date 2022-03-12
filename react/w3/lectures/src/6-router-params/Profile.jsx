import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1>{props.match.params.userName}'s Profile</h1>
      {/* <p>{props.name}</p> */}
    </div>
  );
};

export default Profile;
