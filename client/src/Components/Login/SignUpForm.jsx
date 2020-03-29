import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

const divStyle = {
  width: '500px',
  margin: '25px 400px'
};

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  var responsePost = {};

  function validateForm() {
    return password === confirmpassword && email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/mentee/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, "username": username, "password": password, email }),
    });
    const body = await response.text();
    responsePost = JSON.parse(body);
    if (responsePost.success === true) {
      console.log(responsePost)
      loginHandle(username,password)
        .then(()=>{})
        .catch(err => console.log(err));
    }
    else {
      console.log("error");
    }
  }

  async function loginHandle(username,password ,callback){
    const response = await fetch('/mentee/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"username":username,"password":password}),
    });
    const body = await response.text();
    responsePost = JSON.parse(body);
    if(responsePost.success===true){
      console.log(responsePost)
      // localStorage.setItem("user",JSON.stringify(responsePost.user));
      localStorage.setItem("JWTtoken",responsePost.token);
      callback();
    }
    else{
      console.log("error");
    }
  }

  return (
    <div className="Login" style={divStyle}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl
            autoFocus as="textarea" value={name} rows="1"
            onChange={e => setName(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="username">
          <FormLabel>Username</FormLabel>
          <FormControl as="textarea" value={username} rows="1"
            onChange={e => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmpassword" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={confirmpassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
