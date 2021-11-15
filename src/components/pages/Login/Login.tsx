import styles from './Login.module.css';
import {Box, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import Axios from "axios";
import {useHistory} from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    // useEffect(() => {
    //     if (email && password) {
    //         Axios.post(`http://localhost:3001/login`,{
    //             Username: email,
    //             Password: password
    //         }).then((res) => {
    //             console.log("success")
    //         }).catch((e) => {
    //             console.log("error", e);
    //         })
    //     }
    //
    // },[email,password])

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        if (data) {
            // @ts-ignore
            setEmail((data.get('email')).toString());
            // @ts-ignore
            setPassword((data.get('password')).toString());
        }
    }

    //Template
    return (
        <Container className={styles.Signup} maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component='h1' variant='h5'>
                    Sign Up
                </Typography>
                <Box component='form' onSubmit={onSubmit} sx={{ mt:3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField name='email' id='email' label="Email" autoFocus required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name='password' id='password' label="Password" autoFocus required fullWidth />
                        </Grid>
                    </Grid>
                    <Button type='submit' variant='contained' fullWidth sx={{ mt:3, mb:2}}>Continue</Button>
                </Box>
            </Box>
        </Container>
    )};

export default Login;