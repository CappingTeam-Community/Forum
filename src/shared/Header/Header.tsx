import * as React from 'react';
import styles from './Header.module.css';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    styled,
    Button,
    ButtonProps
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink } from "react-router-dom";
import { purple } from '@mui/material/colors';
import {common} from '@mui/material/colors'
import {Dispatch, FC} from "react";
import {IconContext} from "react-icons";
import {IoCreateOutline} from "react-icons/all";
import { transform } from 'typescript';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'rgb(255,255,255)',
    backgroundColor: "#1976d2",
    '&:hover': {
        //backgroundColor: purple[700],
    },
    textDecoration: 'none'
}));

type Props = {
    auth: any,
    setAuth: Dispatch<boolean>
}

const Header: FC<Props> = (props): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'navBar';
    const notificationCount = 0;

    function handleLogout() {
        props.setAuth(false);
    }

    const accountMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const accountMenuClose = () => {
        setAnchorEl(null);
    };

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
                    <ColorButton href={`/post`} sx={{mr:2}} variant="contained">
                        <IconContext.Provider value={{ size: '25', color: "white"}}>
                            <Box sx={{marginTop:.5}}>
                                <IoCreateOutline/>
                            </Box>
                        </IconContext.Provider>
                        <Typography sx={{ml:.5}}>Post</Typography>
                    </ColorButton>
                    <div className={styles.search}>
                        <div className={styles.search_icon_wrapper}>
                            <SearchIcon />
                        </div>
                        <StyledInputBase placeholder="Search Forum"></StyledInputBase>
                    </div>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={notificationCount} color="error">
                                <NotificationsIcon style={{fontSize: 40}}/>
                            </Badge>
                        </IconButton>
                        <IconButton size="large" edge="end" aria-controls={menuId} onClick={accountMenuOpen} color="inherit">
                            <AccountCircle style={{fontSize: 40}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            { props.auth ? (
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
                    <MenuItem><Button href={'/settings'}>Settings</Button></MenuItem>
                    <MenuItem><Button href={'/discover'} onClick={handleLogout}>Logout</Button></MenuItem>
                </Menu>
            ) : (
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
                    <MenuItem><Button href={'/login'}>Login</Button></MenuItem>
                    <MenuItem><Button href={'/signup'}>Signup</Button></MenuItem>
                </Menu>
            )}
        </Box>
    );
}
export default Header;