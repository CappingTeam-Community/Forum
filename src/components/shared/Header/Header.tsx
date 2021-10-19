import * as React from 'react';
import styles from './Header.module.css';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {NavLink} from "react-router-dom";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'navBar';
    const notificationCount = 0;
    var loggedIn = false;

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
            <MenuItem><NavLink exact to='/setting'>Account</NavLink></MenuItem>
            <MenuItem><NavLink exact to='/login'>Login</NavLink></MenuItem>
            <MenuItem><NavLink exact to='/signup'>Signup</NavLink></MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <NavLink exact to='/'>
                        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                            <HomeIcon />
                        </IconButton>
                    </NavLink>

                    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Community Forum
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <div className={styles.search}>
                        <div className={ styles.search_icon_wrapper }>
                            <SearchIcon />
                        </div>
                        <StyledInputBase placeholder="Search Forum"></StyledInputBase>
                    </div>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={notificationCount} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" edge="end" aria-controls={menuId} onClick={accountMenuOpen} color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
export default Header;