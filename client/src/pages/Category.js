import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USERS, QUERY_USER, QUERY_ME, QUERY_A_CATEGORY } from '../utils/queries';
import { SAVE_SONG } from '../utils/mutations';
import { AiFillYoutube, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import Auth from "../utils/auth";

const Category = () => {
    const { terms } = useParams();

    const [favorites, setFavorites] = useState([]);

    const [saveSong] = useMutation(SAVE_SONG)

    const { loading, data, error } = useQuery(QUERY_A_CATEGORY,
        {
            variables: { term: terms },
        });

    const songs = data?.getSongsByCategory || [];

    console.log(data);

    // if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    //     return <Navigate to="/categories" replace />;
    // }

    if (loading) {
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

    const handleClick = async (id) => {
        setFavorites(favorites => {
            if (favorites.includes(id)) {
                return favorites.filter(fav => fav !== id);
            }
            return [...favorites, id];
        });


        await saveSong({ variables: { songId: id } });

    };

    return (
        <div className='container min-vh-100'>
            <h2 className='text-center mb-3'>
                Viewing {data.category} Category Songs.
            </h2>
            <div className="row">
                {songs.map((song) => (
                    <div className='col-lg-3 col-md-6 col-sm-12 mx-1 card border-info mb-3'>
                        <h3 className='card-header'>{song.name}</h3>
                        <div className='card-body'>
                            <h5 className='card-title text-center'>Artist: {song.artist}</h5>
                            <h6 className='card-subtitle text-muted text-end'>{song.category}</h6>
                        </div>
                        <img src='https://via.placeholder.com/150' alt='placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                        </img>
                        <div className="card-body">
                            <p className="card-text text-center">Album: {song.album}
                            </p>
                        </div>
                        <div className="card-body d-flex  ">
                            <a href={song.video} className="card-link me-auto" target="_blank" rel="noreferrer" style={{ fontSize: "48px", margin: "0", padding: "0", color: "red" }}><AiFillYoutube /></a>
                            <button style={{ fontSize: "48px", margin: "0", padding: "0", color: "red", border: '0', background: 'none' }} onClick={() => handleClick(song._id)}>
                                {favorites.includes(song._id) ? <AiFillHeart /> : <AiOutlineHeart />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Category;
