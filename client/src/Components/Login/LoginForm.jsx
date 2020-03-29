import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";

const divStyle = {
  width: '500px',
  margin: '100px 400px'
};

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit (e) {
    e.preventDefault();
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
      localStorage.setItem("JWTtoken",responsePost.token)
    }
    else{
      console.log("error");
    }
  }

  return (
    <div className="Login" style={divStyle}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl autoFocus as="textarea" value={username} rows="1"
            onChange={e => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
