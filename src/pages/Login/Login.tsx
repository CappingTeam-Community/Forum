import {Box, Container, CssBaseline, FormGroup, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import {IconContext} from "react-icons";
import {GiPadlock} from "react-icons/all";
import {isAuth, token} from "../../shared/Authentication";

const Login = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        await(token({email,password}));

        if(isAuth()){
            setRedirect(true);
        } else {
            alert('Login Not Authorized.')
        }
    }
    // Use this function instead of <Redirect> to rerender the header as well
    function changeLocation() {
        window.location.href='/';
    }
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
                            <Box sx={{ mt:3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField label="Email" value={email} onChange={event => setEmail(event.target.value)} autoFocus required fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type='password' label="Password" value={password} onChange={event => setPassword(event.target.value)} required fullWidth />
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
                                <Button onClick={handleSubmit} variant='contained' fullWidth sx={{ mt:3, mb:2}}>Continue</Button>
                            </Box>
                        </FormGroup>
                    </Box>
                </Grid>
            </Box>
            {redirect ? changeLocation() : null}
        </Container>
    )
};

export default Login;