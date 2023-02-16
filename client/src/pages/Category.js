import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_A_CATEGORY } from '../utils/queries';
import { SAVE_SONG, REMOVE_SONG } from '../utils/mutations';
import { AiFillYoutube, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import Auth from "../utils/auth";

const Category = () => {
  const { term } = useParams();

  const [saveSong] = useMutation(SAVE_SONG);
  const [removeSong] = useMutation(REMOVE_SONG);

  const { loading, data, refetch } = useQuery(QUERY_A_CATEGORY,
    {
      variables: { term },
    });

  const { loading: userLoading, data: userData } = useQuery(QUERY_ME);

  const songs = data?.getSongsByCategory || [];
  const user = userData?.me || {};

  if (loading || userLoading) {
    return (
      <div className="container min-vh-100">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (!Auth.loggedIn()) {
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

  const handleSave = async (id) => {
    await saveSong({ 
      variables: { songId: id }, 
    });
    await refetch();
  };

  const handleRemove = async (id) => {
    await removeSong({ 
      variables: { songId: id },
    });
    await refetch();
  };

  return (
    <div className='container min-vh-100'>
      <h2 className='text-center mb-3'>
        Viewing {term} Category Songs
      </h2>
      <div className="row">
        <div>
          <pre>{JSON.stringify(songs, null, 2)}</pre>
        </div>
        {songs.map((song) => (
          <div>
            <div className='col-lg-3 col-md-6 col-sm-12 mx-1 card border-info mb-3'>
              <h3 className='card-header'>{song.name}</h3>
              <div className='card-body'>
                <h5 className='card-title text-center'>Artist: {song.artist}</h5>
                <h6 className='card-subtitle text-muted text-end'>{song.category}</h6>
              </div>
              <img src={`${process.env.PUBLIC_URL}/assets/${song.cover}`} className='img-fluid' width='100%' height='200' alt={song.name} />
              </img>
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
                  }>
                  {user.songList.map(song => song._id).includes(song._id) ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
              </div>
            </div>
        ))}
      </div>
    </div >
  );
};

export default Category;
