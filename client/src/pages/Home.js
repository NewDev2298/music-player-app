// Node Modules
import React, { useRef } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS, SEARCH_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import { Link } from 'react-router-dom';

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
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3 '>
                <h3 className='card-header'>Pop</h3>
                <div className='card-body'>
                  <h5 className='card-title'>In the mood for catchy songs?</h5>
                  <h6 className='card-subtitle text-muted'>Miley Cirus, Harry Styles, Megan Trainor...</h6>
                </div>
                <img src='../assets/pop.png' alt='placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Click for a list of popular songs that will brigthen even a rainy day.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Rock</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Woke up feeling wild?</h5>
                  <h6 className='card-subtitle text-muted'>Metallica, Tom Petty, Wiskey Myers...</h6>
                </div>
                <img src='../assets/rock.png' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Let's Rock on! 
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <Link to={`/categories/Rock`}>
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
                  </Link>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Country</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Appreciate little things in life</h5>
                  <h6 className='card-subtitle text-muted'>Zack Bryan, Tyler Childers, Colter Wall...</h6>
                </div>
                <img src='../assets/country.png' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Transport yourself to a country road with this relaxing playlist.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Party!</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Celebrate another great day</h5>
                  <h6 className='card-subtitle text-muted'>Dua Lipa, The Weekend...</h6>
                </div>
                <img src='../assets/party.png' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Let's get loud it's party time!
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Road Trip</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Ready to hit the doad?</h5>
                  <h6 className='card-subtitle text-muted'>Bruno Mars, Coldplay, Maroon 5...</h6>
                </div>
                <img src='../assets/road-trip.png' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Songs that will make the time fly by.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <button className="btn btn-lg btn-info mx-2 my-1" type="submit">View Songs
                  </button>
                </div>
              </div>
              <div className='col-lg-3 col-md-5 col-sm-12 mx-1 card border-info mb-3'>
                <h3 className='card-header'>Kids</h3>
                <div className='card-body'>
                  <h5 className='card-title'>Children's songs for every age</h5>
                  <h6 className='card-subtitle text-muted'>Frozen, Beauty and the Beast...</h6>
                </div>
                <img src='../assets/kids.png' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                </img>
                <div className="card-body">
                  <p className="card-text">Click to know why we don't talk about Bruno.
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
