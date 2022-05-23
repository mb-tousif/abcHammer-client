import React from 'react';
import ContactUs from './ContactUs';
import Banner from './Banner';
import ProductSection from './ProductSection';
import ReviewSection from './ReviewSection';
import ProjectGallery from './ProjectGallery';

const HomeMain = () => {
    return (
        <div>
            <Banner/>
            <ProductSection/>
            <ProjectGallery/>
            <ReviewSection/>
            <ContactUs/>
        </div>
    );
};

export default HomeMain;