
import { makeStyles, useTheme } from '@material-ui/core/styles';


const EmployeeView=(props)=>{
    return(
        <div  style={styles.contaienr}>
            <h1>This is Employee pase</h1>
           
        </div>
    )
}


const styles={
    contaienr:{
        backgroundColor:'blue',
        color:'yellow',
        flex:1
    }
}

export default EmployeeView;