import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import WidgetContainer from "./WidgetContainer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TestWidget from '../widgets/TestWidget';

const drawerWidth = 240;
let widgets = [{id:'test_widget', widget: TestWidget}];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: "#191919",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36,
    position: "absolute"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  },
  title: {
    fontFamily: "Segoe Script",
    width: theme.spacing(30),
    marginRight: theme.spacing(15)
  },
  drawerButtonList: {
    backgroundColor: "#282828"
  },
  widgetButton: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    fontSize: 12
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    switch(newValue){
      case 0:
        widgets = [{id:'test_widget', widget: TestWidget}];
        break;
      default:
        widgets = [{id:'test_widget', widget: TestWidget}];
        break;
    }
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Music Manager
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="navigation tabs"
            centered
          >
            <Tab label="Current Set" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <WidgetContainer widgets={widgets}/>
      </main>
    </div>
  );
};

export default NavBar;
