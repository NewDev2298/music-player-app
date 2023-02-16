import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { AiFillYoutube, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SONGS } from '../../utils/queries';


const Card = (songs) => {
    
    const { id } = useParams();

    const [favorites, setFavorites] = useState([]);

    // const { loading, data, error } = useQuery(QUERY_ALL_SONGS,
    //     {
    //         variables: { id },
    //     });

    // const songs = data?.getAllSong || [];

    const handleClick = (id) => {
        setFavorites(favorites => {
            if (favorites.includes(id)) {
                return favorites.filter(fav => fav !== id);
            }
            return [...favorites, id];
        });
    };

    return (
        <div className="row">
        {songs.map((song) => (
            <div className='col-lg-3 col-md-6 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>{songs.name}</h3>
                <div className='card-body'>
                    <h5 className='card-title text-center'>Artist: {song.artist}</h5>
                    <h6 className='card-subtitle text-muted text-end'>{song.category}</h6>
                </div>
                <img src='https://via.placeholder.com/150' alt='placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='fun: Image Cap'>
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
    );
};

export default Card;