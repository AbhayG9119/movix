import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/AbhayG9119">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a>
                    <a href="https://www.instagram.com/abhay_gupta_ar/">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a>
                    <a href="https://x.com/learn_with_eror">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/abhay-gupta-9119g/">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
