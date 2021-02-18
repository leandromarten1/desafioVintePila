import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const postLogin = async (email, password) =>
  axios.post(`${BASE_URL}/login`, { email, password });

export const getAllUsers = async (token) =>
  axios.get(`${BASE_URL}/user`, { headers: { authorization: token } });

export const getUserById = async (id, token) =>
  axios.get(`${BASE_URL}/user/${id}`, { headers: { authorization: token } });

export const deleteUserById = async (id, token) =>
  axios.delete(`${BASE_URL}/user/${id}`, { headers: { authorization: token } });

export const addNewUser = async (
  nome,
  sobrenome,
  email,
  password,
  telefone,
  cpf,
  token,
) =>
  axios.post(
    `${BASE_URL}/user`,
    { nome, sobrenome, email, password, telefone, cpf },
    { headers: { authorization: token } },
  );

export const userUpdate = async (
  id,
  nome,
  sobrenome,
  email,
  password,
  telefone,
  cpf,
  token,
) =>
  axios.put(
    `${BASE_URL}/user/${id}`,
    { nome, sobrenome, email, password, telefone, cpf },
    { headers: { authorization: token } },
  );
