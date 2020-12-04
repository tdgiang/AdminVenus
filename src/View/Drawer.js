import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import Avatar from "@material-ui/core/Avatar";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import FlagIcon from "@material-ui/icons/Flag";
import avartar from "../assets/images/avatar.jpg";
import ApartmentIcon from "@material-ui/icons/Apartment";
import PeopleIcon from "@material-ui/icons/People";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/HomeContainer";
import Employee from "./Employee/EmployeeContainer";
import Department from "./Department/DepartmentContainer";
import Report from "./Report/ReportContainer";
import CreateDepartment from "./Department/CreateDepartment";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3c8dbc",

    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 40,
  },
}));

const pages = [
  { id: "1", name: "TRANG CHỦ", link: "/", icon: <HomeIcon /> },
  {
    id: "2",
    name: "Quản LÝ PHÒNG BAN",
    link: "/department",
    icon: <ApartmentIcon />,
  },
  {
    id: "3",
    name: "QUẢN LÝ NHÂN VIÊN",
    link: "/employee",
    icon: <PeopleIcon />,
  },
  { id: "4", name: "THỐNG KÊ", link: "/report", icon: <EqualizerIcon /> },
];

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ backgroundColor: "#3c8dbc" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography variant="h6" noWrap>
              Mini variant drawer
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ListItemIcon>
                <MailIcon fontSize="small" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemIcon>
                <NotificationsActiveIcon
                  fontSize="small"
                  style={{ color: "white" }}
                />
              </ListItemIcon>
              <ListItemIcon>
                <FlagIcon fontSize="small" style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemIcon
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Avatar
                  style={{ marginRight: 10, width: 30, height: 30 }}
                  alt="Remy Sharp"
                  src={avartar}
                />
                <div>
                  <Typography
                    style={{ textAlign: "center", color: "white" }}
                    variant="caption"
                    noWrap
                  >
                    HR Name
                  </Typography>
                </div>
              </ListItemIcon>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div />
          {open ? (
            <h3 style={{ color: "white", textAlign: "center" }}>Admin</h3>
          ) : null}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {pages.map((item, index) => (
            <Link
              key={item.id}
              to={item.link}
              underline="hover"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button key={item.id}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/department">
            <Department />
          </Route>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/createdepartment">
            <CreateDepartment />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
