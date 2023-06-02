import React from 'react';
import Common from './Common';

let About = () => {
    let web = 'https://mytechdecisions.com/wp-content/uploads/2019/10/AdobeStock_256229414.jpg'
    return (
        <>
            <Common
                name="Welcome to About page of"
                para="Start learning about web development,web application development, software engineer ."
                visit="/services"
                btname="Start Learning"
                web={web}
            />
        </>
    )
}
export default About;