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
  render () {
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
              Name
            </Typography>
            <Typography
                style={styles.pos2}
                variant="body2"
                color="textSecondary"
                component="p"
                align="center"
            >
              email.sample@gmail.com
            </Typography>
          </CardContent>
        </Card>
    );
  }
};

export default DashboardContent;