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
        <nav className='row navbar navbar-expand-lg navbar-dark bg-primary mb-4'>
          <div className='d-flex align-items-center'>

          <h1 className='me-auto mx-4'><Link to="/" style={{ textDecoration: 'none' }}>Melum</Link></h1>

            <Link to="/me">
              <button className="btn btn-info mx-2 my-1">{Auth.getProfile().data.username}'s profile</button>
            </Link>
            <Link to="/">
              <button className="btn btn-info mx-2 my-1">Home</button>
            </Link>
            <button className="btn btn-info mx-2 my-1" type="submit" onClick={logout}>Logout</button>
          </div>
        </nav>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <nav className='row navbar navbar-expand-lg navbar-dark bg-primary mb-4'>
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
