// Node Modules
import React, { useRef } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, SEARCH_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const [searchUsers, { data: searchData }] = useLazyQuery(SEARCH_USERS);
  const users = data?.users || [];
  const searchResults = searchData?.searchUsers || [];
  const inputRef = useRef();

  const renderUserList = () => {
    if (loading) {
      return (
        <div className="container min-vh-100">
            <h4>Loading...</h4>
        </div>
    );
    } else {
      return <UserList users={users} title="List of Users" />
    }
  }

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await searchUsers({
      variables: {
        term: inputRef.current.value
      }
    });
  }

  return (
    <div className='container min-vh-100'>
      <div>
        <h2 className='text-center mb-4'>
          Top Playlist Categories.
        </h2>
        <main>
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
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
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
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
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
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
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
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
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
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
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
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
