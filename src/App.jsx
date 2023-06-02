import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';

let App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
                <Route path='services' Component={Services} />
            </Routes>
        </>
    )
}
export default App;