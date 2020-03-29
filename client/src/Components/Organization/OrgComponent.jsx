import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Codeuino from "../Image/Codeuino.jpg";

const styles = {
  root: {
    maxWidth: 345,
    marginTop: 50,
    marginLeft: 50,
    height: 350
  },
  large: {
    marginLeft: 235
  },
  im: {
    marginLeft: 140,
    marginTop: 20,
    height: 70,
    width: 70
  },
  pos1: {
    marginTop: 25
  },
  pos2: {
    marginTop: 50
  }
};

class OrgComponent extends Component
{

  render () {
    if(this.props.data) {
      return (
          <Card style={styles.root}>
            <CardActionArea>
              <CardMedia
                  style={styles.im}
                  component="img"
                  alt="org-logo"
                  height="140"
                  src={Codeuino}
                  title="Organisation card"
              />
              <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                    style={styles.pos1}
                >
                  {this.props.data.OrgName}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                    style={styles.pos2}
                >
                  {this.props.data.Description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" style={styles.large}>
                See more
              </Button>
            </CardActions>
          </Card>
      );
    }
    return null;
  }
};

export default OrgComponent;
