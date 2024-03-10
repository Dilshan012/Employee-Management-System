import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({addUser, updateUser, submitted, data, isEdit}) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    /*add user button click kala pasu ema text boxes clear wimata*/
    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted])/*dependency- submitted kiyan value eka false unoth witharak */

    useEffect(() => {
        if (data && data.id && data.id !==0){
        setId(data.id);
        setName(data.name)
        }
    }, [data]);

    return(
        <Grid container spacing={2}
            sx={{
                backgroundColor:'#ffffff',
                marginBottom:'20px',
                marginLeft:'0px',
                paddingLeft:'20px',
                display:'black',
                backgroundImage: `url('image2.png')`, // Add this line for background image
                backgroundSize: 'cover', // Adjust background size
                backgroundRepeat: 'no-repeat', // Adjust repetition
            }}  
        >
            <Grid item xs={12}>
                <Typography 
                    component={'h1'} 
                    sx={{
                        color:'#000000' , 
                        fontWeight:'bold', 
                        fontSize:30, 
                        paddingBottom:5,
                        paddingTop:'40px'
                        }}>
                <u>User Form</u>
                </Typography> 
            </Grid>

            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="id" 
                    sx={{
                        color:'#000000', 
                        marginRight:'20px', 
                        fontSize:'16px', 
                        width:'100px', 
                        display:'block',
                        }}>
                <b>ID</b>
                </Typography>
                
                <Input 
                    type="number" 
                    id="id" 
                    name="id" 
                    sx={{
                        width:'400px'}} 
                        value={id} 
                        onChange={e => setId(e.target.value)} 
                />

            </Grid>
            
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="id" 
                    sx={{
                        color:'#000000', 
                        marginRight:'20px', 
                        fontSize:'16px', 
                        width:'100px', 
                        display:'block',
                    }}>
                <b>Name</b>
                </Typography>
                
                <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    sx={{width:'400px'}} 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />

            </Grid>

            <Button
                sx={{
                    margin:'auto',
                    marginBottom:'30px',
                    backgroundColor:'#00c6e6',
                    color:'#000000',
                    marginLeft:'50px',
                    marginTop:'40px',
                    '&:hover':{
                        opacity:'0.7',
                        backgroundColor:'#00c6e6',
                    }
                }}
                onClick={() => isEdit ? updateUser({id:id, name: name}) : addUser({id:id, name: name})} 
        >
            {
                isEdit ? 'Update' : 'Add' /*isEdit nam Update display we nathnam Add display wee button eke*/
            }
            </Button>
        </Grid>
    );
}

export default UserForm;