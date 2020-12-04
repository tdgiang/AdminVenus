import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";

const HomeView = (props) => {
  return (
    <div styles={{ flexGrow: 1 }}>
      <Header />
    </div>
  );
};

export default HomeView;
