import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
        <div className='card border-info m-3'>
        <h2 className='text-center mt-1'>Signup</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-label m-3">
              <input
                placeholder="Your username"
                name="username"
                type="text"
                className='form-control'
                id='floatingInput'
                value={formState.name}
                onChange={handleChange}
              />
            </div>
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
          </form>
        </div>
      </div>
    );
  };

  return (
    <main>
      <h4>Sign Up</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
