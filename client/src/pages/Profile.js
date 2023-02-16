// Node Modules
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
// Utilities
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_SONG, SAVE_SONG } from '../utils/mutations';
// Components
// import UserList from '../components/UserList';

import { AiFillYoutube, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Profile = () => {
  const { id } = useParams();
  const { loading, data, error, refetch } = useQuery(QUERY_ME);

  const [removeSong] = useMutation(REMOVE_SONG);
  const [saveSong] = useMutation(SAVE_SONG);

  // Get current user
  // const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
  //   variables: { id },
  // });

  // Get a list of all users
  // const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || {};
  // const users = usersData?.users || [];

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


  const handleSave = async (id) => {
    await saveSong({ variables: { songId: id } });
    await refetch();
  };

  const handleRemove = async (id) => {
    await removeSong({ variables: { songId: id } }); // Making card text disappear 
    await refetch();
  };

  const songs = user.songList;

  return (
    <div className='container min-vh-100'>
      <h2 className='text-center mb-4'>
        Viewing {id ? `${user.username}'s` : 'Your'} Favorite Songs
      </h2>
      <div className="row d-flex justify-content-center">
        {songs.map((song) => (
          <div className='col-lg-3 col-md-6 col-sm-12 mx-1 card border-info mb-3'>
            <h3 className='card-header'>{song.name}</h3>
            <div className='card-body'>
              <h5 className='card-title text-center'>Artist: {song.artist}</h5>
              <h6 className='card-subtitle text-muted text-end'>{song.category}</h6>
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/${song.cover}`} className='img-fluid' width='100%' height='200' alt={song.name} />
            <div className="card-body">
              <p className="card-text text-center">Album: {song.album}
              </p>
            </div>
            <div className="card-body d-flex  ">
              <a href={song.video} className="card-link me-auto" target="_blank" rel="noreferrer" style={{ fontSize: "48px", margin: "0", padding: "0", color: "red" }}><AiFillYoutube /></a>
              <button 
                style={{ fontSize: "48px", margin: "0", padding: "0", color: "red", border: '0', background: 'none' }} 
                onClick={
                  () => user.songList.map(song => song._id).includes(song._id) ? handleRemove(song._id) : handleSave(song._id)
                }
              >
                {user.songList.map(song => song._id).includes(song._id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
