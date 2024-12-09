import React, {useEffect, useRef, useState} from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Switch, Route,Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Events from "./components/pages/Events";
import AboutUs from "./components/pages/AboutUs";
import OurPeopleForm from "./components/pages/OurPeopleForm";
import AboutTheTrust from "./components/pages/AboutTheTrust";
import Donate from "./components/pages/Donate";
import Wai262Flora from "./components/pages/Wai262Flora";
import TePaeTawhiti from "./components/pages/TePaeTawhiti";
import TShirtForm from "./components/pages/TShirtForm";
import DonateForm from "./components/pages/DonateForm";
import RegisterForm from "./components/pages/RegisterForm";
import Library from "./components/pages/Library";
import RequestInformationForm from "./components/pages/RequestInformationForm";
import Contemporary from "./components/pages/Contemporary";


function App() {
    const [showVideo, setShowVideo] = useState(true);
    const [videoEnd, setVideoEnd] = useState(true);

    const handleVideoEnded = () => {
        setShowVideo(false); // 视频播放完成后隐藏视频
        setVideoEnd(false);
    };
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const videoRef = useRef(null);
    const playVideo = () => {
        videoRef.current.play();
        videoRef.current.controls = true;  // 开始播放后显示控制条
        setShowPlayButton(false);
    };
  useEffect(() => {
    //Change title on tab
    document.title = "Tiaki Taonga Trust";

    //Change favicon
    const link = document.querySelector("link[rel*='apple-touch-icon]") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/logo.png';
    document.getElementsByTagName('head')[0].appendChild(link);

  }, []);

  return (
    <>
      <Router>
        <div className="home-container">
            {showVideo && (
                <div className="video-container">
                    <video ref={videoRef} className="video-bg" onEnded={handleVideoEnded}>
                        <source src="/videos/Final Tiaki Taonga Trust Transition Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="aboveVideo" style={{
                        display: showPlayButton ? 'block' : 'none',
                    }} >
                        <div className="inTheMiddle">
                            <div className='app-logo'>
                                <img src='/Tiaki Taoga Trust Logo - RGB(SCREEN).png' className="imgageCss"></img>
                            </div>
                            <div className="appLabel">
                               <label> TE URUNGA KI TE <br/>
                                PAETUKUTUKU<br/>
                                WAI 262 FLORA AND FAUNA</label>
                            </div>
                            <div className="app-divider">
                            </div>
                            <div className="appLabelDown">
                                Wai 262 Flora and Fauna Website Entry
                                <br/>
                                Click on the Arrow Below
                            </div>
                            <button
                                className="play-button"
                                onClick={playVideo}
                                style={{
                                    display: showPlayButton ? 'block' : 'none',
                                }}
                            >
                                <label className="play-label">▶</label>
                            </button>
                        </div>
                        <div className="appMask"  style={{
                            display: showPlayButton ? 'block' : 'none',
                        }}>
                        </div>
                    </div>

                </div>
            )}
            {!videoEnd && (
                <div>
                 <Navbar />
                  <Routes>
                      <Route path='/' element={<Navigate to='/home' />} /> {/* The root path is set to redirect to the Home page */}
                      <Route exact path='/home' element={<Home />} />
                      {/*<Route exact path='/trust-website/' element={<Home />} />*/}
                      <Route path='/events' element={<Events />} />
                      <Route path='/about-us' element={<AboutUs />} />
                      <Route path='/donate' element={<Donate />} />
                      <Route path='/ourPeopleForm' element={<OurPeopleForm />} />
                      <Route path='/library' element={<Library />} />
                      <Route path='/tShirtForm' element={<TShirtForm />} />
                      <Route path='/requestInformationForm' element={<RequestInformationForm />} />
                      <Route path='/donateForm' element={<DonateForm />} />
                      <Route path='/registerForm' element={<RegisterForm />} />
                      <Route path='/contemporary/:selectedOption' element={<Contemporary />} />
                      <Route path='/aboutTheTrust/:selectedOption' element={<AboutTheTrust />} />
                      <Route path='/wai262Flora/:selectedOption' element={<Wai262Flora />} />
                      <Route path='/tePaeTawhiti/:selectedOption' element={<TePaeTawhiti />} />
                  </Routes>
                </div>
            )}
        </div>
      </Router>
    </>
        //Route path set on Navbar component
  );

}

export default App;