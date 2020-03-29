import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import OrgComponent from "../Organization/OrgComponent.jsx";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles ={
  root: {
    minWidth: 275,
    height: 150
  },
  title: {
    fontSize: 40,
    marginLeft: 50,
    marginTop: 30
  },
  pos: {
    marginBottom: 12,
    marginLeft: 50
  },
  comp: {
    display: "flex",
    flexWrap: 'wrap'
  },
  search: {
    marginLeft: 50,
    marginTop: 40,
    width: "100%",
    flexGrow: 1,
    display: "flex"
  },
  searchIcon: {
    justifyContent: 'center',
    width: 30
  },
  searchBar: {
    justifyContent: 'center',
    width: '100%'
  },
};


class OrganizationPanel extends Component
{

  renderCards = () => {
    return this.props.data.map(this.renderCardItem);
  };


  renderCardItem = (job, i) => {
    return (
        <OrgComponent style={styles.org} data={job}/>
    );
  };

  render () {
    return (
        <div>
          <Card style={styles.root} variant="outlined">
            <CardContent>
              <Typography style={styles.title} component="h2">
                Organizations
              </Typography>
              <Typography style={styles.pos}>
                Find an organization to submit proposal to.
              </Typography>
            </CardContent>
          </Card>
          <div style={styles.search}>
            <div style={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase style={styles.searchBar}
                placeholder="Search for an organization or topic"
            />
          </div>
          <div style={styles.comp}>
            {this.renderCards()}
          </div>
        </div>
    );
  }
};

export default OrganizationPanel;