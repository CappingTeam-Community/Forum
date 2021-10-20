import styles from './Signup.module.css';
import {
    Box,
    Checkbox,
    Container,
    CssBaseline,
    FormGroup,
    Grid, Paper,
    TextField,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Redirect } from 'react-router-dom';

type MyState = {
    user: {
        firstName: any,
        lastName: any,
        username: any,
        email: any,
        password: any,
        interests: Array<any>
    },
    showUserInfo: any,
    redirectToLogin: any
}

class Signup extends React.Component<{} , MyState > {
    private testCategoryList: string[];
    
    constructor(props:any) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                interests: []
            },
            showUserInfo: true,
            redirectToLogin: false
        }
        /* TODO: Get categories from database */
        this.testCategoryList = ["Marvel", "Olympics", "Cars", "Politics", "Soccer", "Football", "Technology", "Fashion"];

        this.onContinue = this.onContinue.bind(this);
        this.onSelectInterest = this.onSelectInterest.bind(this);
        this.onComplete = this.onComplete.bind(this);
    } 
    private onComplete (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // TODO: @Devin make post request to database.

        this.setState({ redirectToLogin: true })
    }

    // TODO: Fix the @ts-ignores
    private onSelectInterest (event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            // If checked, add to interest list
           // @ts-ignore
            this.state.user.interests.push(event.currentTarget.labels[0].innerText)
        } else {
            // If unchecked, remove from interest list
            // @ts-ignore
            var index = this.state.user.interests.indexOf(event.currentTarget.labels[0].innerText);
            this.state.user.interests.splice(index,1);
        }
    }
    private onContinue (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        this.setState({
            user: {
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                username: data.get('username'),
                email: data.get('email'),
                password: data.get('password'),
                interests: []
            },
            showUserInfo: false
        });
    }

    private userPreferences () { return (
        <Container maxWidth='md' sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CssBaseline />
            <Typography component='h1' variant='h5' sx={{p:5, fontSize:30}}>
                Choose Interests
            </Typography>
            <FormGroup>
                <Box component='form' onSubmit={this.onComplete} sx={{width:'100%'}}>
                    <Grid container spacing={{md:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                        { this.testCategoryList.map((category: any, index: number) => {
                            return (
                                <Grid item md={6} key={index}>
                                    <Paper sx={{ width:'100%', backgroundColor:'#CBE7F3'}}>
                                        <FormControlLabel control={<Checkbox onChange={this.onSelectInterest} />} label={category}  sx={{ pl:2 }}/>
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

    private userInfo () { return (
        <Container className={styles.Signup} maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component='h1' variant='h5'>
                    Sign Up
                </Typography>
                <Box component='form' onSubmit={this.onContinue} sx={{ mt:3 }}>
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
                            <TextField name='password' id='password' label="Password" autoFocus required fullWidth />
                        </Grid>
                    </Grid>
                    <Button type='submit' variant='contained' fullWidth sx={{ mt:3, mb:2}}>Continue</Button>
                </Box>
            </Box>
        </Container>
    )}

    //Template
    render() { return (
        <div className="signup">
            {this.state.showUserInfo ? this.userInfo() : this.userPreferences()}
            {this.state.redirectToLogin ? <Redirect to='/'/> : null}
        </div>
    )}
}

export default Signup;