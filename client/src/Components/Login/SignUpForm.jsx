import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  function validateForm() {
    return password === confirmpassword && email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl as="textarea" value={name} rows="1"
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
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl as="textarea" value={password}
            onChange={e => setPassword(e.target.value)}
            type="password" />
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
