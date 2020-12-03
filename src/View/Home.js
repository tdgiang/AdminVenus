
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Home=(props)=>{
    return(
        <div  style={styles.contaienr}>
             <ul>
        <li>
          <Link to={`/department`}>Components</Link>
        </li>
        <li>
          <Link to={`/employee`}>
            Props v. State
          </Link>
        </li>
      </ul>
            <h1>This is home pagdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>This is home pagdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>This is home pagdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>This is home pagdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>This is home pagdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            <h1>This is home pagdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        </div>
    )
}


const styles={
    contaienr:{
        flex:1,
        marginTop:150
    }
}

export default Home