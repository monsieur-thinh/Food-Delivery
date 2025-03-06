import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas consequuntur rerum minus repudiandae similique
                        officia laborum ex nesciunt quo, nam, excepturi quisquam
                        aperiam quos corrupti nisi illo a tempore vitae.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.twitter_icon} alt="facebook" />
                        <img src={assets.linkedin_icon} alt="facebook" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+84-905-487-718</li>
                        <li>contact@leminhthinh03.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 c kuma.com - All Right Reserved.
            </p>
        </div>
    );
};

export default Footer;
