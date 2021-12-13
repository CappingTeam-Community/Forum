import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    MenuItem,
    Menu,
    styled,
    Button,
    ButtonProps
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";
import {common} from '@mui/material/colors'
import {FC} from "react";
import {IconContext} from "react-icons";
import {IoCreateOutline, RiCompassDiscoverLine} from "react-icons/all";

import {removeToken, isAuth} from "../Authentication";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'rgb(255,255,255)',
    backgroundColor: "#1976d2",
    textDecoration: 'none'
}));

type Props = {
    setSearch: any
}

const Header: FC<Props> = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'navBar';

    function handleLogout() {
        removeToken()
        accountMenuClose()
        window.location.href = '/';
    }
    function handleRedirect(path:string) {
        window.location.href = path;
    }
    const accountMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const accountMenuClose = () => {
        setAnchorEl(null);
    };
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            open={isMenuOpen}
            onClose={accountMenuClose}
        >
            {isAuth() ? (
                <>
                    <MenuItem><Button href={'/settings'}>Settings</Button></MenuItem>
                    <MenuItem><Button onClick={handleLogout}>Logout</Button></MenuItem>
                </>
            ) : (
                <>
                    <MenuItem><Button href={'/login'}>Login</Button></MenuItem>
                    <MenuItem><Button href={'/signup'}>Signup</Button></MenuItem>
                </>
            )
            }
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: "#212121", position: "static" }}>
                <Toolbar>
                    <NavLink exact to='/'>
                        <IconButton size="large" edge="start" sx={{ color: common["white"], ml: 1, mr: 1 }}>
                            <HomeIcon style={{fontSize: 40}}/>
                        </IconButton>
                    </NavLink>

                    <Typography variant="h3" noWrap component="div" sx={{ mt: 4, mb: 3, ml: 2, display: { xs: 'none', sm: 'block' } }}>
                        Community
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <ColorButton onClick={() => {
                        handleRedirect('/discover')
                    }}
                                 sx={{mr:2}} variant="contained">
                        <IconContext.Provider value={{ size: '25', color: "white"}}>
                            <Box sx={{marginTop:.5}}>
                                <RiCompassDiscoverLine/>
                            </Box>
                        </IconContext.Provider>
                        <Typography sx={{ml:.5}}>Discover</Typography>
                    </ColorButton>
                    <ColorButton onClick={() => isAuth() ? handleRedirect('/post') : (alert('Please Login to Create a Post'))}
                                 sx={{mr:2}} variant="contained">
                        <IconContext.Provider value={{ size: '25', color: "white"}}>
                            <Box sx={{marginTop:.5}}>
                                <IoCreateOutline/>
                            </Box>
                        </IconContext.Provider>
                        <Typography sx={{ml:.5}}>Post</Typography>
                    </ColorButton>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" edge="end" aria-controls={menuId} onClick={accountMenuOpen} color="inherit">
                            <AccountCircle sx={{fontSize: 40, borderRadius:'100%', boxShadow: (isAuth()) ? '0px 0px 5px 4px green' : null}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
export default Header;