import {
    Alert, AlertTitle,
    Box,
    Checkbox, Collapse,
    Container,
    CssBaseline,
    Grid, IconButton, Link, Paper, TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import React, {Dispatch, FC, useEffect, useState} from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Redirect } from 'react-router-dom';
import Axios from "axios";
import {UserState} from "../../App";
import {GiPadlock, IoCloseOutline} from "react-icons/all";
import {IconContext} from "react-icons";

type UserProps = {
    userData: any,
    setUserData: Dispatch<UserState>,
    auth: any,
    setAuth: Dispatch<boolean>
}

const Signup: FC<UserProps> = (props): JSX.Element => {
    const [categories, setCategories] = useState<any>([]);
    const [redirect, setRedirect] = useState(false);
    const [alert, setAlert] = useState(false);

    // TODO: Convert this to one state object
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
            .then(res => {
                const data = res.data;
                setCategories(data);
            })
    }, []);

    function onComplete (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        Axios.post(`http://localhost:3001/signup/insert`,{
            FirstName: props.userData.firstName,
            LastName: props.userData.lastName,
            UserName: props.userData.username,
            Password: props.userData.password,
            Email: props.userData.email
        });
        setRedirect(true);
    }
    function onSelectInterest (event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            if (event.currentTarget.labels){
                let temp = Object.assign({}, props.userData);
                temp.interests = [...temp.interests, event.currentTarget.labels[0].innerText];
                props.setUserData(temp);
            }
        } else {
            if (event.currentTarget.labels){
                const index = props.userData.interests.indexOf(event.currentTarget.labels[0].innerText);
                let temp = Object.assign({}, props.userData);

                temp.interests.splice(index,1);
                props.setUserData(temp);
            }
        }
    }
    function handleInput(event: React.ChangeEvent<HTMLInputElement> ) {
        event.preventDefault()
        if (event.currentTarget.id === 'firstName') {
            setFirstName('firstName')
        } else if (event.currentTarget.id === 'lastName') {
            setLastName('lastName')
        } else if (event.currentTarget.id === 'username') {
            setUsername('username')
        } else if (event.currentTarget.id === 'email') {
            setEmail('email')
        } else if (event.currentTarget.id === 'password') {
            setPassword('password')
        }
    }

    async function onContinue (event: any) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        await authenticate(data)
            .then(() => {
                if (props.auth) {
                    let temp = Object.assign({}, props.userData);
                    temp.firstName = firstName
                    temp.lastName = lastName
                    temp.username = username
                    temp.email = email
                    temp.password = password
                    props.setUserData(temp);
                }
            })
    }
    async function authenticate(data:any) {
        Axios.get(`http://localhost:3001/user/select/email/${data.get('email')}`)
            .then(res => {
                const data:any = res.data;
                if (data.length > 0) {
                    setAlert(true);
                    props.setAuth(false)
                } else {
                   props.setAuth(true)
                }
            })
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

    function userPreferences () { return (
        <Container maxWidth='md' sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CssBaseline />
            <Typography component='h1' variant='h5' sx={{p:5, fontSize:30}}>
                Choose Interests
            </Typography>
            <Box component='form' onSubmit={onComplete} sx={{width:'100%'}}>
                <Grid container spacing={{md:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {categories.map((category: any, index: number) => {
                        return (
                            <Grid item md={6} key={index}>
                                <Paper sx={{ width:'100%', color:'black', backgroundColor:`rgba(0, 186, 219, 0.5)`}}>
                                    <FormControlLabel control={<Checkbox color='success' onChange={onSelectInterest} />} label={category.CategoryName}  sx={{ pl:2 }}/>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
                <Button type='submit' variant='contained' sx={{ mt:3, mb:2, width:'100%'}}>Complete Sign Up</Button>
            </Box>
        </Container>
    )}

    const userInfo = () =>  { return (
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
                        <Grid item sx={{display: 'flex'}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={handleInput}
                                sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px', mr:.5}}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                onChange={handleInput}
                                sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px', ml:.5}}
                            />
                        </Grid>
                        <Grid item sx={{width:'100%'}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                onChange={handleInput}
                                sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px'}}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                type={'password'}
                                label="Password"
                                onChange={handleInput}
                                sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px'}}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type={'password'}
                                id="confirmPassword"
                                label="Confirm Password"
                                onChange={handleInput}
                                sx={{bgcolor:'rgba(255,255,255,.8)', borderRadius:'7px'}}
                            />
                        </Grid>
                        <Button
                            fullWidth
                            variant='contained'
                            onClick={onContinue}
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
                                <Link href="#" variant="body2" sx={{textDecoration:'none'}}>
                                    {"Forgot password?"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" sx={{textDecoration:'none'}}>
                                    {"Login"}
                                </Link>
                            </Grid>
                        </Grid>
                </Grid>
            </Box>
        </Container>
    )}

    return (
        <div className="signup">
            {props.auth ? userPreferences(): userInfo()}
            {redirect ? <Redirect to='/category/3'/> : null}
        </div>
    )
}

export default Signup;