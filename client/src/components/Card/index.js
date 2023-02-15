import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Header from '../Header';

const Card = () => {
    return (
        
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
        
    );
};

export default Card;