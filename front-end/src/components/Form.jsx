import React, { useState, useReducer } from 'react';
import { addNewUser } from '../services/api';

const {
  data: { token },
} = JSON.parse(localStorage.getItem('userToken'));

const Form = () => {
  const [message, setMessage] = useState('');
  const [form, setForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      nome: '',
      sobrenome: '',
      email: '',
      password: '',
      telefone: '',
      cpf: '',
    },
  );

  const { nome, sobrenome, email, password, telefone, cpf } = form;

  const handleInput = ({ target: { name, value } }) =>
    setForm({ [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addNewUser(
        nome,
        sobrenome,
        email,
        password,
        telefone,
        cpf,
        token,
      );
      setMessage(data.message);
      setForm({
        nome: '',
        sobrenome: '',
        email: '',
        password: '',
        telefone: '',
        cpf: '',
      });
    } catch (err) {
      console.log(err)
        setMessage('Erro ao criar usuário');
    }
  };

  return (
    <div>
      {message ? <span className='alert alert-info' role="alert">{message}</span>: <span></span>}
      <form className='my-4 border border-success p-4' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='nome'>Nome</label>
          <input
            type='text'
            name='nome'
            className='form-control'
            value={nome}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='sobrenome'>Sobrenome</label>
          <input
            type='text'
            name='sobrenome'
            className='form-control'
            value={sobrenome}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            value={email}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='senha'>Senha</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleInput}
            className='form-control'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='telefone'>Telefone</label>
          <input
            type='text'
            name='telefone'
            className='form-control'
            value={telefone}
            onChange={handleInput}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='cpf'>CPF</label>
          <input
            type='text'
            name='cpf'
            className='form-control'
            value={cpf}
            onChange={handleInput}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Salvar
        </button>
        <span className='text-secondary ml-4'>
          * Todos os campos são obrigatórios
        </span>
      </form>
    </div>
  );
};

export default Form;
