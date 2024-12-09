import React, {useState,useEffect} from 'react'
import { useParams  } from 'react-router-dom'; // import useLocation

import './TePaeTawhitiCard.css';

const TePaeTawhitiCard = () => {
    const { selectedOption } = useParams();
    const decodedOption = decodeURIComponent(selectedOption);
    const [selectedContent, setSelectedContent] = useState(decodedOption);
    const [selectedMenuItem, setSelectedMenuItem] = useState(decodedOption);
    const [displayFlag, setDisplayFlag] = useState(true);
    const hadleDisplayFlag = (value) => {
        setDisplayFlag(!displayFlag);//变更状态
    };

    if(selectedContent==='' || selectedContent===undefined){
        setSelectedContent("content1");
        setSelectedMenuItem("content1");
    }
    const handleMenuClick = (contentId) => {
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
    };
    const handleMenuClick1 = (contentId) => {
        setDisplayFlag(!displayFlag);//变更状态
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
    };
    const handleStepNextClick = (contentId) => {
        if(contentId===null||contentId.selectedContent===""){
            setSelectedContent("content1");
        }
        const lastChar = (contentId.selectedContent).substr((contentId.selectedContent).length - 1);
        const lastDigit = parseInt(lastChar)+1;
        const newStr = "content" + lastDigit.toString();
        setSelectedContent(newStr);
        setSelectedMenuItem(newStr);
    };
    const handleStepPreClick = (contentId) => {
        const lastChar = (contentId.selectedContent).substr((contentId.selectedContent).length - 1);
        const lastDigit = parseInt(lastChar)-1;
        const newStr = "content" + lastDigit.toString();
        setSelectedContent(newStr);
        setSelectedMenuItem(newStr);
    };
    const [expandedTriangle, setExpandedTriangle] = useState(null);

    const handleToggleDetails = (triangleId) => {
        setExpandedTriangle((prevId) => (prevId === triangleId ? null : triangleId));
        setExpandedNewMenu(false);
    };

    const [expandedNewMenu, setExpandedNewMenu] = useState(null);
    const handleNewMenuClick = () => {
        setExpandedNewMenu(!expandedNewMenu);
    };
    useEffect(() => {
        const decodedOption = decodeURIComponent(selectedOption);
        setSelectedContent(decodedOption);
        setSelectedMenuItem(decodedOption);
    }, [selectedOption]);
    return (
        <>
        <div className="trust-container">
            <div className="imgTe-container">
                <div className="textTe-container">
                    2019 Te Pae Tawhiti
                </div>
                <div className="textTeDown-container">
                    {/*Original Intentions*/}
                    Learn About Te Pae Tawhiti and how it responded to the Wai 262 claim, and what its goals are towards assisting the movement`s operations.
                </div>
            </div>

            <div className="te-content-wrapper">
                <div className="fixed-leftTrust">
                    <div className="labelTile-container">
                        Topics/Chapters
                        <label className="right-label---te" onClick={() => hadleDisplayFlag("mobile")} ><sub className="trianglecontem"></sub></label>
                    </div>

                    <div className={`te-labelText-container ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content1')}>
                        Original Intentions
                    </div>
                    <div className={`te-labelText-container ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content2')}>
                        A New Approach To Growing Our Culture
                    </div>
                    <div className={`te-labelText-container ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content3')}>
                        What is Te Pae Tawhiti?
                    </div>
                    <div className={`te-labelText-container ${selectedMenuItem === 'content4' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content4')}>
                        Māori engagement by Te TaumataWhakapūmau
                    </div>
                    <div className={`te-labelText-container ${selectedMenuItem === 'content5' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content5')}>
                        What is Wai 262?
                    </div>
                    <div className={`te-labelText-container ${selectedMenuItem === 'content6' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content6')}>
                        Expected Outcomes
                    </div>
                    {/*for mobile*/}

                    <div className={`te-labelText-container1 ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content1')}>
                        Original Intentions
                    </div>
                    <div className={`te-labelText-container1 ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content2')}>
                        A New Approach To Growing Our Culture
                    </div>
                    <div className={`te-labelText-container1 ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content3')}>
                        What is Te Pae Tawhiti?
                    </div>
                    <div className={`te-labelText-container1 ${selectedMenuItem === 'content4' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content4')}>
                        Māori engagement by Te TaumataWhakapūmau
                    </div>
                    <div className={`te-labelText-container1 ${selectedMenuItem === 'content5' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content5')}>
                        What is Wai 262?
                    </div>
                    <div className={`te-labelText-container1 ${selectedMenuItem === 'content6' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content6')}>
                        Expected Outcomes
                    </div>
                </div>
                <div className="right-container">
                    <div className="scrollable-right">
                        {(selectedContent === 'content1' || selectedContent === null ) && (
                            <div className="">
                                <div className="">
                                    <h1>Original Intentions</h1>
                                    <div className="divimgTeOriginal-container"></div>
                                    <div className="contentTe">
                                        The original claimants requested a recommendation from the Tribunal for an ethical framework for resolution of the issuesaround the use of taonga Maori. What came was the development of a claimant-led strategy for whanau, hapü and iwi; tobe followed by a process of engagement between Maorl and the Crown to develop matauranga protection mechanismsThis process and its engagements is now known as Kanohi Ora.
                                        <br/>
                                        <br/>
                                        The whole-of-government response to the Wai 262 claim provides an opportunity to improve hov we work effectively withand for Maori, to build a thriving Aotearoa for all, port, Ko Aotearoa Tenei, was the Tribunal's first whole-of-governmentreport; and Te Pae Tawhiti is the first whole-of-government response to Wai 262.
                                        <div className="te-top-div-show-divider">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content2' && (
                            <div className="">
                                <div className="">
                                    <h1>A New Approach To Growing Our Culture</h1>
                                    <div className="divimgTeApproach-container"></div>
                                    <div className="contentTe">
                                        <h1 className="contentTepae">
                                        Aotearoa's unique culture and identity has been built over hundreds of years. This includes our relationship with our environmentand intergenerational knowledge of our country. This point of diference provides significant potential for economic, cultural andenvironmental growth.
                                        </h1><br/>
                                        Matauranga Māori is a central component of Te Ao Maori and a major part of our national identity, Te Pae Tawhiti, led by Te PuniKokiri, considers how we can best realise the benefits of our national identity for Maori and all of Aotearoa New Zealand.
                                        <br/>
                                        <br/>
                                        Te Pae Tawhiti addresses the Wai 262 claim, which looked at the Government's role in relation to matauranga Maori. The Wai 262report Ko Aotearoa Tenei found the Government needs to take significant steps to address the issues it highlighted, This wil taketime.as these issues are complex.
                                        <div className="te-top-div-show-divider">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content3' && (
                            <div className="">
                                <div className="">
                                    <h1> What is Te Pae Tawhiti?</h1>
                                    <div className="divimgTe-container"></div>
                                    <div className="contentTe">
                                        Te Pae Tawhiti has a programme of work called Te Tumu mō te Pae Tawhiti that lays foundations for realising our nationalidentity's potential. it includes 1i high priority and widespread focus areas, and nine smaller focus areas already underwayThe focus areas will utilise cross-agency collaboration anl,more clearly fulfil the Wai 262 claim aspirations, This will allowfor tangible outcomes that will benefit Maori and Aotearoa New Zealand more broadly.
                                    </div>
                                    <h1>Programme Chart</h1>
                                    <div className="divimgTe-Chart-container"></div>
                                    <div className="contentTe">
                                        Programme priorities include establishing a domestic bioprospecting regime, a Maori-Crown partnership-based system formatauranga Maori, strengthening Maori involvement in international aqreement- making and measuring progress in theseareas
                                        <br/>
                                        <br/>
                                        Te Puni Kokiri continues to lead Te Pae Tawhiti, using a cross-coordination approach with key agencies, ropǔ Maori andrelevant experts to ensure policies are achlevable and deliver improved outcomes alongside Maori.
                                        <div className="te-top-div-show-divider">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content4' && (
                            <div>
                                <h1> Māori engagement by Te TaumataWhakapūmau</h1>
                                <div className="divimgTeWai262-Maori-container"></div>
                                <div className="contentTe">
                                    Te Puni kokiri is closely working with Te Taumata Whakapümau, the original Wai 262 claimants’ reprasentative ropu. Thisirecognises the kaitiaki role Te Taumata Whakapimau hold to ensure the integrity of the establishment stage process batweenMaori and the Crown.
                                    <br/>
                                    <br/>
                                    Te Taumata Whakapūmau is coortinating a national engagement strategy (Kanohi Ora), The Wai 262 Kanohi Ora Engagement isconnecting local iwi at a national and internatlonal level, focusing on the next steps of the claim. In August 2021. a Wai 262 Symposium was held, This was the first hui led by the Wai 262 representative rōpū, which saw 400 people register to attend,9.600 callective streams and a reach of 15,300 views on social media platforms.
                                </div>
                                <div className="te-top-div-show-divider">
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content5' && (
                            <div className="">
                                    <h1>What is Wai 262?</h1>
                                    <div className="divimgTeWai262-container"></div>
                                    <h1 className="contentTepae">
                                        Wai 262 is the 262nd claim registered with the Waitangi Tribunal, lodged in 1991 by six claimants on behalf of themselves andtheir iwi, The claim examined the Crown's policies and laws that impact indigenous knowledge (mātauranga Māorl) and taonga.including indigenous flora and fauna, the environment, Maori culture and the products of Maori culture.                                    </h1>
                                    <br/>
                                    <h1>The progression of Wai 262</h1>
                                    {/*<div className="divimgTeWai262-Progression-container"></div>*/}
                                    <div className="contentTe">
                                        In July 2011, the Waitangi Tribunal released a pivotal report titled Ko Aotearoa Tenei, that highlights the opportunities andchallenges Maori face in moving into a post-settlement era. Specifically, Ko Aotearoa Tenei recommended vast policy andlegislation reforms relating to health, education, science, intellectual property,indigenous flora and fauna, resource managementconservation, te reo Maori, arts, culture, heritage, Maori involvement in international legal documents that affect Maori rnights, KoAotearoa Tenei lays down a wero for Maori and the Crown to advance their relationship as Treaty partners in a positive andfuture-focussed way.
                                        <br/>
                                        <br/>
                                        An annual report on the Crown's implementation of Waitangi Tribunal recommendations titled the 2018 "Section 8! Report'contained a feature section on the Wai 262 claim that highlighted what the Crown has done since Ko Aotearoa Tenei. There hasbeen important progress in the Government's approach to the protection, use and development of matauranga Maori and otheitaonga. Some examples include the revitalisation of Te Reo Maori through Te Ture mó te Reo Maori and taonga speciesprotections including Resource Management Act reforms, and the Plant Variety Rights Bill, However, the report also clearlyshowed that more needs to be done and this Government is committed to making that happen.
                                        <br/>
                                        <br/>
                                        In 2019, Te Pae Tawhiti established across-agency governance structure and Ministerial Oversight groups that focused on threebroad kete of issues to drive cross-agency collaboration. Since then, there has been considerable progress on the ground that hascontinued to help us to understand what is working and what is not working. As the Government pivots to respond to COViD-19.we have moved away from those arrangements. This has provided us with an opportunity to refocus the approach toopportunities and issues relating to the protection, use and development of matauranga Maori and taonga by taking a morepractical and consistent approach.
                                        <div className="te-top-div-show-divider">
                                        </div>
                                    </div>

                            </div>
                        )}
                        {selectedContent === 'content6' && (
                            <div>
                                <h1> Expected Outcomes</h1>
                                <div className="divimgOutcomes-container"></div>
                                <div className="contentTe">
                                    As Ko Aotearoa Ténei states, Wai 262 provides the Crown with an opportunity to take a different approach and work moreeffectively as a government in the protection, use and development of matauranga Māori and other taonga.
                                    <br/>
                                    <br/>
                                    Te Pae Tawhiti seeks to create sustainable economic opportunities based on our unique place in the world, enhance culturalidentity, and protect and restore the wellbeing of our environment.
                                    <br/>
                                    <br/>
                                    The cross-agency work programme for Te Pae Tawhiti will put in place the foundations needed to promote innovation relating tomatauranga Māori and ensure the benefits of its utlisation and protection are realised by Māori and all of Aotearoa. Striking theright balance between providing protection and enabling the use of matauranga Māori, while advancing a positive Māori-Crownrelationship remains a core focus of Te Pae Tawhiti.
                                    <br/>
                                    <br/>
                                    The overall work programme is lilkely to extend over several years and will require commitment from a range of Ministers andgovernment agencies coming together to wvork alongside each other, Māori, and the wider public.
                                    <div className="te-top-div-show-divider">
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                    {/*<div className="fixed-below-scrollable">*/}
                    <div className="">
                        {selectedContent !== 'content1'  && (
                            <label onClick={() => handleStepPreClick({selectedContent})}>Pre </label>
                        )}
                        {selectedContent !== 'content6'  && (
                        <label onClick={() => handleStepNextClick({selectedContent})}>
                            {selectedContent !== 'content1'  && (
                                <label> | </label>
                            )}
                            Next </label>
                        )}
                    </div>
                    <div className="fixed-below-scrollable">
                        Other Learning Categories
                        <label className="right-label"><sub className="triangleTrust"></sub></label>
                    </div>
                </div>
            </div>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>

        </>

  );
}

export default TePaeTawhitiCard