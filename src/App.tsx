import * as React from 'react';
import './App.css';

import Home from './components/pages/HomeDashboard/HomeDashboard';
import PostDashboard from "./components/pages/PostDashboard/PostDashboard";
import UserDashboard from "./components/pages/UserDashboard/UserDashboard";
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import { createTheme } from "@mui/material";
import {BrowserRouter, Route, Switch} from "react-router-dom";


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
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;