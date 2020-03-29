import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BrushIcon from "@material-ui/icons/Brush";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import LoginForm from "./Login/LoginForm.jsx"
import SignUpForm from "./Login/SignUpForm.jsx"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    flexGrow: 1,
    marginLeft: 5
  }
}));

export default function Home() {
const classes = useStyles();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

return (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <BrushIcon />
        <Typography variant="h6" className={classes.title}>
          Codeuino
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="SIGNUP" {...a11yProps(0)} />
          <Tab label="SIGNIN" {...a11yProps(1)} />
        </Tabs>
      </Toolbar>
    </AppBar>
    <TabPanel value={value} index={0}>
      <SignUpForm />
    </TabPanel>
    <TabPanel value={value} index={1}>
      <LoginForm />
    </TabPanel>
  </div>
);
}
