import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { email, password } = form;
  
  const handleInput = ({ target: { name, value } }) => setForm({ [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de pegar o token etc...
  };
  
  return (
    <form className='my-4 border border-success p-4' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name="email"
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
          name="password"
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
