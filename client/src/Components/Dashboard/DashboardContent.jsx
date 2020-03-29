import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DashboardImage from "./DashboardImage.jsx";

const styles = {
  root: {
    minWidth: 350,
    marginTop: 100,
    height: 400,
    marginLeft: 170
  },
  pos1: {
    marginTop: 35,
    marginBottom: 40
  },
  pos2: {
    marginBottom: 40
  },
  buttonspacing: {
    marginLeft: 240
  }
};

class DashboardContent extends Component
{
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
    const response = await fetch('/mentee/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    const body = await response.text();
    // console.log(body)
    if(response.ok){
      return body;
    }
    else{
      return "{}";
    }


  }

  render () {
    // console.log(this.state.user)
    if(this.state.user===undefined){
      return (
        <h1>User doesnt exist</h1>
      )
    }
    return (
        <Card style={styles.root} >
          <Card elevation={3} />

          <CardActions>
            <Button size="small" color="primary" style={styles.buttonspacing} >
              Edit
            </Button>
          </CardActions>

          <CardContent>
            <DashboardImage />

            <Typography
                style={styles.pos1}
                variant="h5"
                component="h2"
                align="center"
            >
              {this.state.user.name}
            </Typography>
            <Typography
                style={styles.pos2}
                variant="body2"
                color="textSecondary"
                component="p"
                align="center"
            >
              {this.state.user.email}
            </Typography>
          </CardContent>
        </Card>
    );
  }
};

export default DashboardContent;