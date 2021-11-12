import styles from './Signup.module.css';
import {
    Alert, AlertTitle,
    Box,
    Checkbox, Collapse,
    Container,
    CssBaseline,
    FormGroup,
    Grid, IconButton, Link, Paper,
    TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import React, {Dispatch, FC, useEffect, useState} from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Redirect } from 'react-router-dom';
import Axios from "axios";
import {UserState} from "../../../App";
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
    const [showUserInfo, setShowUserInfo] = useState(true);
    const [alert, setAlert] = useState(false);


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
        }).then(() => {
            console.log("Inserted")
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
    async function onContinue (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await authenticate(data)
            .then(() => {
                if (props.auth) {
                    let temp = Object.assign({}, props.userData);
                    temp.firstName = data.get('firstName');
                    temp.lastName = data.get('lastName');
                    temp.username = data.get('username');
                    temp.email = data.get('email');
                    temp.password = data.get('password');
                    props.setUserData(temp);
                    setShowUserInfo(false);
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
            <FormGroup>
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
            </FormGroup>
        </Container>
    )}

    function userInfo () { return (
        <Container className={styles.Signup} maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <MyAlert/>
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
                            Sign Up
                        </Typography>
                        <Box component='form' onSubmit={onContinue} sx={{ mt:3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField name='firstName' id='firstName' label="First Name" autoFocus required fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField name='lastName' id='lastName' label="Last Name" autoFocus required fullWidth />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField name='username' id='username' label="Username" autoFocus required fullWidth />
                                </Grid>
                                <Grid item xs={12}>
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
                                    <Link href="/login" variant="body2" sx={{textDecoration:'none'}}>
                                        {"Already Have Account?"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Button type='submit' variant='contained' fullWidth sx={{ mt:3, mb:2}}>Continue</Button>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )}

    //Template
    return (
        <div className="signup">
            {props.auth ? userPreferences(): userInfo()}
            {redirect ? <Redirect to='/category/3'/> : null}
        </div>
    )
}

export default Signup;