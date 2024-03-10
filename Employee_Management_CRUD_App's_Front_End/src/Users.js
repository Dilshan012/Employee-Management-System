import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import React from "react";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setsubmitted] = useState(false);
    const [selectedUser, setSelectedUser] =  useState({});
    const [isEdit, setIsEdit] = useState(false); 

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () =>{
        Axios.get(process.env.REACT_APP_ENDPOINT + '/api/users')
            .then(response => {
                setUsers (response.data.response || []);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    const addUser = (data) => {
        setsubmitted(true);
        const payload = {
            id: data.id,
            name: data.name,
        };
        Axios.post(process.env.REACT_APP_ENDPOINT + '/api/createuser', payload)
            .then(() => {
                getUsers();
                setsubmitted(false);
                setIsEdit(false); // Correcting the function name
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    };
    
    const updateUser = (data) => {
        setsubmitted(true);
    
        const payload = {
            id: data.id,
            name: data.name,
        };
        Axios.post(process.env.REACT_APP_ENDPOINT + '/api/updateuser', payload)
            .then(() => {
                getUsers();
                setsubmitted(false);
                setIsEdit(false); // Correcting the function name
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    };

    
    const deleteUser = (data) => {    
        Axios.post(process.env.REACT_APP_ENDPOINT + '/api/deleteuser', data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    };


    return(
        <Box
        sx={{
            width:'calc(100% - 100px)',
            margin:'auto',
            marginTop: '0px',

        }}
        >
            <UserForm
                addUser={addUser}
                updateUser = {updateUser}
                submitted = {submitted}
                data = {selectedUser}
                isEdit = {isEdit}
            />
            <UsersTable 
                rows={users}
                selectedUser = {data =>{
                    setSelectedUser(data);
                    setIsEdit(true);
                }}

            deleteUser={data => window.confirm('You are about to delete a user. Are you sure?') && deleteUser(data)}
            />
        </Box>
    );
};

export default Users;