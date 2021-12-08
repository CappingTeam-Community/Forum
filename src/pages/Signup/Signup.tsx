import {
    Alert, AlertTitle,
    Box,
    Collapse,
    Container,
    CssBaseline,
    Grid, IconButton, Link, Paper, TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Axios from "axios";
import {GiPadlock, IoCloseOutline} from "react-icons/all";
import {IconContext} from "react-icons";
import Interests from "./Interests";
import { token } from "../../shared/Authentication";

const Signup = (props:any): JSX.Element => {
    const [redirect, setRedirect] = useState(false);
    const [alert, setAlert] = useState(false);

    const [firstName, setFirstName] = useState('kevin');
    const [lastName, setLastName] = useState('lynch');
    const [username, setUsername] = useState('klynch');
    const [email, setEmail] = useState('klynch@gmail.com');
    const [password, setPassword] = useState('password');
    const [confirm, setConfirm] = useState('');


    const handleSubmit = async(event:any) => {
        event.preventDefault();
        await Axios.post(`http://localhost:3001/signup/insert`,{
                FirstName: firstName,
                LastName: lastName,
                UserName: username,
                Password: password,
                Email: email
        }).then(res => { setRedirect(true) });

        // Set token
        await(token({email, password}));
    }
    const MyAlert = () => (
        <Collapse in={alert}>
            <Alert
                variant={'outlined'}
                severity={'error'}
                action={
                    <IconContext.Provider value={{color: "black"}}>
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setAlert(false);
                            }}
                        >
                            <IoCloseOutline fontSize="inherit" />
                        </IconButton>
                    </IconContext.Provider>
                }
                sx={{ mb: 2 }}
            >
                <AlertTitle>Error</AlertTitle>
                <strong>Already have account</strong>
            </Alert>
        </Collapse>
    );
    return (
        <>
            {redirect ? (<Interests /> ) : (
                <Container>
                    <CssBaseline />
                    <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <MyAlert/>
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
                                fullWidth
                                variant='contained'
                                onClick={handleSubmit}
                                sx={{
                                    background: 'blue',
                                    my: 1,
                                    py:1,
                                    '&:hover': {background: 'blue', color: 'white', fontWeight:10}
                                }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" sx={{textDecoration:'none', ml:3}}>
                                        {"Forgot password?"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" sx={{textDecoration:'none', mr:3}}>
                                        {"Login"}
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