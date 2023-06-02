import React, { useState } from 'react';
import CourseData from './Data';
import Card from './Card';

let Services = () => {
    let [data, setData] = useState(CourseData)
    return (
        <>
            <div className='servicebody'>
                {data.map((cudata) => {
                    let { id } = cudata;
                    return <Card key={id} {...cudata} />
                })}
            </div>
        </>
    )
}
export default Services;