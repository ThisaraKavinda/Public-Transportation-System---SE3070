import axios from 'axios';

import { baseURL } from '../config';

export const addUser = async (newItem) => {
    const { data } = await axios.post(baseURL + '/customers/add/', newItem);
    return data;
}

export const logInUser = async (newItem) => {
    const { data } = await axios.post(baseURL + '/customers/logIn/', newItem);
    return data;
}

export const isLoggedIn = async () => {
    const token = {token: localStorage.getItem("token")};
    const { data } = await axios.post(baseURL + '/customers/isLoggedIn/', token);
    return data;
}