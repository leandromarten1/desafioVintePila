import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const postLogin = async (email, password) => axios.post(`${BASE_URL}/login`, { email, password });