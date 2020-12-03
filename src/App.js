import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Drawer from './View/Drawer';
import Home from './View/Home';
import Employee from './View/Employee/EmployeeContainer';
import Department from './View/Department/DepartmentContainer';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  container: {
     display: "flex"
  },
  appBar: {
    backgroundColor:'#ffffff',
    marginBottom:50,
    color:'black',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();


  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.container}>
          <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            {open?<IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClose}
              edge="start"
              className={classes.menuButton}
            >
              <ArrowBackIosIcon />
            </IconButton>:<IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>}
            
            <Typography variant="h6" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={open} handleDrawerClose={handleDrawerClose} />
        <Switch>
          <Route exact path="/">
            <Home  />
          </Route>
          <Route   path="/department">
            <Department  />
          </Route>
          <Route  path="/employee">
            <Employee  />
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
