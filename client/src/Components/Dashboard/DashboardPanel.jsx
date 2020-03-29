import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DashboardContent from "./DashboardContent.jsx";
import DashboardComponent from "./DashboardComponent.jsx";

const styles = {
  root: {
    minWidth: 275,
    height: 150
  },
  title: {
    fontSize: 40,
    marginLeft: 50,
    marginTop: 30
  },
  comp: {
    display: "flex"
  }
};

class DashboardPanel extends Component
{
  render () {
    return (
        <div>
          <Card style={styles.root} variant="outlined">
            <CardContent>
              <Typography style={styles.title} component="h2">
                Dashboard
              </Typography>
            </CardContent>
          </Card>
          <div style={styles.comp}>
            <DashboardContent data = {this.props.data}/>
            <DashboardComponent data={this.props.data}/>
          </div>
        </div>
    );
  }
};

export default DashboardPanel;