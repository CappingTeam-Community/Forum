import Axios from "axios";
import React from "react";
const jwt = require('jsonwebtoken');

//TODO: implement .env file, syntax to call is process.env.REACT_APP_SECRET. Secures data.
const REACT_APP_SECRET = "temporarysecretkey"

export async function token (credentials: any) {
    const user: any = await(getUser(credentials.email, credentials.password));
    console.log('gettingtoken', credentials.email, credentials.password, user[0]);
    // If user exists, create token
    if(user[0]) {
        const token = encodeJWT(user[0]);
        console.log('updatingtoken.token');
        updateToken(token);
    }
}

const getUser = (email: string, password: string) => {
    return Axios.get(`http://localhost:3001/user/select/credentials/${email}/${password}`)
        .then(res => {
            return res.data;
        });
};

function updateToken (token: any) {
    sessionStorage.setItem('token', JSON.stringify(token));
}

export function removeToken () {
    sessionStorage.removeItem('token');
}

const encodeJWT = (user: any) => {
    return jwt.sign(user, REACT_APP_SECRET);
}

export const getCurrentUser = () => {
    if(isAuth()){
        return jwt.verify(JSON.parse(sessionStorage.getItem('token') as string), REACT_APP_SECRET);
    }
}

export const isAuth = () :boolean => {
    return sessionStorage.getItem('token') ? true : false;
}