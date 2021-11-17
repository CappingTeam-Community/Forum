import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Checkbox, Container, CssBaseline, FormControlLabel, FormGroup, Grid, IconButton, Paper, Popover, TextField, Typography } from '@mui/material';
import React, { Dispatch, FC, useEffect, useState } from 'react';
import styles from './SettingsPage.module.css';
import { styled } from '@mui/material/styles';
import Axios from 'axios';
import { UserState } from '../../../App';





function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

type UserProps = {
    userData: any,
    setUserData: Dispatch<UserState>,
    auth: any,
    setAuth: Dispatch<boolean>
}

const SettingsPage: FC<UserProps> = (props): JSX.Element => {
    const [categories, setCategories] = useState<any>([]);
    const [redirect, setRedirect] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(true);



    useEffect(() => {
        Axios.get(`http://localhost:3001/category/select/`)
            .then((res: { data: any; }) => {
                const data = res.data;
                setCategories(data);
            })
    }, []);

    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    function onComplete(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        Axios.post(`http://localhost:3001/settings/insert`, {
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

    function onSelectInterest(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            if (event.currentTarget.labels) {
                let temp = Object.assign({}, props.userData);
                temp.interests = [...temp.interests, event.currentTarget.labels[0].innerText];
                props.setUserData(temp);
            }
        } else {
            if (event.currentTarget.labels) {
                const index = props.userData.interests.indexOf(event.currentTarget.labels[0].innerText);
                let temp = Object.assign({}, props.userData);

                temp.interests.splice(index, 1);
                props.setUserData(temp);
            }
        }
    }

    async function onContinue(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //await authenticate(data)
        //.then(() => {
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
        //})
    }

    //function SettingsPage() {
    //Logic

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    const [firstName, setFName] = React.useState('');

    const firstChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFName(event.target.value);
    };



    const [lastName, setLName] = React.useState('');

    const lastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLName(event.target.value);
    };

    const [userName, setUName] = React.useState('');

    const userNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUName(event.target.value);
    };

    const [newEmail, setEmail] = React.useState('');

    const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const [newpw, setPW] = React.useState('');

    const pwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPW(event.target.value);
    };

    const Input = styled('input')({
        display: 'none',
    });

    //Template
    return (
        <div className={styles.SettingsPage}>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "left", px: 8, m: 2 }}>

                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <Avatar
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                            alt="User Name"
                            src="/broken-image.jpg"
                            {...stringAvatar('User Name')}
                            sx={{ display: 'flex', width: 350, height: 350, m: 4, }}
                        >

                        </Avatar>
                    </IconButton>
                </label>

                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}

                    onClose={handlePopoverClose}

                >
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="outlined" component="span">
                            Upload Image
                        </Button>
                    </label>
                </Popover>


                <Typography variant="h3" component="div" gutterBottom sx={{ py: 20, m: 2, px: 10, justifyContent: 'center' }}>
                    User Settings
                </Typography>

            </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "center", px: 35, m: 2}}>
                <Paper elevation={4} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Grid container columns={1} rowSpacing={1} display = "flex" flexWrap ="wrap">
                        <Grid item xs={6}>
                            <Typography variant="overline" display="block" sx={{ m:1, px: 3, pt: 3, fontWeight: 'bold', fontSize: 16}}>
                                Change Name
                            </Typography>
                        </Grid>


                        <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto'}}>
                        <TextField
                                sx={{ m:1, width: '80ch', alignContent: "center", justifyContent: "center"}}
                            id="firstName"
                            label="First Name"
                            multiline
                            maxRows={1}
                            value={firstName}
                            onChange={firstChange}
                            variant="outlined"
                            />
                            </Grid>

                        <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto' }}>
                        <TextField
                            sx={{m:1, width: '80ch', }}
                            id="lastName"
                            label="Last Name"
                            multiline
                            maxRows={1}
                            value={lastName}
                            onChange={lastChange}
                            variant="outlined"
                            />
                            </Grid>

                        <Grid item xs={6}>
                            <Typography variant="overline" display="block" sx={{ m: 1, px: 3, pt: 8, fontWeight: 'bold', fontSize: 16 }}>
                                Change Username
                            </Typography>
                        </Grid>

                        <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto' }}>
                            <TextField
                                sx={{ m: 1, width: '80ch', }}
                                id="userName"
                                label="Last Name"
                                multiline
                                maxRows={1}
                                value={userName}
                                onChange={userNameChange}
                                variant="outlined"
                            />
                        </Grid>
                
                        <Grid item xs={6} >
                            <Typography variant="overline" display="block" sx={{ m: 1, px: 3, pt: 8, fontWeight: 'bold', fontSize: 16}}>
                            Change email
                            </Typography>
                            </Grid>

                        <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto'}}>
                    <TextField
                        sx={{ m: 1, width: '80ch', }}
                        id="email"
                        label="Old Email"
                        multiline
                        maxRows={1}
                        value={newEmail}
                        onChange={emailChange}
                        variant="outlined"
                            />
                            </Grid>

                        <Grid item xs={6}>
                            <Typography variant="overline" display="block" gutterBottom sx={{ m: 1, px: 3, pt: 8, fontWeight: 'bold', fontSize: 16}}>
                            Change Password
                        </Typography>
                        </Grid>

                        <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto', pb: 5 }}>
                       <TextField
                            sx={{ m: 1, width: '80ch', }}
                            id="password"
                            label="Old Password"
                            multiline
                            maxRows={1}
                            value={newpw}
                            onChange={pwChange}
                            variant="outlined"
                            />
                            </Grid>
                    </Grid>
                </Paper>
                </Box>

            <Container maxWidth='md' sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CssBaseline />
                <Typography component='h1' variant='h5' sx={{ p: 5, fontSize: 30 }}>
                    Choose Interests
                </Typography>
                <FormGroup>
                    <Box component='form' onSubmit={onComplete} sx={{ width: '100%' }}>
                        <Grid container spacing={{ md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {categories.map((category: any, index: number) => {
                                return (
                                    <Grid item md={6} key={index}>
                                        <Paper sx={{ width: '100%', color: 'black', backgroundColor: `rgba(0, 186, 219, 0.5)` }}>
                                            <FormControlLabel control={<Checkbox color='success' onChange={onSelectInterest} />} label={category.CategoryName} sx={{ pl: 2 }} />
                                        </Paper>
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, width: '100%' }}>Confirm Changes</Button>
                    </Box>
                </FormGroup>
            </Container>

        </div>


    )
    //}
};

export default SettingsPage;