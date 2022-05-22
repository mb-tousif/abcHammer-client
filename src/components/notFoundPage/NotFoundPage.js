import React from 'react';
import ErrorImage from '../../Assets/Images/404-image.gif'
const NotFoundPage = () => {
    return (
        <div className='text-primary'>
        <div className="w-full mt-10">
          <img className="mx-auto my-auto shadow-2xl w-96 rounded-xl" src={ErrorImage} alt="Page not found" />
        </div>
        <div className="ml-10 mt-8 mb-8 text-center">
          <h2 className="text-3xl bolder font-extrabold">
            404-PAGE NOT FOUND!
          </h2>
          <h2 className="font-bold">
            The page you are looking for might have been removed or temporarily
            unavailable.
          </h2>
        </div>
      </div>
    );
};

export default NotFoundPage;