import React from 'react';
import OurAddress from '../../OurAddress/OurAddress';
import OurServices from '../../OurServices/OurServices';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurServices></OurServices>
            <OurAddress></OurAddress>
            
        </div>
    );
};

export default Home;