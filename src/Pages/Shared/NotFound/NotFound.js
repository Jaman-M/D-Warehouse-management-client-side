import React from 'react';
import error from '../../../images/NotFound.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'> page not found</h2>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;