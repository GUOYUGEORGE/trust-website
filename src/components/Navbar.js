import React, {useRef,useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        // 如果页面向下滚动超过 50 像素，则隐藏 Logo
        if (window.scrollY > 50) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [countFlag, setCountFlag] = useState(true);
    const [navBarFlag, setNavBarFlag] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setHovered('');
        // setClick(false)
        setNavBarFlag(false);
    };
    const showNavBarFlag = () => {
        setHovered('');
        setNavBarFlag(!navBarFlag);
    };
    const [selectedOption, setSelectedOption] = useState('');

    const handleParamClick = (option, event) => {
        setSelectedOption(option);
        setHovered('');

        setNavBarFlag(!navBarFlag);
    };
    // add by dh(Leo)
    const [isHovered, setHovered] = useState('');
    const [isHoveredMenu, setHoveredMenu] = useState('');
    const [leftOffset, setLeftOffset] = useState(0.00);
    const divRef1 = useRef('');  // 创建一个ref
    const divRef2 = useRef('');  // 创建一个ref
    const divRef3 = useRef('');  // 创建一个ref
    const divRef4 = useRef('');  // 创建一个ref
    const divRef5 = useRef('');  // 创建一个ref
    const divRef6 = useRef('');  // 创建一个ref
    const handleMouseEnter = (menuName,devRef) => {
        if(devRef==='1'){
            setLeftOffset(divRef1.current.getBoundingClientRect().left);
        } else if (devRef=='2'){
            setLeftOffset(divRef2.current.getBoundingClientRect().left);
        } else if (devRef=='3'){
            setLeftOffset(divRef3.current.getBoundingClientRect().left)
        }
        setHoveredMenu('');// add by leo ..this for cancel the css style you houseEnter the menu  when re-enter the begining menu
        if(isHovered!==menuName){// when click other menu,close the old menu and open the other menu
            setCountFlag(false);
            setHovered(menuName);
        } else {// otherwise,if you click the old menu second times,then close the old menu
            if(countFlag){
                setCountFlag(false);
                setHovered(menuName);
            } else {
                setCountFlag(true);
                setHovered('');
            }
        }
    };
    const handleMouseEnter2 = (menuName,devRef) => {
        if(devRef==='4'){
            setLeftOffset(divRef4.current.getBoundingClientRect().left);
        } else if (devRef=='5'){
            setLeftOffset(divRef5.current.getBoundingClientRect().left);
        } else if (devRef=='6'){
            setLeftOffset(divRef6.current.getBoundingClientRect().left)
        }
        setHoveredMenu('');// add by leo ..this for cancel the css style you houseEnter the menu  when re-enter the begining menu
        if(isHovered!==menuName){// when click other menu,close the old menu and open the other menu
            setCountFlag(false);
            setHovered(menuName);
        } else {// otherwise,if you click the old menu second times,then close the old menu
            if(countFlag){
                setCountFlag(false);
                setHovered(menuName);
            } else {
                setCountFlag(true);
                setHovered('');
            }
        }
    };

    const handleMenuMouseEnter = (menuNo,menuName) => {
        setHoveredMenu(menuNo);
        setHovered(menuName);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setHoveredMenu('');
    };
    // end
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    const [width, setWidth] = useState(window.innerWidth);  // 初始化状态为当前窗口宽度
    useEffect(() => {
        showButton();
        const handleResize = () => {
            setWidth(window.innerWidth);  // 更新宽度状态
        };

        window.addEventListener('resize', handleResize);  // 添加窗口大小改变事件监听

        // 添加滚动事件监听器
        window.addEventListener('scroll', handleScroll);

        // 清理函数，在组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [width]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar' >
                <div className='navbar-containerTop'>
                    <Link to="/home/" className="navbar-logo" style={{
                        visibility:isVisible?"visible":"hidden"
                    }} onClick={closeMobileMenu}>
                        <img src='/Tiaki Taoga Trust Logo - RGB(SCREEN).png' className="imgageCss"></img>
                    </Link>
                    <div className="right-leftNav" style={{
                        marginLeft:(2*width/3)+ 'px'
                    }} onClick={showNavBarFlag}>
                        <div className="leftNavbar">
                            <label className="labelNar">Explore</label>
                        </div>
                        <div className="leftMobileNavbar">
                            <div className="rightMobileNavbar">
                                <sub className="triangleMobileNavbar"></sub>
                            </div>
                        </div>
                        <div className="rightNavbar">
                            <sub className="triangleNavbar"></sub>
                        </div>
                    </div>
                </div>
                <div className='navbar-container'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{
                        "display": navBarFlag ?'block':'none'
                    }}>
                        <li className='nav-item' >
                            <Link to="/home/" className='hover-trigger' onClick={showNavBarFlag} >
                                Tiaki Taonga Trust
                            </Link>
                        </li>
                        <li className='nav-item2' >
                            <Link to="/aboutTheTrust/content1" ref={divRef1} className='hover-trigger' onClick={closeMobileMenu} >
                                {/*onClick={() => handleMouseEnter('trust','1')} */}
                                About The Trust
                            </Link>
                        </li>
                        <li className='nav-item2' >
                            <Link to="/wai262Flora/content1" ref={divRef2} className='hover-trigger'  onClick={closeMobileMenu}  >
                                {/*onClick={() => handleMouseEnter('flora','2')}*/}
                                Flora and Fauna Claim
                            </Link>
                        </li>
                        <li className='nav-item2' >
                            <Link to="/tePaeTawhiti/content1" ref={divRef3} className='hover-trigger'  onClick={closeMobileMenu} >
                                {/*onClick={() => handleMouseEnter('tePae','3')} */}
                                Te Pae Tawhiti
                            </Link>
                        </li>
                        <li className='nav-item2' >
                            <Link to="/contemporary/content1" className='hover-trigger' onClick={closeMobileMenu}>
                                Contemporary Wai 262
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/library' className='hover-trigger' onClick={closeMobileMenu}>
                                Information Library
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tShirtForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Merchandise
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/registerForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Registry
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/donateForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Donate
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/ourPeopleForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Ko Matou - Our People
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link to='#' className='hover-trigger' onClick={showNavBarFlag}>
                                Close
                            </Link>
                        </li>
                    </ul>
                </div>
                {/*for mobile*/}
                <div className='navbar-container2'>
                    <ul className="nav-menu" style={{
                        "display": navBarFlag ?'block':'none'
                    }}>
                        <li className='nav-item1' >
                            <Link to="/home/" className='hover-trigger' onClick={showNavBarFlag} >
                                Tiaki Taonga Trust
                            </Link>
                        </li>
                        <li className='nav-item1' >
                            <Link to="/aboutTheTrust/content1" ref={divRef4} className='hover-trigger' onClick={closeMobileMenu}>
                                About The Trust
                            </Link>
                        </li>
                        <li className='nav-item1' >
                            <Link to="/wai262Flora/content1" ref={divRef5} className='hover-trigger'  onClick={closeMobileMenu} >
                                Flora and Fauna Claim
                            </Link>
                        </li>
                        <li className='nav-item1' >
                            <Link to="/tePaeTawhiti/content1" ref={divRef6} className='hover-trigger'  onClick={closeMobileMenu}>
                                Te Pae Tawhiti
                            </Link>
                        </li>
                        <li className='nav-item1' >
                            <Link to="/contemporary/content1" ref={divRef6} className='hover-trigger'  onClick={closeMobileMenu}>
                                Contemporary Wai 262
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/library' className='hover-trigger' onClick={closeMobileMenu}>
                                Information Library
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/tShirtForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Merchandise
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/registerForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Registry
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/donateForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Donate
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link to='/ourPeopleForm' className='hover-trigger' onClick={closeMobileMenu}>
                                Ko Matou - Our People
                            </Link>
                        </li>
                        <li className='nav-item3' >
                            <Link to='#' className='hover-trigger' onClick={showNavBarFlag}>
                                Close
                            </Link>
                        </li>
                    </ul>
                </div>
                {/*mobile end */}
                <div  style={{
                    marginLeft: leftOffset + 'px'
                }}
                  className="subCatogoryCss"
                >
                    <Link to="/aboutTheTrust/content1"     className='hidden-div' style={{
                        display : isHovered==='trust'?'block':'none',
                        background: isHoveredMenu==='trust1' ?'#353232':'#4E7838'
                    }} onMouseEnter= {() => handleMenuMouseEnter('trust1','trust')}
                          onClick={(event) => handleParamClick('content1',event)}
                    >
                        About the Trust
                    </Link>
                    <Link  to="/aboutTheTrust/content2"    className='hidden-div' style={{
                        display : isHovered==='trust'?'block':'none',
                        background: isHoveredMenu==='vision' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('vision','trust')}
                           onClick={(event) => handleParamClick('content2',event)}
                    >
                        {/*?selectedMenu=content2*/}
                        The Vision
                    </Link>
                    <Link to="/aboutTheTrust/content3"     className='hidden-div' style={{
                        display : isHovered==='trust'?'block':'none',
                        background: isHoveredMenu==='mission' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('mission','trust')}
                          onClick={(event) => handleParamClick('content3',event)}
                    >
                        The Mission
                    </Link>
                    <Link to="/aboutTheTrust/content4"     className='hidden-div' style={{
                        display : isHovered==='trust'?'block':'none',
                        background: isHoveredMenu==='foundation' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('foundation','trust')}
                          onClick={(event) => handleParamClick('content4',event)}
                    >
                        The Pou(Foundation of The Trust)
                    </Link>
                    <Link to="/aboutTheTrust/content5"    className='hidden-div' style={{
                        display : isHovered==='trust'?'block':'none',
                        background: isHoveredMenu==='purpose' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('purpose','trust')}
                          onClick={(event) => handleParamClick('content5',event)}
                    >
                        The Kaupapa(Purpose) of the Trust
                    </Link>
                    <Link to="/wai262Flora/content1"    className='hidden-div' style={{
                        display : isHovered==='flora'?'block':'none',
                        background: isHoveredMenu==='beginning' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('beginning','flora')}
                          onClick={(event) => handleParamClick('content1',event)}

                    >
                        Beginning of the Wai 262 Claim
                    </Link>
                    <Link to="/wai262Flora/content2"    className='hidden-div' style={{
                        display : isHovered==='flora'?'block':'none',
                        background: isHoveredMenu==='profile' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('profile','flora')}
                          onClick={(event) => handleParamClick('content2',event)}
                    >
                        Taonga Introduced For Protection
                    </Link>
                    <Link to="/wai262Flora/content3"    className='hidden-div' style={{
                        display : isHovered==='flora'?'block':'none',
                        background: isHoveredMenu==='started' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('started','flora')}
                          onClick={(event) => handleParamClick('content2',event)}
                    >
                        How Did The Claim Started?
                    </Link>
                    <Link to="/wai262Flora/content4"   className='hidden-div' style={{
                        display : isHovered==='flora'?'block':'none',
                        background: isHoveredMenu==='about' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('about','flora')}
                          onClick={(event) => handleParamClick('content3',event)}
                    >
                        What is The Claim About?
                    </Link>
                    <Link to="/wai262Flora/content5"     className='hidden-div' style={{
                        display : isHovered==='flora'?'block':'none',
                        background: isHoveredMenu==='released' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('released','flora')}
                          onClick={(event) => handleParamClick('content4',event)}
                    >
                        The Wai 262 Report Released by The Waitangi Tribunal

                    </Link>
                    <Link to="/wai262Flora/content6"    className='hidden-div' style={{
                        display : isHovered==='flora'?'block':'none',
                        background: isHoveredMenu==='tribunal' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('tribunal','flora')}
                          onClick={(event) => handleParamClick('content5',event)}
                    >
                        What Was The Waitangi Tribunal All About?
                    </Link>
                    <Link to="/wai262Flora/content7"    className='hidden-div' style={{
                        display : isHovered==='flora'?'block':'none',
                        background: isHoveredMenu==='recommendations' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('recommendations','flora')}
                          onClick={(event) => handleParamClick('content6',event)}
                    >
                        What Was The Waitangi Tribunal Recommendations?
                    </Link>
                    <Link to="/tePaeTawhiti/content1"    className='hidden-div' style={{
                        display : isHovered==='tePae'?'block':'none',
                        background: isHoveredMenu==='original' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('original','tePae')}
                          onClick={(event) => handleParamClick('content1',event)}
                    >
                        Original Intentions
                    </Link>
                    <Link to="/tePaeTawhiti/content2"     className='hidden-div' style={{
                        display : isHovered==='tePae'?'block':'none',
                        background: isHoveredMenu==='culture' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('culture','tePae')}
                          onClick={(event) => handleParamClick('content2',event)}
                    >
                        A New Approach To Growing Our Culture
                    </Link>
                    <Link to="/tePaeTawhiti/content3"     className='hidden-div' style={{
                        display : isHovered==='tePae'?'block':'none',
                        background: isHoveredMenu==='tawhiti' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('tawhiti','tePae')}
                          onClick={(event) => handleParamClick('content3',event)}
                    >
                        What is Te Pae Tawhiti?
                    </Link>
                    <Link to="/tePaeTawhiti/content4"     className='hidden-div' style={{
                        display : isHovered==='tePae'?'block':'none',
                        background: isHoveredMenu==='engagement' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('engagement','tePae')}
                          onClick={(event) => handleParamClick('content5',event)}
                    >
                        Māori engagement by Te TaumataWhakapūmau
                    </Link>
                    <Link to="/tePaeTawhiti/content5"     className='hidden-div' style={{
                        display : isHovered==='tePae'?'block':'none',
                        background: isHoveredMenu==='wai262' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('wai262','tePae')}
                          onClick={(event) => handleParamClick('content5',event)}
                    >
                        What is Wai 262?
                    </Link>
                    <Link to="/tePaeTawhiti/content6"     className='hidden-div' style={{
                        display : isHovered==='tePae'?'block':'none',
                        background: isHoveredMenu==='outcomes' ?'#353232':'#4E7838'
                    }}  onMouseEnter={() => handleMenuMouseEnter('outcomes','tePae')}
                          onClick={(event) => handleParamClick('content5',event)}
                    >
                        Expected Outcomes
                    </Link>

                </div>
            </nav>
            {/*placeholder div-90px   -- Div occupies the same height as navbar.to avoid the problem of style dislocation
            height: isHovered ? '90px' : '0px' before 20-2-24 , its 90px,but after this day it became 0px in the website..seems ok..i don`t konw why,never mind,
        */}
            <div style={
                {
                    height: isHovered ? '0px' : '0px'
                }
            } ></div>
        </>
    )
}

export default Navbar