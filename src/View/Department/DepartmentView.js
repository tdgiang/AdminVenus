import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Table from './Table';


const DepartmentView=(props)=>{

    return(
        <div  style={{flex:1}}>
            <h2>Quản lý phòng ban</h2>
            <Container>
                <Table />

            </Container>
        </div>
    )
}

export default DepartmentView