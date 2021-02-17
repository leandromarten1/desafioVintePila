import React, { useReducer } from 'react';
import { postLogin } from '../services/api';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const [form, setForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { email: '', password: '' },
  );

  const { email, password } = form;

  const handleInput = ({ target: { name, value } }) =>
    setForm({ [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postLogin(email, password);
      const { data } = response;

      localStorage.userToken = JSON.stringify({ data });

      history.push('/user');
    } catch (err) {
      // criar um state "message" para apresentar erro
      console.log(err);
    }
  };

  return (
    <form className='my-4 border border-success p-4' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='Digite seu Email'
          value={email}
          onChange={handleInput}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Senha</label>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Digite sua Senha'
          value={password}
          onChange={handleInput}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Entrar
      </button>
    </form>
  );
};

export default Login;
