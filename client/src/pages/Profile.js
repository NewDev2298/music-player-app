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
        <h2 className='text-center mb-4'>
          Viewing {id ? `${user.username}'s` : 'Your'} Favorited Playlists.
        </h2>
        <main>
            <Card />
        </main>
    </div>
  );
};

export default Profile;
