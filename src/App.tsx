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
import { Container, createTheme } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DiscoverPage from "./components/pages/DiscoveryPage/DiscoveryPage";
import ForumPage from './components/pages/ForumPage/ForumPage';
import ForumPagePopular from './components/pages/ForumPage/ForumPagePopular';
import ForumPageOldest from './components/pages/ForumPage/ForumPageOldest';
import ForumPageTags from './components/pages/ForumPage/ForumPageTags';




// Theme
export const theme = createTheme({
    palette: {
        primary: {
            main: '#006400',
        },
        secondary: {
            main: '#3cb24c',
        },
        background: {
            default: '#ece6e2',
        },
        error: {
            main: '#c2293a',
        },
        info: {
            main: '#00e7ff',
        },
    }
});

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <DiscoverPage />
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
                        <Signup />
                    </Route>
                    <Route exact path='/forum/:PostID' render={(props) => <ForumPage {...props} />} />
                    <Route exact path='/forum/:PostID/popular' render={(props) => <ForumPagePopular {...props} />} />
                    <Route exact path='/forum/:PostID/oldest' render={(props) => <ForumPageOldest {...props} />} />
                    <Route exact path='/forum/:PostID/tags' render={(props) => <ForumPageTags {...props} />} />
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;