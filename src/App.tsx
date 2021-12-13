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
import {useState} from "react";
import Settings from './pages/Settings/Settings';
import BreadCrumbs from './shared/BreadCrumbs/BreadCrumbs';
import { isAuth } from "./shared/Authentication";

export interface UserState {
    username: any,
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
        fontFamily: 'Raleway, copperplate',
        fontWeightLight: 4
    }

});

function App() {
    const [search, setSearch] = useState('');

    // TODO: 2 settings routes
    return (
            <ThemeProvider theme={theme}>
                <div className='App'>
                        <BrowserRouter>
                            <Header setSearch={setSearch}/>
                            <BreadCrumbs/>
                            <Switch>
                                <Route exact path='/' render={(props) => <PostListing search={search} {...props} />} />
                                <Route exact path='/discover'>
                                    <Discover />
                                </Route>
                                <Route exact path='/login'>
                                    <Login />
                                </Route>
                                <Route exact path='/signup'>
                                    <Signup />
                                </Route>
                                <Route exact path='/forum/:PostID' render={(props) => <Forum {...props} />} />
                                {isAuth() ? (
                                    <>
                                        <Route exact path='/post'>
                                            <CreatePost />
                                        </Route>
                                        <Route exact path='/settings'>
                                            <Settings />
                                        </Route>
                                    </>
                                    ) : null
                                }
                            </Switch>
                        </BrowserRouter>
                </div>
            </ThemeProvider>
    );
}
export default App;