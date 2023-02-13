import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <div className='container min-vh-100'>
        <div className='card border-info m-3 row d-flex'>
          <h2 className='text-center mt-1 col-12'>Login</h2>
          <form className='' onSubmit={handleFormSubmit}>
            <div className="form-group">
              <div className="form-label m-3">
                <input
                  placeholder="name@example.com"
                  name="email"
                  type="email"
                  className='form-control'
                  id='floatingInput'
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group m-3'>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  className='form-control'
                  id='floatingInput'
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group m-3 d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary mb-3 col-6">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <main>
      <h4>Login</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
