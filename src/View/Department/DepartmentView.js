import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from './Table';
 

import {
    Link
  } from "react-router-dom";
const DepartmentView=(props)=>{

    return(
        <div  style={{flex:1}}>
            <div    style={{
                display: 'flex',
                flexDirection:'row',justifyContent: 'space-between',
                alignItems: 'center'}} 
                
                >
                   
                <h2>Quản lý phòng ban</h2>
               
                <Link
                    underline='none'
                    to="/createdepartment"
                    style={{color:'white',textDecoration:'none',backgroundColor:'rgb(60, 141, 188)',padding:5,borderRadius:5}}
                >THÊM MỚI</Link>
            </div>
            <Container>
                <Table />

            </Container>
        </div>
    )
}

export default DepartmentView