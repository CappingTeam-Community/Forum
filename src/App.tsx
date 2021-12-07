import * as React from 'react';
import './App.css';
import CreatePost from "./pages/CreatePost/CreatePost";
import Header from './shared/Header/Header';
import Login from './pages/Login/Login';
import PostListing from './pages/PostListings/PostListing';
import Signup from './pages/Signup/Signup';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Discover from "./pages/Discover/Discover";
import Forum from './pages/Forum/Forum';
import {ThemeProvider, createTheme} from "@mui/material"
import { useState} from "react";
import Settings from './pages/Settings/Settings';
import BreadCrumbs from './shared/BreadCrumbs/BreadCrumbs';

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

    // TODO: 2 settings routes
    return (
            <ThemeProvider theme={theme}>
                <div className='App'>
                        <BrowserRouter>
                            <Header auth={auth} setAuth={setAuth} />
                            <BreadCrumbs/>
                            <Switch>
                                <Route exact path='/'>
                                        <Discover />
                                </Route>
                                <Route exact path='/category/:CategoryID' render={(props) => <PostListing {...props} />} />
                                <Route exact path='/category/' render={(props) => <PostListing {...props} />} />
                                <Route exact path='/post'>
                                    <CreatePost />
                                </Route>
                                <Route exact path='/user'>
                                    <Settings auth={auth} setAuth={setAuth} userData={userData} setUserData={setUserData}/>
                                </Route>
                                <Route exact path='/settings'>
                                    <Settings auth={auth} setAuth={setAuth} userData={userData} setUserData={setUserData} />
                                </Route>
                                <Route exact path='/login'>
                                    <Login auth={auth} setAuth={setAuth} userData={userData} setUserData={setUserData} />
                                </Route>
                                <Route exact path='/signup'>
                                    <Signup auth={auth} setAuth={setAuth} userData={userData} setUserData={setUserData}/>
                                </Route>
                                <Route exact path='/forum/:PostID' render={(props) => <Forum {...props} />} />
                            </Switch>
                        </BrowserRouter>
                </div>
            </ThemeProvider>
    );
}

export default App;