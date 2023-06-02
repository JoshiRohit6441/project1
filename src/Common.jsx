import React from 'react';
import { NavLink } from 'react-router-dom';

let Common = (props) => {
    return (
        <>
            <div className='mainbody'>
                <div className='textMain'>
                    <h1 className='htextmain'>{props.name} <strong className='hbrandname'>'JoshiRohit'</strong> </h1>
                    <br />
                    <p className='ptextmain'>{props.para}</p>
                    <button className='btntextmain'>
                        <NavLink className="linktextmain" to={props.visit}>{props.btname}</NavLink>
                    </button>
                </div>
                <div >
                    <img className='imgmain' src={props.web} alt="error" />
                </div>
            </div>
        </>
    )
}
export default Common;