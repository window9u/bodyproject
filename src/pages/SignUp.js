import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault(); //이벤트의 기본동작을 중단
    // 회원가입 API 호출

    // auth
    // .signInWithEmailAndPassword(email, password)
    // .then((user) => {
    //     console.log(user);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
    navigate("/login");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <div>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          name="userEmail"
          value={email}
          placeholder="E.g:"
          id="userEmail"
          onChange={(event) => onChangeHandler(event)}
        />
      </div>
      <div>
        <label htmlFor="userPassword">Password:</label>
        <input
          type="password"
          name="userPassword"
          value={password}
          placeholder="Your Password"
          id="userPassword"
          onChange={(event) => onChangeHandler(event)}
        />
      </div>
      <button
        onClick={(event) => {
          signInWithEmailAndPasswordHandler(event, email, password);
        }}
      >
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
