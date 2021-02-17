import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const postLogin = async (email, password) =>
  axios.post(`${BASE_URL}/login`, { email, password });

export const getAllUsers = async (token) => axios.get(`${BASE_URL}/user`, {headers: {authorization: token}});

export const deleteUserById = async (id, token) => axios.delete(`${BASE_URL}/user/${id}`, {headers: {authorization: token}})
