import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import './TShirtForm.css';
import {Link} from "react-router-dom";

const TShirtForm = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    // const [isMuted, setIsMuted] = useState(false);

    const showTShirtForm = () => {
        // nothing to do .   just put it here just in case.
    };


  return (
    <div className="tShirtDiv">
        <div className='tShirtLeft'>
            <div className="labelTShirdTitle">
                Join the Movement
                for Justice and Respect
            </div>
            <div className="labelTShirtContent">
                Made with quality materials, available in three colours, comes in collared and non-collared with varied sizes from children to adults.
            </div>
            <div className="labelTShirtFeet">
                At the heart of New Zealand's rich cultural tapestry lies the groundbreaking Wai 262 report, a powerful document that recognizes
                the intellectual property rights of the Māori people over their unique flora and fauna. Today,
                you have the opportunity to be a part of this transformative journey by proudly wearing our exclusive
                collection of T-shirts inspired by the spirit of Wai 262.
            </div>
            <div className="buttonTShirt" onClick={showTShirtForm}>
                <Link to='/tShirtForm/' className='labelTShirt' onClick={showTShirtForm}  >
                    Order Now
                </Link>
            </div>
        </div>
        <div className='tShirtRight'>
        </div>
    </div>
  );
}
export default TShirtForm