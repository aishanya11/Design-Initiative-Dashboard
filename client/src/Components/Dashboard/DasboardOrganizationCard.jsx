import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Codeuino from "../Image/Codeuino.jpg";

const styles = {
    root: {
        display: 'flex',
        marginBottom: 20,
        marginLeft: 50,
        height: 200
    },
    im: {
        marginLeft: 30,
        marginTop: 30,
        height: 140,
        width: 140
    },
    details: {
        flexDirection: 'column',
    },
    pos1: {
        flex: '1 0 auto',
    },
    pos2: {
        marginTop: 20
    },
    actions: {
        align: 'right'
    }
};

class DasboardOrganizationCard extends Component
{

    render () {
        if(this.props.data) {
            return (
                <Card style={styles.root}>
                    <CardMedia
                        style={styles.im}
                        component="img"
                        alt="org-logo"
                        height="140"
                        src={Codeuino}
                        title="Organisation card"
                    />
                    <div style={styles.details}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                align="Left"
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
                        <CardActions style={styles.actions}>
                            <Button size="small" color="primary">
                                VIEW PROPOSAL
                            </Button>
                            <Button size="small" color="primary">
                                VIEW PROJECT
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            );
        }
        return null;
    }
};

export default DasboardOrganizationCard;