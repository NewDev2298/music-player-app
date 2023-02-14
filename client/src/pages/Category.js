import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Auth from "../utils/auth";

const Category = () => {
   

    const { loading, data, error } = useQuery(
        {
            variables: { id },
        });

    if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
        return <Navigate to="/categories" replace />;
    }

    if (loading) {
        return <h4>Loading...</h4>;
    }

    // if () {
    //     return (
    //         <div className='container min-vh-100'>
    //             <div className='row'>
    //                 <h4 className='col-12 text-center'>
    //                     You need to be logged in to see this. Use the navigation links above to
    //                     sign up or log in!
    //                 </h4>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className='container min-vh-100'>
            <div>
                <h2 className='text-center mb-3'>
                    Viewing categories.
                </h2>
                <main>
                    <div className='col-lg-3 col-md-6 col-sm-12 mx-1 card border-info mb-3'>
                        <h3 className='card-header'>Category</h3>
                        <div className='card-body'>
                        <h5 className='card-title'>Test</h5>
                            <h6 className='card-subtitle text-muted'>Support card subtitle</h6>
                        </div>
                        <img src='https://via.placeholder.com/150' alt='Image placeholder' className='d-block user-select-none' width='100%' height='200' aria-label='Placeholder: Image Cap'>
                        </img>
                        <div class="card-body">
                            <p class="card-text">Test
                            </p>
                        </div>
                        <div class="card-body text-center">
                            <a href="#" class="card-link">Card link</a>
                        </div>
                    </div>
                </main >
            </div >
        </div >
    );
};

export default Category;
