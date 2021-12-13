import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, FormGroup, Grid, IconButton, Paper, Popover, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Axios from 'axios';
import {getCurrentUser, token} from "../../shared/Authentication";

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


const Settings = (): JSX.Element => {
    const [categories, setCategories] = useState<any>([]);

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
    async function handleSubmit(event: any) {
        event.preventDefault();
        await Axios.post(`http://localhost:3001/user/update/${getCurrentUser().UserID}`, {
            FirstName: firstname,
            LastName: lastname,
            UserName: username,
            Email: email,
            Password: password
        }).then(() => {
            token({email : getCurrentUser().Email, password: getCurrentUser().Password});
        });
        window.location.href='/';
    }

    // TODO: Must remove old from database as well, also make old ones pre-selected
    function handleSelect (event:any) {
        event.preventDefault();
        let data = JSON.parse(event.target.value);
        data = {IDUser:user.UserID, IDCategory:data.CategoryID};
        if (event.target.checked) {
            if (event.currentTarget.labels) {
                let temp = [...interests, data];
                setInterests(temp);
            }
        } else {
            if (event.currentTarget.labels){
                const index = interests.indexOf(data);
                let temp = interests.splice(index,1);
                setInterests(temp);
            }
        }
    }

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const [user, setUser] = useState<any>(getCurrentUser());
    const [firstname, setFirstname] = React.useState<any>(user.FirstName);
    const [lastname, setLastname] = React.useState<any>(user.LastName);
    const [username, setUsername] = React.useState<any>(user.UserName);
    const [email, setEmail] = React.useState<any>(user.Email);
    const [password, setPassword] = React.useState<any>();
    const [interests, setInterests] = React.useState<any>([]);
    const [busy, setBusy] = React.useState(false)

    const Input = styled('input')({
        display: 'none',
    });
    useEffect(() => {
        setUser(getCurrentUser());
        setBusy(true);
        Axios.get(`http://localhost:3001/user-category/select/${user.UserID}`)
            .then((res) => {
                const data = res.data;
                console.log('data', data);
                setInterests(data);
            })
    },[]);
    useEffect(() => {
        setFirstname(user.FirstName);
        setLastname(user.LastName);
        setUsername(user.UserName);
        setEmail(user.Email);
    }, [user]);

    useEffect(() => {
        setBusy(false);
    }, [interests]);
    //Template
    return (
        <div>
            {busy ? null : (
                <>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent:'center', px: 8, m: 2 }}>
                            <label htmlFor="icon-button-file" style={{alignItems:'center', display:'flex'}}>
                                <Input accept="image/*" id="icon-button-file" type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <Avatar
                                        aria-owns={open ? 'mouse-over-popover' : undefined}
                                        aria-haspopup="true"
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                        alt="User Name"
                                        src="/broken-image.jpg"
                                        {...stringAvatar(firstname + " " + lastname)}
                                        sx={{ display: 'flex', width: 150, height: 150}}
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
                        <Typography variant="h3" component="div" gutterBottom sx={{ m: 2, px: 2, display:'flex', alignItems:'center', justifyContent: 'center' }}>
                            Welcome, {firstname}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "center"}}>
                        <Paper elevation={4} sx={{ display: 'flex', flexWrap: 'wrap', width:'60%', my:1}}>
                            <Typography variant={'h4'} component="div" gutterBottom sx={{ pt:4, mx: 'auto', justifyContent: 'center'}}>
                               Update Info
                            </Typography>
                            <Grid container columns={1} rowSpacing={1} display = "flex" flexWrap ="wrap">
                                <Grid item xs={6}>
                                    <Typography variant="overline" display="block" sx={{ mb:1, px: 3, pt: 1, fontWeight: 'bold', fontSize: 16}}>
                                        Change Name
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto'}}>
                                    <TextField
                                        sx={{ m:1, width: '37ch', alignContent: "left", justifyContent: "center"}}
                                        id="firstName"
                                        label="First Name"
                                        multiline
                                        maxRows={1}
                                        value={firstname}
                                        onChange={event => {setFirstname(event.target.value)}}
                                        variant="outlined"
                                    />
                                     <TextField
                                        sx={{m:1, width: '37ch', alignContent: "right", justifyContent: "center"}}
                                        id="lastName"
                                        label="Last Name"
                                        multiline
                                        maxRows={1}
                                        value={lastname}
                                        onChange={event => {setLastname(event.target.value)}}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="overline" display="block" sx={{ m: 0, px: 3, pt: 3, fontWeight: 'bold', fontSize: 16 }}>
                                        Change Username
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto' }}>
                                    <TextField
                                        sx={{ m: 1, width: '76ch', }}
                                        id="userName"
                                        label="UserName"
                                        multiline
                                        maxRows={1}
                                        value={username}
                                        onChange={event => {setUsername(event.target.value)}}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6} >
                                    <Typography variant="overline" display="block" sx={{ m: 0, px: 3, pt: 3, fontWeight: 'bold', fontSize: 16}}>
                                        Change email
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto'}}>
                                    <TextField
                                        sx={{ m: 1, width: '76ch', }}
                                        id="email"
                                        label="New Email"
                                        multiline
                                        maxRows={1}
                                        value={email}
                                        onChange={event => {setEmail(event.target.value)}}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="overline" display="block" gutterBottom sx={{ m: 0, px: 3, pt: 3, fontWeight: 'bold', fontSize: 16}}>
                                        Change Password
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ justifyContent: "center", alignContent: "center", mx: 'auto', pb: 5 }}>
                                    <TextField
                                        sx={{ m: 1, width: '76ch', }}
                                        id="password"
                                        label="Change Password"
                                        multiline
                                        maxRows={1}
                                        value={password}
                                        onChange={event => {setPassword(event.target.value)}}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={4} sx={{ mt:2, width:'60%', display: 'flex', flexWrap: 'wrap' }}>
                            <Container maxWidth='md' sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <CssBaseline />
                                    <Typography  variant='h4' sx={{py:3}}>
                                        Update Interests
                                    </Typography>
                                    <FormGroup>
                                        <Box sx={{ width: '100%', pb:3 }}>
                                            <Grid container spacing={{ md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                                {categories.map((category: any, index: number) => {
                                                    return (
                                                        <Grid item md={6} key={index}>
                                                            <Paper sx={{ width: '100%', color: 'black', backgroundColor: `rgba(0, 186, 219, 0.5)` }}>
                                                                <FormControlLabel control={
                                                                    <Checkbox color='success'
                                                                              onChange={handleSelect}
                                                                              value={JSON.stringify(category)}
                                                                    />} label={category.CategoryName} sx={{ pl: 2 }} />
                                                            </Paper>
                                                        </Grid>
                                                    );
                                                })}
                                            </Grid>
                                        </Box>
                                    </FormGroup>
                            </Container>
                        </Paper>
                        <Button onClick={handleSubmit} variant='contained' sx={{ py:1, my:3, width:'45%' }}>Submit Changes</Button>
                    </Box>
                </>
            )}
        </div>
    )
};

export default Settings;