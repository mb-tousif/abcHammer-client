import React from 'react';
import ContactUs from './ContactUs';
import Banner from './Banner';
import ProductSection from './ProductSection';
import ReviewSection from './ReviewSection';
import ProjectGallery from './ProjectGallery';
import BusinessSummary from './BusinessSummary';

const HomeMain = () => {
    return (
        <div>
            <Banner/>
            <ProductSection/>
            <ProjectGallery/>
            <BusinessSummary/>
            <ReviewSection/>
            <ContactUs/>
        </div>
    );
};

export default HomeMain;