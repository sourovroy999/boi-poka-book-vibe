import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/NavBar';
import React from 'react';


const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;