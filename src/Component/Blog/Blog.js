import React from 'react';

const Blog = () => {
    return (
        <div className='container w-75 mx-auto  my-5'>
            <h2> Q1. Difference between authorization and authentication</h2>
            <p>Authentication verifies who the user is But Authorization is how user can access to use what resource</p> 
            <p>Authentication works with passwords, pin and other information but Authorization is a settings that implement by orgarnization</p>
            <p>Authentication is the first step of identity But Authorization first take place after authentication</p>
            <p>Authentication is changable by the user But Authorization is not changable by the user</p> 
            <h2> Q2.  Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p> We are using firebase When I donot know how to make a rest api.</p>
            <p> We are using firebase When I want to prototype product .</p>
            <p> We are implemnt password based authentication it is the most common method of authentication</p> 
            <p>We are using Multi Factor Authentication. It is the mehode that requires two or more ways to identify a user  </p>
            <h2> Q3.  What other services does firebase provide other than authentication?</h2>
            <p>There are many services which Firebase Provides. Most Useful them are Cloud Firestore, Cloud Function , Hosting, Google Analytics. Firebase is the full package of developing mobile or web appication faseter. Every one needs notifications in their mobile applications in one way or another for enhanced engaement with their users. Firebase is a great tool to implement notifications of the platfrom because it is fast, reliable, and scalable to handle our request.  </p>
        </div>
    );
};

export default Blog;