import React from 'react';
import Background from '../../Assets/Images/topb.jpg'
import Button from '../SharedPages/Button/Button';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
            <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 md:text-5xl text-xl font-bold">Welcome to ABC Hammer <br /> Manufacturing Ltd</h1>
                <p className="mb-5">ABC Hammer Manufacturing Ltd. is the leading manufacturer of the highest quality, non-marring, non-sparking, non-magnetic and non-corrosive striking tools. We have been a family owned company for over 50 years.</p>
                <Button/>
            </div>
          </div>
        </div>
    );
};

export default Banner;