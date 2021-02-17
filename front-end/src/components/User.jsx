import React, { useState } from 'react';
import { getAllUsers, deleteUserById } from '../services/api';
import { useHistory } from 'react-router-dom';

const User = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const dataStorage = JSON.parse(localStorage.getItem('userToken'));
  // Pega Token e usuário logado para as seguintes variaveis
  const {
    data: { token, userData: user },
  } = dataStorage;

  const getUsers = async () => {
    try {
      const { data } = await getAllUsers(token);
      setUsers(data);
    } catch (err) {
      // create state manusear mensagem
      // console.log(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      if (id === user.id) {
        await deleteUserById(id, token);
        history.push('/');
      }
      const { data: message } = await deleteUserById(id, token);
      console.log(message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='my-4 border border-success p-4'>
      <h1>Olá {user.nome}, escolha uma opção:</h1>
      <div className='d-flex justify-content-around my-4'>
        <button className='btn btn-lg btn-primary' onClick={getUsers}>
          Listar Usuários
        </button>
        <button className='btn btn-lg btn-primary'>Criar Usuário</button>
      </div>
      <div>
        {users.map((e) => (
          <div className='card mb-4' key={e.email}>
            <div className='card-header d-flex justify-content-between'>
              {`${e.nome} ${e.sobrenome}`}
              <div className='d-flex'>
                <button className='btn btn-sm btn-secondary mx-2'>
                  Atualizar
                </button>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => deleteUser(e.id)}
                >
                  Deletar
                </button>
              </div>
            </div>
            <div className='card-body'>
              <p className='card-text'>
                Email: <span className='text-info'>{e.email}</span>
              </p>
              <p className='card-text'>
                Telefone: <span className='text-info'>{e.telefone}</span>
              </p>
              <p className='card-text'>
                CPF: <span className='text-info'>{e.cpf}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
