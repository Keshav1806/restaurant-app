import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <h1><span>CONTACT </span>US</h1>
                <div className="contactinfo">
                    <div className="incontactinfo">
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                        <div className="contactform">
                            <h2>GET IN TOUCH</h2>
                            <div className="inputBox">
                                <span className="fas fa-user"></span>
                                <input type="text" placeholder="name" />
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-envelope"></span>
                                <input type="email" placeholder="email" />
                            </div>
                            <div className="inputBox">
                                <span className="fas fa-phone"></span>
                                <input type="number" placeholder="number" />
                            </div>
                            <a href="#">Contact Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
