import React from 'react';
import './Roots.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className='roots-container'>
                <div className='rootsBox'>
                    <Link to="./" className='rootsbar-logo'>
                        <img src='/ttt-logo.svg'></img>
                    </Link>
                </div>
                <div className='rootsBox'>
                    <div className='rootsGrid'>
                        <div className="labelRoots">About The Trust</div>
                        <div className="labelRoots">Wai 262 Flora and Fauna Claim</div>
                        <div className="labelRoots">2019 Te Pae Tawhiti</div>
                        <div className="labelRoots">Contemporary Wai 262</div>
                        <div className="labelRoots">Wai 262 Future</div>
                        <div className="labelRoots">Information Library</div>
                        <div className="labelRoots">Merchandise</div>
                        <div className="labelRoots">Register</div>
                        <div className="labelRoots">Information Registry</div>
                        <div className="labelRoots">Donate</div>
                    </div>
                </div>
                <div className='rootsBox'>
                    <h2 className="footer__title">Follow us!</h2>
                    <div className='roots-icons'>
                        <a href="https://www.facebook.com/" className="footer__social">
                            <box-icon type="logo" name="facebook" color="#fff" className="icon" size="lg"></box-icon>
                        </a>
                        <a href="https://www.instagram.com/" className="footer__social">
                            <box-icon type="logo" name="instagram" color="#fff" size="lg"></box-icon>
                        </a>
                       {/* <a href="https://www.twitter.com/" className="footer__social">
                            <box-icon type="logo" name="twitter" color="#fff"></box-icon>
                        </a>*/}
                    </div>
                    <p className="roots__copyright">&#169; 2023 copyright all rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer