// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import Card from '../components/Card';

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  // Get a list of all users
  const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  const users = usersData?.users || [];

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return (
      <div className="container min-vh-100">
          <h4>Loading...</h4>
      </div>
  );
  }

  if (!user?.username) {
    return (
      <div className='container min-vh-100'>
        <div className='row'>
          <h4 className='col-12 text-center'>
            You need to be logged in to see this. Use the navigation links above to
            sign up or log in!
          </h4>
        </div>
      </div>
    );
  }

  // const renderUserList = () => {
  //   if (usersLoading) return null;
  //   // Only renders users who's profile we're not currently viewing
  //   const notMeUsers = users.filter(o => o._id !== user._id);
  //   return <UserList users={notMeUsers} title="User List" />;
  // };

  // const renderCurrentUserInfo = () => {
  //   if (id) return null;
  //   return (
  //     <ul>
  //       <li>username: {user.username}</li>
  //       <li>email: {user.email}</li>
  //     </ul>
  //   );
  // }

  return (
    <div className='container min-vh-100'>
      <div>
        <h2 className='text-center mb-4'>
          Viewing {id ? `${user.username}'s` : 'Your'} Favorited Playlists.
        </h2>
        {/* <main>
          <div className='container min-vh-100'>
            <div className='row d-flex justify-content-center'>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Card Header</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Special title treatment</h5>
                  <h6 className='card-subtitle text-muted'>Support card subtitle</h6>
                </div>
                <img src='https://via.placeholder.com/150' alt='placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <a href="#" className="card-link align-self-center">Youtube link</a>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Card Header</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Special title treatment</h5>
                  <h6 className='card-subtitle text-muted'>Support card subtitle</h6>
                </div>
                <img src='https://via.placeholder.com/150' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <a href="#" className="card-link align-self-center">Youtube link</a>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Card Header</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Special title treatment</h5>
                  <h6 className='card-subtitle text-muted'>Support card subtitle</h6>
                </div>
                <img src='https://via.placeholder.com/150' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <a href="#" className="card-link align-self-center">Youtube link</a>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Card Header</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Special title treatment</h5>
                  <h6 className='card-subtitle text-muted'>Support card subtitle</h6>
                </div>
                <img src='https://via.placeholder.com/150' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <a href="#" className="card-link align-self-center">Youtube link</a>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Card Header</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Special title treatment</h5>
                  <h6 className='card-subtitle text-muted'>Support card subtitle</h6>
                </div>
                <img src='https://via.placeholder.com/150' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <a href="#" className="card-link align-self-center">Youtube link</a>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Card Header</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Special title treatment</h5>
                  <h6 className='card-subtitle text-muted'>Support card subtitle</h6>
                </div>
                <img src='https://via.placeholder.com/150' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <a href="#" className="card-link align-self-center">Youtube link</a>
                </div>
              </div>
            </div>
          </div>
        </main> */}
        <main>
          <div>
            <Card />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
