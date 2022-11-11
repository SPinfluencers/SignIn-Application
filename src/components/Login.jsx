import React, { useContext } from "react";
import { Auth } from "../context/Authcontext";
import styles from "../style/Login.module.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    token,
    setToken,
    wrongdetails,
    setWrongDetails,
    ToggleAuth
  } = useContext(Auth);

  return (
    <div className={styles.container}>
      <label htmlFor="">Email : </label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="enter email..."
      />
      <br />
      <br />
      <label htmlFor="">Password : </label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="enter password..."
      />
      <br />
      <br />
      <button
        onClick={() => {
          ToggleAuth(email, password);
        }}
      >
        Login
      </button>
      {wrongdetails && "Entered wrong details"}
    </div>
  );
};

export default Login;
