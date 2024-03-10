import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows, selectedUser, deleteUser}) => {
    return (
        <TableContainer component={Paper}
        sx={{
            backgroundImage: `url('image3.png')`, // Add this line for background image
            backgroundSize: 'cover', // Adjust background size
            backgroundRepeat: 'no-repeat', // Adjust repetition
            margin:'0px'
        }}
        >
            <Table
            sx={{
                marginLeft:'250px',
                marginTop:'20px',
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell><b>ID</b></TableCell>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Actions</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*if else command. check weather rows count more than 0 */} 
                    {rows.length > 0 ? 
                        rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row" sx={{fontWeight:'bold'}}>{row.id}</TableCell>
                                <TableCell component='th' scope="row" sx={{fontWeight:'bold'}}>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => selectedUser({id: row.id, name: row.name})}
                                    >
                                        Update
                                    </Button>


                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => deleteUser({id: row.id})}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            
                            
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">No Data</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
