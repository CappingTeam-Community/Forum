import { Avatar, Box, Button, IconButton, Paper, Popover, TextField, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

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

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function Settings() {
    //Logic

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    const [newName, setName] = React.useState('');

    const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
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
        <div>
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

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "center", px: 8, py: 5, m: 2 }}>
                <Paper elevation={4}>
                    <Box>
                        <Typography variant="overline" display="block" gutterBottom sx={{ px: 3, py: 2 }}>
                            Change Username
                        </Typography>

                    </Box>


                    <TextField
                        sx={{ m: 2, width: '80ch', }}
                        id="Change Name"
                        label="Old Name"
                        multiline
                        maxRows={1}
                        value={newName}
                        onChange={nameChange}
                        variant="outlined"
                    />

                </Paper>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "center", px: 8, py: 5, m: 2 }}>
                <Paper elevation={4}>

                    <Box>
                        <Typography variant="overline" display="block" gutterBottom sx={{ px: 3, py: 2 }}>
                            Change email
                        </Typography>

                    </Box>

                    <TextField
                        sx={{ m: 2, width: '80ch', }}
                        id="Change Email"
                        label="Old Email"
                        multiline
                        maxRows={1}
                        value={newEmail}
                        onChange={emailChange}
                        variant="outlined"
                    />

                </Paper>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "center", px: 8, py: 5, m: 2 }}>
                <Paper elevation={4}>
                    <Box>
                        <Typography variant="overline" display="block" gutterBottom sx={{ px: 3, py: 2 }}>
                            Change Password
                        </Typography>

                    </Box>
                    <Box>
                        <TextField
                            sx={{ m: 2, width: '80ch', }}
                            id="Change Password"
                            label="Old password"
                            multiline
                            maxRows={1}
                            value={newpw}
                            onChange={pwChange}
                            variant="outlined"
                        />
                    </Box>

                </Paper>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: "center", justifyContent: "center", m: 2 }}>
                <Button
                    sx={{ m: 2, width: "15ch", justifyContent: "left" }}
                    //onClick={sendToDB}
                    variant="contained"
                    color="success"
                >
                    Save Changes
                </Button>

            </Box>
        </div>
    )
};

export default Settings;