import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function CustomCardsItem (props){
    const [showFlag, setShowFlag] = useState("0");

    const showDivByStrInfo = (value) => {
        setShowFlag(value);
    };
    return (
        <>
        <div className="grid2-container">
            <li className="cards__item">
                <div className="custom_cards__item__link">
                    <figure className="custom_cards__item__pic-wrap">
                        <Link style={{
                            backgroundColor: "white",
                        }} to={props.path}>
                            <img src={props.src} alt='Travel Image'
                            className="cards__item__img" />
                        </Link>
                    </figure>
                    <div className="custom_cards__item__info">
                        <label className="custom_cards__item__title">{props.title}</label>
                    </div>
                    <div className="custom_cards__item__info_text">
                        <label className="custom_cards__item__text" style={{
                            fontSize: "22px",
                        }} >{props.text}</label>
                    </div>
                    <div className="custom_cards__item__info" >
                        <label className="custom_cards__item__content"  style={{
                            fontSize: "16px",
                        }} >{props.content}</label>
                    </div>
                    <div className="custom_cards__item__button_div" style={{
                        display:props.hiddenButton=='true'?"none":""}}>
                        <div className="inoneline">
                            <a onClick={() => showDivByStrInfo(props.showdiv)}>
                                <button className='custom_cards__item__button'>Overview of Topics</button>
                            </a>
                            <Link style={{
                                backgroundColor: "white",
                            }} to={props.path}>
                                <button className='custom_cards__item__button'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>

            {/* about the trust*/}
            <div className="viewCardsSmallDiv" style={{
                "display": (showFlag==='1' ) ?'block':'none'
            }}>
                <button className="close-btn" onClick={(e) => setShowFlag("0")}>X</button>
                <div style={{
                    marginTop:"10vh",
                    marginLeft:"5%",
                    marginRight:"5%"
                }}>
                    <h1 style={{
                    }}>
                        Brief Overview of Chapters
                    </h1>
                    <br/>
                    <h1 style={{
                        color:"#74A64D"
                    }}>
                        About The Trust
                    </h1>
                    <br/>
                    <h2 style={{
                    }}>
                        About The Trust
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px",
                    }}>
                        Discover how the trust empowers hapū and whanau through its hapū-centered, non-profit initiatives.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>
                    <br/>
                    <h2 style={{
                    }}>
                        The Vision and The Vision
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Discover the Trust's vision and mission.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        The Pou (Foundation of The Trust)
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Uncover the focal elements of the historic He Wakaputanga, which is the foundational structure governing the trust.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        Treaty of Waitangi in Māori
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Read the important focal context of Te Tiriti o Waitangi first-hand in Maori, and uncover more details through a range of
                        external sources.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>

                    <br/>
                    <h2 style={{
                    }}>
                        The Kaupapa (Purpose) of the Trust
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Learn about the the purpose of the trust through a range of generalised information relating to the Wai 262
                    </h3>
                </div>
            </div>
            {/* 2019 Te Pae Tawhiti*/}
            <div className="viewCardsSmallDiv" style={{
                "display": (showFlag==='2' ) ?'block':'none'
            }}>
                <button className="close-btn" onClick={(e) => setShowFlag("0")}>X</button>
                <div style={{
                    marginTop:"10vh",
                    marginLeft:"5%",
                    marginRight:"5%"
                }}>
                    <h1 style={{
                    }}>
                        Brief Overview of Chapters
                    </h1>
                    <br/>
                    <h1 style={{
                        color:"#74A64D"
                    }}>
                        2019 Te Pae Tawhiti
                    </h1>
                    <br/>
                    <h2 style={{
                    }}>
                        Original Intentions
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px",
                    }}>
                        Explore Kanohi Ora and Te Pae Tawhiti to understand Maori-Crown collaboration and matauranga protection.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>
                    <br/>
                    <h2 style={{
                    }}>
                        A New Approach To Growing Our Culture
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Discover Te Pae Tawhiti's role in advancing Maori identity and matauranga Maori protection for Aotearoa's growth.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        What is Te Pae Tawhiti?
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Explore Te Tumu mō te Pae Tawhiti to understand how it advances Maori and national identity for broader benefits.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        What is Wai 262?
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Explore Ko Aotearoa Ténei for insights into advancing Maori-Crown relations and protecting matauranga Māori.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>

                    <br/>
                    <h2 style={{
                    }}>
                        Expected Outcomes
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Discover Ko Aotearoa Tenei and Te Pae Tawhiti's initiatives for advancing Maori-Crown relations and protectingm¡tauranga Māori.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>
                </div>
            </div>
            {/* Wai262 flora and Fauna Claim*/}
            <div className="viewCardsSmallDiv" style={{
                "display": (showFlag==='3' ) ?'block':'none'
            }}>
                <button className="close-btn" onClick={(e) => setShowFlag("0")}>X</button>
                <div style={{
                    marginTop:"10vh",
                    marginLeft:"5%",
                    marginRight:"5%"
                }}>
                    <h1 style={{
                    }}>
                        Brief Overview of Chapters
                    </h1>
                    <br/>
                    <h1 style={{
                        color:"#74A64D"
                    }}>
                        Wai262 flora and Fauna Claim
                    </h1>
                    <br/>
                    <h2 style={{
                    }}>
                        Beginning of the Wai 262 Claim
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px",
                    }}>
                        Discover the legacy of Wai 262 and its role in protecting taonga and matauranga Maori across Aotearoa.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>
                    <br/>
                    <h2 style={{
                    }}>
                        Profile of Claimants
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Learn about the identified biography for each of the original claimants who formed the Wai 262 Claim.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        Taonga Introduced For Protection
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Delve into a gallery of engaging imagery that represents various taonga that are protected by the Wai 262 Claim.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        How Did The Claim Started?
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Discover how the Wai 262 Claim got started through a range of external resources, and discover its purpose and values.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>

                    <br/>
                    <h2 style={{
                    }}>
                        What is The Claim About ?
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Learn about the Wai 262 claim's fight for Maori control over taonga and tino rangatiratanga.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>

                    <br/>
                    <h2 style={{
                    }}>
                        The Wai 262 Report Released by The Waitangi Tribunal
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Discover the Waitangi Tribunal's Wai 262 report, advocating reforms for Maori culture and Crown-Maori partnership.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>

                    <br/>
                    <h2 style={{
                    }}>
                        What Was The Waitangi Tribunal All About?
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Explore the groundbreaking Wai 262 claim report, advocating Maori control over taonga and enhancing Crown-Maoripartnership.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>
                    <br/>

                    <h2 style={{
                    }}>
                        What Was The Waitangi Tribunal Recommendations?
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Discover how the Tribunal's Wai 262 report advocates for protecting Maori taonga works and kaitiaki rights.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>
                </div>
            </div>
            {/* Contemporary Wai 262*/}
            <div className="viewCardsSmallDiv" style={{
                "display": (showFlag==='4' ) ?'block':'none'
            }}>
                <button className="close-btn" onClick={(e) => setShowFlag("0")}>X</button>
                <div style={{
                    marginTop:"10vh",
                    marginLeft:"5%",
                    marginRight:"5%"
                }}>
                    <h1 style={{
                    }}>
                        Brief Overview of Chapters
                    </h1>
                    <br/>
                    <h1 style={{
                        color:"#74A64D"
                    }}>
                        Contemporary Wai 262
                    </h1>
                    <br/>
                    <h2 style={{
                    }}>
                        Introductory Details
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px",
                    }}>
                        Learn about the comprehensive Wai 262 claim and its impact on protecting Maori matauranga and taonga.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>
                    <br/>
                    <h2 style={{
                    }}>
                        Flora Taonga
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Uncover a gallery of taonga that are covered under the subcategory of Flora Taonga, which covers nature .
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        Fauna Taonga
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Uncover a gallery taonga that are covered under the subcategory of Fauna Taonga, which covers wildlife.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>


                    <br/>
                    <h2 style={{
                    }}>
                        Flora and Fauna Taonga-Conclusion
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Seek an understanding as to why it is important to protect the taonga covered by both the flora and fauna Taonga.
                    </h3>
                    <div className="top-div-show-divider"  style={{
                    }}>
                    </div>

                    <br/>
                    <h2 style={{
                    }}>
                        Protection and Management Plan for Wai 262 Flora and Fauna ContemporaryTaonga
                    </h2>
                    <br/>
                    <h3 style={{
                        fontSize:"16px"
                    }}>
                        Discover the four set of organised plans that will lead the protection of the Māori taonga.
                    </h3>
                </div>
            </div>


        </div>

        </>
    )
}

export default CustomCardsItem