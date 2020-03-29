import React, { Component, Fragment } from "react";

import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";

export default class extends Component {

  state={
    user:{}
  };

  componentDidMount(){
    this.aunthenticateUser()
      .then(res => this.setState({user:JSON.parse(res).user}))
      .catch(err=>console.log(err))
  }

  aunthenticateUser = async() =>{
    let token = localStorage.getItem('JWTtoken');
    console.log(token);
    const response = await fetch('/mentee/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    const status = response.status;
    const body = await response.text();
    if(status===200)
      return body;

  }

  render() {
    if(this.state.user==={}){
      return (
        <Fragment>
          <Header />
        </Fragment>
      );
    }
    else{
      return (
        <Fragment>
          <Home/>
        </Fragment>
      );
    }
  }
}
