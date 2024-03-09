import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>PLZ Login</div>;
  return <div>Email : {user.email} &nbsp;&nbsp; <br /> Password : {user.password}</div>;
};

export default Profile;
