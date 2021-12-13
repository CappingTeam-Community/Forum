import {
    Box,
    Container,
    CssBaseline,
    Grid, Link, Paper, TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Axios from "axios";
import {GiPadlock} from "react-icons/all";
import {IconContext} from "react-icons";
import Interests from "./Interests";
import {removeToken, token} from "../../shared/Authentication";

const Signup = (): JSX.Element => {
    const [redirect, setRedirect] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const isValid = ():boolean => {
        // check integrity of each input data field
        if (firstName.length > 0 && lastName.length > 0 && username.length > 0 && email.length > 0 && password.length > 0 && confirm.length > 0) {
            if (email.includes('@')) {
                if(password === confirm) {
                    return true
                } else {alert('Passwords do not match'); return false}
            } else {alert('Email format incorrect'); return false}
        } else { alert('Input data incomplete'); return false}
    }

    const handleSubmit = async(event:any) => {
        event.preventDefault();
        if (isValid()) {
            await Axios.post(`http://localhost:3001/user/insert`,{
                FirstName: firstName,
                LastName: lastName,
                UserName: username,
                Password: password,
                Email: email
            }).then(() => { setRedirect(true) });
            removeToken()
            await(token({email, password}));
        }
    }
    return (
        <>
            {redirect ? (<Interests /> ) : (
                <Container>
                    <CssBaseline />
                    <Box sx={{ my:2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Grid container width={'33vw'} component={Paper} elevation={6} square
                              sx={{
                                  backgroundColor:'rgba(255,255,255,.6)',
                                  pt: 4,
                                  pb: 3,
                                  mx: 4,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                              }}>
                            <IconContext.Provider value={{size: '25', color: "black"}}>
                                <div>
                                    <GiPadlock/>
                                </div>
                            </IconContext.Provider>
                            <Typography sx={{fontSize: 25, color: 'black'}}>
                                Sign Up
                            </Typography>
                            <Grid item sx={{display: 'flex', ml:2, mr: 2}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="First Name"
                                    value={firstName}
                                    onChange={event => setFirstName(event.target.value)}
                                    autoFocus
                                    sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px', mr:.5}}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    value={lastName}
                                    onChange={event => setLastName(event.target.value)}
                                    sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px', ml:.5}}
                                />
                            </Grid>
                            <Grid item sx={{width:'90%'}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Username"
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                    sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px'}}
                                />
                            </Grid>
                            <Grid item sx={{width:'90%'}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px'}}
                                />
                            </Grid>
                            <Grid item sx={{width:'90%'}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type={'password'}
                                    label="Password"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px'}}
                                />
                            </Grid>
                            <Grid item sx={{width:'90%'}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type={'password'}
                                    label="Confirm Password"
                                    value={confirm}
                                    onChange={event => setConfirm(event.target.value)}
                                    sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px'}}
                                />
                            </Grid>
                            <Button
                                variant='contained'
                                onClick={handleSubmit}
                                sx={{
                                    width:'90%',
                                    my: 1,
                                    py:1,
                                    '&:hover': {background: 'blue', color: 'white', fontWeight:10}
                                }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs></Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2" sx={{textDecoration:'none', mr:3}}>
                                        {"Have an account?"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                )}
            </>
    )
}
export default Signup;