import Container from '@material-ui/core/Container';
import { Typography,TextField  ,Paper,Button} from '@material-ui/core';


const CreateDepartment=(props)=>{
    return(
        <div  style={{flex:1}}>
            <h1>Tạo phòng ban</h1>
            <Paper elevation={2} style={{padding:30,}} >
                <div  style={{flex:1,display:"flex",flexDirection:'row',alignItems: 'center'}}>
                   <div  style={{width:100}}>
                        <Typography variant="body1" >Thêm mới:</Typography>
                    </div>
                    <TextField 
                     label="Tên phòng ban"
                      variant="outlined" 
                      style={{width:400}}
                      />
                </div>
                <div  style={{flex:1,marginTop:20,display:"flex",flexDirection:'row',alignItems: 'center'}}>
                    <div  style={{width:100}}>
                    <Typography variant="body1" >Thêm mới:</Typography>
                    </div>
                    <TextField 
                     label="Tên phòng ban"
                      variant="outlined" 
                      onChange={(val)=>console.log(val)}
                      style={{width:400}}
                      />
                </div>
                <div  style={{flex:1,marginTop:20,display:"flex",flexDirection:'row',alignItems: 'center'}}>
                <div  style={{width:100}}></div>
                <Button variant="contained" color="primary">
                    Tạo
                </Button>
                <Button  style={{marginLeft:30}} variant="contained" color="secondary">
                    Hủy
                </Button>
                </div>

                
            </Paper>

        </div>
        
    )
        
}

export default CreateDepartment;