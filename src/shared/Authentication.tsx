import Axios from "axios";
import React from "react";
const jwt = require('jsonwebtoken');

//TODO: implement .env file -- process.env.REACT_APP_SECRET
const REACT_APP_SECRET = "secretkey090"

export async function token (credentials: any) {
    const user: any = await(getUser(credentials.email, credentials.password));
    // If user exists, create token
    if(user[0]) {
        const token = encodeJWT(user[0]);
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
    return jwt.verify(JSON.parse(sessionStorage.getItem('token') as string), REACT_APP_SECRET);
}

export const isAuth = () => {
    return sessionStorage.getItem('token') ? true : false;
}