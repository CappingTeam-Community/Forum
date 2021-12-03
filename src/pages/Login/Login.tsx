import {Box, Container, CssBaseline, FormGroup, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React, {Dispatch, FC, useState} from "react";
import Axios from "axios";
import {UserState} from "../../App";
import {IconContext} from "react-icons";
import {GiPadlock} from "react-icons/all";

type UserProps = {
    userData: any,
    setUserData: Dispatch<UserState>,
    auth: any,
    setAuth: Dispatch<boolean>
}

const Login: FC<UserProps> = (props): JSX.Element => {
    const [categories, setCategories] = useState<any>([]);
    const [redirect, setRedirect] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(true);
    const [alert, setAlert] = useState(false);


    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log('event',event);
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log('data', data);
        Axios.get(`http://localhost:3001/user/select/email/${data.get('email')}`)
            .then(res => {
                const resData:any = res.data;
                console.log('resData', resData);
            })
    }

    //Template
    return (
        <Container maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Grid item component={Paper} elevation={6} square sx={{backgroundColor:'rgba(255,255,255,.6)'}}>
                    <Box
                        sx={{
                            pt: 4,
                            pb: 3,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <IconContext.Provider value={{size: '25', color: "black"}}>
                            <div>
                                <GiPadlock/>
                            </div>
                        </IconContext.Provider>
                        <Typography component='h1' variant='h5'>
                            Login
                        </Typography>
                        <FormGroup>
                            <Box component='form' onSubmit={onSubmit} sx={{ mt:3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField name='email' id='email' label="Email" autoFocus required fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type='password' name='password' id='password' label="Password" autoFocus required fullWidth />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" sx={{textDecoration:'none'}}>
                                            {"Forgot password?"}
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/signup" variant="body2" sx={{textDecoration:'none'}}>
                                            {"Create an account?"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Button type='submit' variant='contained' fullWidth sx={{ mt:3, mb:2}}>Continue</Button>
                            </Box>
                        </FormGroup>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
};

export default Login;