import React from 'react';
import Common from './Common';


let Home = () => {
    let web = 'https://mytechdecisions.com/wp-content/uploads/2019/10/AdobeStock_256229414.jpg'
    return (
        <>
            <Common
                name="Grow your business with"
                para="We have some of the best Web developer,web application developer,software engineers."
                visit="/about"
                btname="Get Started"
                web={web}
            />
        </>
    )
}
export default Home;