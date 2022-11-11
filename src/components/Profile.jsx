import React, { useContext } from "react";
import { Auth } from "../context/Authcontext";
import styles from "../style/Profile.module.css";

const Profile = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    token,
    setToken,
    wrongdetails,
    setWrongDetails,
    ToggleAuth,
    isAuth,
    setisAuth
  } = useContext(Auth);

  return <div className={styles.token}>{token}</div>;
};

export default Profile;
