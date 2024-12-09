import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import { Button } from './Button'
import { Transition } from 'react-transition-group';
import './HeroSection.css'
import {Link} from 'react-router-dom';


const HeroSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    // const [isMuted, setIsMuted] = useState(false);

    const handleMouseEnter = () => {
        // audioRef.current.play();// Play audio
    };
    const handleMouseLeave = () => {
        // audioRef.current.pause();// stop audio
        // audioRef.current.currentTime = 0; // Reset the current time of audio to 0, so that the next playback can start from the beginning.
    };
    const [videoEnd, setVideoEnd] = useState(true);

    const handleVideoEnded = () => {
        setVideoEnd(false);
    };
    const [showPlayButton, setShowPlayButton] = useState(true);
    const videoRef = useRef(null);
    const playVideo = () => {
        videoRef.current.play();
        videoRef.current.controls = true;  // 开始播放后显示控制条
        setShowPlayButton(false);
    };
return (
    <div className="slide-container">
        <div className="slide">
            <div className="slideUp">
                <div className="labelHero">
                    TE WHANUI O NGA <br />
                    WHAKATUPURANGA KATOA
                </div>
            </div>
            <div className="slideDown">
                TO NURTURE ALL THE GENERATIONS TO COME
            </div>
            <div className='buttonDiv'>
                <a href="https://www.facebook.com/" className="facebook_instagram__social">
                    <box-icon type="logo" name="facebook" color="#fff" className="icon" size="lg"></box-icon>
                </a>
                <a href="https://www.instagram.com/" className="facebook_instagram__social">
                    <box-icon type="logo" name="instagram" color="#fff" size="lg"></box-icon>
                </a>
            </div>
            {/*<div className="buttonDiv">*/}
                {/*<Link to='/requestInformationForm/' className='buttonHero' style={{ textDecoration: 'none' }} >*/}
                    {/*<label className="labelButoon">REQUEST INFOMATION</label>*/}
                {/*</Link>*/}
                {/*<Link to='/donateForm/' className='buttonHero' style={{ textDecoration: 'none' }} >*/}
                    {/*<label className="labelButoon">DONATE</label>*/}
                {/*</Link>*/}
                {/*<Link to='/registerForm/' className='buttonHero' style={{ textDecoration: 'none' }}>*/}
                    {/*<label className="labelButoon">REGISTER</label>*/}
                {/*</Link>*/}
            {/*</div>*/}
            <div className="mask"></div>
        </div>
        <div className="nextDiv" style={{
        }}>
            <div className="nextUp" >
                {/*FREELY UNCOVER THE ROOTS OF OUR WHAKAPAPA*/}
                <label className="nextUpLabel">
                    Uncover The Roots
                    of Our Whakapapa,and Jion us in our mission to uncover the rich heritage of the our culture and its profound whakapapa.
                </label>
            </div>
            <div className="nextDown" style={{
                "height":"auto"
            }}>
                <label className="nextUpLabelBlack2">
                    Together, let's delve into the depths of history and embrace the vibrant tapestry of the people who contributed in the protection of the Maori intellectual rights,
                    and the knowledge that resonates with Te Tiriti O Waitangi and He Wakaputanga. Through shared knowledge and understanding,
                    we can honor and preserve this invaluable legacy for generations to come. Embrace the opportunity to learn, connect,
                    and celebrate the enduring spirit of those who traversed a journey that led to the protection of our intellectual rights.
                </label>
            </div>
            <div className="videoHeroSection">
                <div className="video-container" style={{
                    width:"auto",
                    height:"85%"
                }}>
                    <video ref={videoRef} className="video-bg" onEnded={handleVideoEnded}>
                        <source src="/videos/Final Tiaki Taonga Trust Transition Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="aboveVideo" style={{
                        display: showPlayButton ? 'block' : 'none',
                    }} >
                        <div className="inTheMiddle">
                            <button
                                className="play-button"
                                onClick={playVideo}
                                style={{
                                    display: showPlayButton ? 'block' : 'none',
                                }}
                            >
                                <label className="play-label">Click To Play</label>
                            </button>
                        </div>
                        <div className="appMask"  style={{
                            display: showPlayButton ? 'block' : 'none',
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


};
export default HeroSection

