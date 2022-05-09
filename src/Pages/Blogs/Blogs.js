import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-info'>Question and Answer</h2>
            <h4>Q-1:  Difference between javascript and nodejs</h4> 
            <p><strong>Ans:</strong>Javascript is a programming language that is used for writing scripts on the website but  NodeJS is a Javascript runtime environment. <br />
            Javascript can only be run in the browsers.--We can run Javascript outside the browser with the help of NodeJS. <br />
            Javascript is used in frontend development.--Nodejs is used in server-side development. <br />
            Javascript can only be run in the browsers.--We can run Javascript outside the browser with the help of NodeJS.

            </p>

            <h4>Q-2: When should you use nodejs and when should you use mongodb?</h4> 
            <p><strong>Ans:</strong>Nodejs is a plattform to write js code. MongoDB is a database witch can be used with node.js <br />
            Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code.So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br />
            If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some mongodb.
            </p>
            <h4>Q-3: Differences between sql and nosql databases.</h4> 
            <p><strong>Ans:</strong> Differences between sql and nosql databases are: <br />
            SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). NoSQL is Non-relational or distributed database system. <br />
            SQL database are not suited for hierarchical data storage. but NoSQL databases are best suited for hierarchical data storage. <br />
            SQL is Vertically Scalable but NoSQL is Horizontally scalable
            </p>
        </div>
    );
};

export default Blogs;