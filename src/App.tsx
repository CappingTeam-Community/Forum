import * as React from 'react';
import './App.css';

import Home from './components/pages/HomeDashboard/HomeDashboard';
import PostDashboard from "./components/pages/PostDashboard/PostDashboard";
import UserDashboard from "./components/pages/UserDashboard/UserDashboard";
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Login from './components/pages/Login/Login';
import PostListing from './components/pages/PostListing/PostListing';
import Signup from './components/pages/Signup/Signup';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiscoveryPage from "./components/pages/DiscoveryPage/DiscoveryPage";
import ForumPage from './components/pages/ForumPage/ForumPage';
import {ThemeProvider, createTheme, MenuItem, Button} from "@mui/material"
import {useEffect, useState} from "react";
import SettingsPage from './components/pages/SettingsPage/SettingsPage';
import BreadCrumbs from './components/shared/BreadCrumbs/BreadCrumbs';

import ForumPagePopular from './components/pages/ForumPage/ForumPagePopular';
import ForumPageOldest from './components/pages/ForumPage/ForumPageOldest';
import ForumPageTags from './components/pages/ForumPage/ForumPageTags';

export interface UserState {
    firstName: any,
    lastName: any,
    username: any,
    email: any,
    password: any,
    interests: Array<any>
}

// Theme
const theme = createTheme({
    palette: {
        background: {
            default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        },
        secondary: {
            main: `rgba(0, 186, 219, 0.5)`
        }
    },
    typography: {
        fontFamily: ['Nanum Myeongjo', 'serif'].join(''),
        fontWeightLight: 400
    }

});

function App() {
    const [userData, setUserData] = useState<UserState>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        interests: [],
    });
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        console.log("userData", userData);
    }, [userData]);
    useEffect(() => {
        console.log("auth", auth);
    }, [auth]);

    return (
            <ThemeProvider theme={theme}>
                <div className='App'>
                        <BrowserRouter>
                            <Header auth={auth} setAuth={setAuth} />
                            <BreadCrumbs/>
                            <Switch>
                                <Route exact path='/'>
                                        <DiscoveryPage />
                                </Route>
                                <Route exact path='/category/:CategoryID' render={(props) => <PostListing {...props} />} />
                                <Route exact path='/category/' render={(props) => <PostListing {...props} />} />
                                <Route exact path='/post'>
                                    <PostDashboard />
                                </Route>
                                <Route exact path='/user'>
                                    <UserDashboard />
                                </Route>
                                <Route exact path='/login'>
                                    <Login />
                                </Route>
                                <Route exact path='/signup'>
                                    <Signup auth={auth} setAuth={setAuth} userData={userData} setUserData={setUserData}/>
                                </Route>
                                <Route exact path='/settings'>
                                    <SettingsPage />
                                </Route>
                                <Route exact path='/forum/:PostID' render={(props) => <ForumPage {...props} />} />
                                <Route exact path='/forum/:PostID/popular' render={(props) => <ForumPagePopular {...props} />} />
                                <Route exact path='/forum/:PostID/oldest' render={(props) => <ForumPageOldest {...props} />} />
                                <Route exact path='/forum/:PostID/tags' render={(props) => <ForumPageTags {...props} />} />
                            </Switch>
                        </BrowserRouter>
                </div>
            </ThemeProvider>
    );
}

export default App;