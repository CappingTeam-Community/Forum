import styles from './Signup.module.css';
import {Box, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";

function Signup() {
    //Logic
    const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("Signup-onsubmit-data", data);
        console.log("Signup-onsubmit-data.email", data.get('email'));
    }

    //Template

    return (
        <Container className={styles.Signup} maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component='h1' variant='h5'>
                    Sign Up
                </Typography>
                <Box component='form' noValidate onSubmit={onsubmit} sx={{ mt:3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField name='firstName' id='firstName' label="First Name" autoFocus required fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name='lastName' id='lastName' label="Last Name" autoFocus required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name='email' id='email' label="Email" autoFocus required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name='password' id='password' label="Password" autoFocus required fullWidth />
                        </Grid>
                    </Grid>
                    <Button type='submit' variant='contained' fullWidth sx={{ mt:3, mb:2}}>Sign Up</Button>
                </Box>
            </Box>
        </Container>
    )};

export default Signup;