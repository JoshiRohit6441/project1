import React, { useState } from 'react';

let Contact = () => {
    let [info, setInfo] = useState({
        name: "",
        email: "",
        message: ""
    });

    let inputdata = (event) => {
        let { name, value } = event.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    let addData = () => {
        alert(`Your name is ${info.name},
      email is ${info.email}, and
      message is ${info.message}`);

      setInfo({
        name: "",
        email: "",
        message: ""
    })
    };

    return (
        <>
            <div className='contactbody'>
                <div className="container">
                    <div className="card">
                        <div className="left">
                            <img src="https://webfoundation.org/docs/2017/03/March-12-Letter.jpg" alt="Contact" />
                        </div>
                        <div className="right">
                            <h2>Contact Us</h2>
                            <div className="contact">
                                <div className="form-container">
                                    <form className="form">
                                        <div className="username">
                                            <input type="text" placeholder="Enter your Name" name="name" value={info.name} onChange={inputdata} />
                                        </div>
                                        <div className="useremail">
                                            <input type="email" placeholder="Enter your email" required name="email" value={info.email} onChange={inputdata} />
                                        </div>
                                        <div className="usermessage">
                                            <textarea placeholder="Enter your message" required name='message' value={info.message} onChange={inputdata}></textarea>
                                        </div>
                                        <div className="usersubmit">
                                            <input type="submit" onClick={addData} value="Contact Us" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
