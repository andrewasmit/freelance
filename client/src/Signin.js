import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from "@mui/material";

function Signin({ onLogin, errorData, setErrorData }) {
  const [usernameForm, setUsernameForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: usernameForm,
      password: passwordForm,
    };
    console.log("Before fetch: ", user);
    fetch("/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => onLogin(data));
        navigate('/home')
        setUsernameForm("")
        setPasswordForm("")
        setErrorData([]);
      } else res.json().then((data) => setErrorData([data.error]));
    });
  }


  const errorsToDisplay = errorData.map(error=> {
    return <ul style={{ color: "red" }}>
              <li key={error}>{error}</li>
            </ul>
})

  // Return of JSX
  return (
    <div>
      <h4>This is the sign in page</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={usernameForm}
            onChange={(e) => setUsernameForm(e.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={passwordForm}
            onChange={(e) => setPasswordForm(e.target.value)}
          ></input>
        </label>
        { errorsToDisplay }
        <label>
          <input type="submit" name="submit"></input>
        </label>
      </form>
      <Button variant="outlined" onClick={()=>navigate('/signup')}>Create an account</Button>
    </div>
  );
}

export default Signin;
