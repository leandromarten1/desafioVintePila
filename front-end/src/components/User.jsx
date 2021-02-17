import React, { useState } from 'react';
import { getAllUsers } from '../services/api';

const User = () => {
  const [users, setUsers] = useState([]);
  const logado = JSON.parse(localStorage.getItem('userToken'));
  const { data: {token}} = logado

  const getUsers = async () => {
    try {
      const { data } = await getAllUsers(token);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='my-4 border border-success p-4'>
      <h1>Olá user, escolha uma opção:</h1>
      <div className='d-flex justify-content-around mt-4'>
        <button className='btn btn-lg btn-primary' onClick={getUsers}>
          Listar Usuários
        </button>
        <button className='btn btn-lg btn-primary'>Criar Usuário</button>
      </div>
      <div>{users.map(e => <li>{e.nome}</li>)}</div>
    </div>
  );
};

export default User;
