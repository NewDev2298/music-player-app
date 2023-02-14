import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-5'>
          <div className='d-flex justify-content-end'>
            <Link to="/me">
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button className="btn btn-info my-2 my-sm-0" type="submit" onClick={logout}>Logout
            </button>
          </div>
        </nav>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <nav className='row navbar navbar-expand-lg navbar-dark bg-primary mb-5'>
        <div className='d-flex align-items-center'>
          <h1 className='me-auto mx-4'>Music App</h1>
          <Link to="/login">
            <button className="btn btn-info mx-2 my-1" type="submit">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-info mx-2 my-1" type="submit">Signup</button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
