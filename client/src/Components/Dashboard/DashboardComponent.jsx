import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DasboardOrganizationCard from "./DasboardOrganizationCard";

const styles = {
  root: {
    width: 650,
    marginTop: 100,
    height: 400,
    marginLeft: 150,
    marginRight: 40
  },
  pos1: {
    marginTop: 140
  },
  pos2: {
    marginBottom: 40
  },
  buttonspacing: {
    marginLeft: 195
  },
  org: {
    width: '100%',
    marginTop: 100,
    marginRight: 100,
  },
  comp: {
    width: '100%',
    marginTop: 100,
    marginRight: 100,
  }
};

class DashboardComponent extends Component
{

  renderCards = () => {
    return this.props.data.map(this.renderCardItem);
  };


  renderCardItem = (job, i) => {
    return (
        <DasboardOrganizationCard style={styles.org} data={job}/>
    );
  };

  render () {

    if(this.props.data) {
      return (
          <div style={styles.comp}>
            {this.renderCards()}
          </div>
      )
    }

    return (
        <Card style={styles.root}>
          <Card />
          <CardContent>
            <Typography
                style={styles.pos1}
                variant="h7"
                component="p"
                align="center"
            >
              You haven't applied to any organization yet.
            </Typography>

            <CardActions>
              <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  style={styles.buttonspacing}
              >
                View Organizations
              </Button>
            </CardActions>
          </CardContent>
        </Card>
    );
  }
};

export default DashboardComponent;