import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'; // import useLocation
import './Wai262FloraCard.css';
import ImageSlider from './ImageSlider';
const Wai262FloraCard = () => {
    const { selectedOption } = useParams();
    const decodedOption = decodeURIComponent(selectedOption);
    const [selectedContent, setSelectedContent] = useState(decodedOption);
    const [selectedMenuItem, setSelectedMenuItem] = useState(decodedOption);
    const [displayFlag, setDisplayFlag] = useState(true);
    const hadleDisplayFlag = (value) => {
        setDisplayFlag(!displayFlag);//变更状态
    };
    const handleMenuClick = (contentId) => {
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
        if(expandedNewMenu){
            setExpandedNewMenu(!expandedNewMenu);
        }
    };
    const handleMenuClick2 = (contentId) => {
        setDisplayFlag(!displayFlag);//变更状态
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
        if(expandedNewMenu){
            setExpandedNewMenu(!expandedNewMenu);
        }
    };
    const handleMenuClick4 = (contentId) => {
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
        if(expandedNewMenu){
            setExpandedNewMenu(!expandedNewMenu);
        }
    };
    const handleMenuClick1 = (contentId) => {
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
    };
    const handleMenuClick3 = (contentId) => {
        setDisplayFlag(!displayFlag);//变更状态
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
    };

    const [expandedTriangle, setExpandedTriangle] = useState(null);
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
    const handleToggleDetails = (triangleId) => {
        setExpandedTriangle((prevId) => (prevId === triangleId ? null : triangleId));
        setExpandedNewMenu(false);
    };

    const [expandedNewMenu, setExpandedNewMenu] = useState(null);
    const handleNewMenuClick = () => {
        setExpandedNewMenu(!expandedNewMenu);
    };


    const photos = [
        {
            url: "../../public/images/Saana Waitta-Murray.jpg",
        },
        {
            url: "../../public/images/Tamaki Witana.jpg",
        },
        {
            url: "../../public/images/John Hippolite.jpg",
        },
        {
            url: "../../public/images/Tama Poata.jpg",
        },
        {
            url: "../../public/images/Witi McMath.jpg",
        },
        {
            url: "../../public/images/Moana Jackson.jpg",
        },
        {
            url: "../../public/images/null.png",
        },
        // 其他视频卡片数据对象...
    ];

    useEffect(() => {
        const decodedOption = decodeURIComponent(selectedOption);
        setSelectedContent(decodedOption);
        setSelectedMenuItem(decodedOption);
    }, [selectedOption]);
    return (
        <>
        <div className="trust-container">
            <div className="imgWai262-container">
                {/*<div className="textWai-container">*/}
                <h1 className="h1-container">
                    Wai 262 flora and Fauna Claim
                </h1>
                {/*</div>*/}
                <div className="textWaiDown-container">
                    Beginning of the Wai 262 Claim
                </div>
            </div>

            <div className="wai-content-wrapper">
                <div className="fixed-left">
                    <div className="wai-labelTile-container">
                        Topics/Chapters
                        <label className="right-label---wai" onClick={() => hadleDisplayFlag("mobile")} ><sub className="trianglecontem"></sub></label>
                    </div>
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content1')}>
                        Beginning of the Wai 262 Claim
                    </div>
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content8' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content8-1')} >   {/*onClick={() => handleMenuClick('content8')}*/}
                        Profile of Claimants
                        <label className="right-label-Wai" onClick={handleNewMenuClick}><sub className="triangleWai"></sub></label>
                    </div>
                    {expandedNewMenu && (
                        <div className={`wai-labelText-container ${selectedMenuItem === 'content8' ? 'selected' : ''}`}>
                            <label className="content" onClick={() => handleMenuClick1('content8-1')}>Saana Murray</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick1('content8-2')}>Del Wihongi</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick1('content8-3')}>John Te One Hippolite</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick1('content8-4')}>Tama Te Kapua (Tom) Poata</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick1('content8-5')}>Te Witi McMath</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick1('content8-6')}>Moana Jackson</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick1('content8-7')}>Kataraina Rimene</label>
                        </div>
                    )}
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content2')}>
                        Taonga Introduced For Protection
                    </div>
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content3')}>
                        How Did The Claim Started?
                    </div>
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content4' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content4')}>
                        What is The Claim About?
                    </div>
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content5' ? 'selected' : ''}`}>
                        <label className="" onClick={() => handleMenuClick('content5')}>The Wai 262 Report Released by The Waitangi Tribunal</label>
                    </div>
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content6' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content6')}>
                        What Was The Waitangi Tribunal All About?
                    </div>
                    <div className={`wai-labelText-container ${selectedMenuItem === 'content7' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content7')}>
                        What Was The Waitangi Tribunal Recommendations?
                    </div>



                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag === false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick2('content1')}>
                        Beginning of the Wai 262 Claim
                    </div>
                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content8' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag === false ?"block":"none"
                         }}
                         onClick={handleNewMenuClick} >
                        Profile of Claimants
                        <label className="right-label-Wai"><sub className="triangleWai"></sub></label>
                    </div>
                    {expandedNewMenu && (
                        <div className={`wai-labelText-container1 ${selectedMenuItem === 'content8' ? 'selected' : ''}`}
                             style={{
                                 display:displayFlag === false ?"block":"none"
                             }}>
                            <label className="content" onClick={() => handleMenuClick3('content8-1')}>Saana Murray</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick3('content8-2')}>Del Wihongi</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick3('content8-3')}>John Te One Hippolite</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick3('content8-4')}>Tama Te Kapua (Tom) Poata</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick3('content8-5')}>Te Witi McMath</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick3('content8-6')}>Moana Jackson</label>
                            <br/><br/>
                            <label className="content" onClick={() => handleMenuClick3('content8-7')}>Kataraina Rimene</label>
                        </div>
                    )}
                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag === false ?"block":"none",
                             fontSize:"16px",
                         }}
                         onClick={() => handleMenuClick2('content2')}>
                        Taonga Introduced For Protection
                    </div>
                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag === false ?"block":"none",
                             fontSize:"16px",
                         }}
                         onClick={() => handleMenuClick2('content3')}>
                        How Did The Claim Started?
                    </div>
                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content4' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag === false ?"block":"none",
                             fontSize:"16px",
                         }}
                         onClick={() => handleMenuClick2('content4')}>
                        What is The Claim About?
                    </div>
                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content5' ? 'selected' : ''}`}
                        style={{
                            display:displayFlag === false ?"block":"none",
                            fontSize:"16px",
                        }}
                         onClick={() => handleMenuClick2('content5')}>
                        <label className="" >The Wai 262 Report Released by The Waitangi Tribunal</label>
                    </div>
                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content6' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag === false ?"block":"none",
                             fontSize:"16px",
                         }}
                         onClick={() => handleMenuClick2('content6')}>
                        What Was The Waitangi Tribunal All About?
                    </div>
                    <div className={`wai-labelText-container1 ${selectedMenuItem === 'content7' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag === false ?"block":"none",
                             fontSize:"16px",
                         }}
                         onClick={() => handleMenuClick2('content7')}>
                        What Was The Waitangi Tribunal Recommendations?
                    </div>
                </div>
                <div className="wai-right-container">
                    <div className="scrollable-right">
                        {(selectedContent === 'content1' || selectedContent === null ) && (
                            <div className="wai-content1">
                                <div className="">
                                    <h1>When Did the Claim Start and Who Were the Original Claimants</h1>
                                    <label className="content">
                                        Three decades ago, in 1991, six visionaries of kaupapa Māori stepped forward
                                        to assert kaitiakitanga to the Crown in the reclamation of whenua,
                                        moana, wai,
                                        taonga and all mātauranga here in Aotearoa
                                    </label>
                                    <br/><br/>
                                    <h1>These visionaries were</h1>
                                    <div className="grid-container">
                                        <div className="grid-itemTotal">
                                            <div className="grid-item1">
                                            </div>
                                            <div className="item-text">
                                                Saana Waitai-Murray (1925 - 2011)
                                            </div>
                                        </div>
                                        <div className="grid-itemTotal">
                                            <div className="grid-item2">
                                            </div>
                                            <div className="item-text">
                                                Del Wihongi (1936 - 2008)
                                            </div>
                                        </div>


                                        <div className="grid-itemTotal">
                                            <div className="grid-item3">
                                            </div>
                                            <div className="item-text">
                                                John Hippolite (1929 - 1993)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-container">

                                        <div className="grid-itemTotal">
                                            <div className="grid-item4">
                                            </div>
                                            <div className="item-text">
                                                Tama Poata (1936 - 2005)
                                            </div>
                                        </div>

                                        <div className="grid-itemTotal">
                                            <div className="grid-item5">
                                            </div>
                                            <div className="item-text">
                                                Te Witi McMath
                                            </div>
                                        </div>

                                        <div className="grid-itemTotal">
                                            <div className="grid-item6">
                                            </div>
                                            <div className="item-text">
                                                Moana Jackson (1935 - 2022)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-container">

                                        <div className="grid-itemTotal">
                                            <div className="grid-item7">
                                            </div>
                                            <div className="item-text">
                                                Kataraina Rimene
                                            </div>
                                        </div>

                                    </div>
                                    {/*<br/><br/>
                                    <div className="divimg6-container">
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="content">
                                        Three decades ago,in 1991, six visianaries of kaupapa Maori stepped forward to assert kaitiakitanga to the Crawn in thereclamation of whenua, moana, wai, taonga and all matauranqa here in Aotearoa.
                                    </div>
                                    <h1>These visionaries were</h1>
                                    <br/><br/>
                                    <div className="fixed-below-Pou-scrollable">
                                        Saana Waitai-Murray(1925 - 2011)
                                        <label className="right-Pou-label" onClick={() => handleToggleDetails('saana')}><sub className="triangleTrust"></sub></label>
                                        <label className="right-Pou-label">View Details</label>
                                    </div>
                                    <div className="top-div-show-divider-wai">
                                    </div>
                                    {expandedTriangle === 'saana' && (
                                        <div className="content1">
                                            <br/>
                                            <div className="divimg-container">
                                            </div>
                                            <br/>
                                            <br/>
                                            Saana waitai-Muray, was a cultural treasure for te iwi Maori in the fight to protect the intellectual property of te iwi MaoriSaana was the last of the six claimants still alive to recelve the Waitangi Tribunal's War 262 report. At its heart, she toldpeople it was about "Maori cantfal of things Maori" Out of the claim the tribunal has mooted a raft of recommendations toprotect indigenous knowledge which'the government is still considering, Known as the far north matriarch, her final wordsfor those who continued on the claim of the kaupapa was to take this claim from activism to actionism.
                                        </div>
                                    )}
                                    <br/>
                                    <div className="fixed-below-Pou-scrollable">
                                        Del Wihongi(1936 - 2008)
                                        <label className="right-Pou-label" onClick={() => handleToggleDetails('del')}><sub className="triangleTrust"></sub></label>
                                        <label className="right-Pou-label">View Details</label>
                                    </div>
                                    <div className="top-div-show-divider-wai">
                                    </div>
                                    {expandedTriangle === 'del' && (
                                        <div className="content1">
                                            <br/>
                                            <div className="divimg1-container">
                                            </div>
                                            <br/>
                                            <br/>
                                            Hemanui a Tawhaki (Del) wihungi was a founder of the Waipareira Trust and is remembered as a kaitiaki of indigenousflora and fauna for Aotearoa. Del was a leading opponent of genetic engineers who wanted to manipulate and registerpatents on New Zealand plants. She also lobbled the Roval Commisslon on Gienetic Modification for a moratorium onGenetic Engineering research and was a spakeswoman for the long-running Waitangi Tribunal claim to protect cultural andintellectual heritage aspects of native flora and fauna. "Tiaki means to quard. when you speak about things such asknowledge, Maori view the responsiblities of kaitiaki as including the ablity to treat this knowledge as an integral part ofthemseles.                                        </div>
                                    )}
                                    <br/>
                                    <div className="fixed-below-Pou-scrollable">
                                        John Hippolite(1929 - 1993)
                                        <label className="right-Pou-label" onClick={() => handleToggleDetails('john')}><sub className="triangleTrust"></sub></label>
                                        <label className="right-Pou-label">View Details</label>
                                    </div>
                                    <div className="top-div-show-divider-wai">
                                    </div>
                                    {expandedTriangle === 'john' && (
                                        <div className="content1">
                                            <br/>
                                            <div className="divimg2-container">
                                            </div>
                                            <br/>
                                            <br/>
                                            In the late 1960s and early 1970s john Hippolite became increasing ly involved in Maori issues. He was a member of theMaori Organisation an Human Rights (MOOHR), and in 1972 was part of a group in Nelson concerned about the highincidence of Maori crime. Another of johns concerns was conservation. in janwary 1973 he was appuinted to theMarlborough Sounds, Maritime, Park Board. This interest was later recognised by his appointment to the Maori HeritageCommittee of the New Zealand Historic Places Trust in 1991. Becoming involved in two claims to the Waitangi Tribunal: thefakaporewa Claim (Stephens islandl lodged in 1999 and the lindigenous Flara and Fauna Claim, lodged in 1991. As lohnwould say"l represent a large hody af Maori opininn"                                        </div>
                                    )}
                                    <br/>
                                    <div className="fixed-below-Pou-scrollable">
                                        Witi McMath(1940 - 1998)
                                        <label className="right-Pou-label" onClick={() => handleToggleDetails('witi')}><sub className="triangleTrust"></sub></label>
                                        <label className="right-Pou-label">View Details</label>
                                    </div>
                                    <div className="top-div-show-divider-wai">
                                    </div>
                                    {expandedTriangle === 'witi' && (
                                        <div className="content1">
                                            <br/>
                                            <div className="divimg3-container">
                                            </div>
                                            <br/>
                                            <br/>
                                            Witi McMlath was a strong advocate for the protection of al things Mlaori with his comrade Tama Poata, Following concernsover the 'patenting' of native species under the new Plant Variety Rights Act, lohn Hippolite discussed the issues with hisarmy and trade union mates, Tama Poata and Witi McMath, both of vham lang had concerns regarding the actions of theCrown in alienating ancestral land and 'managing threatened and non-threatened native speries in their rahe. Witi foryears had challenged the Crown regarding its confiscation of Hauturu (Little Barrier island), and the eviction of the island'stangata whenua, to turn it into a reserve for tuatara. "we never ceded sovereignty to the Crown. The Crawn does not havethe right to claim ownership of something that is ours by right, given to us by our wwhakapapa, Wve are the kaitiaki, we haveRanqatiratanga and Kawanatanga over all our Mana Moana ki te Mana whenua."                                        </div>
                                    )}
                                    <br/>
                                    <div className="fixed-below-Pou-scrollable">
                                        Tama Poata(1936 - 2005)
                                        <label className="right-Pou-label" onClick={() => handleToggleDetails('Tama')}><sub className="triangleTrust"></sub></label>
                                        <label className="right-Pou-label">View Details</label>
                                    </div>
                                    <div className="top-div-show-divider-wai">
                                    </div>
                                    {expandedTriangle === 'Tama' && (
                                        <div className="content1">
                                            <br/>
                                            <div className="divimg4-container">
                                            </div>
                                            <br/>
                                            <br/>
                                            Tama Poata actively pursued tino rangatiratanga issues since the early 1970s through his roles with the Maor OrganisationOn lluman Rights and Te Raopu Matakite o Aotearoa, Tama was also concemed in general about the eroslon of Mjori rightsby the Crown through legislatian and executive power. Alongside his fellew advocate, Witl McMath, Tama and john Hippolite joined forces with Eva Rickard, with the assistance of Moana jackson, drafted and lodged a claimn for the 'Queen'sChain' (Wai 172) in October 1990, The claim asserted that the Crown had no authority to cstablish the Queen's Chain, as ithad not approached the various iwi, hapu and whanaw in their tribal areas. As with Wa 262, Tama, Eva and john wereacting as individuals in a claim which was not iwi-based but which would uitimately benefit alliwi, "We need to remainfearless, but fair. if we don't tell these stories then we'l get people from outside who will come inta New Zealand, makcfilms and tell the stories."
                                        </div>
                                    )}
                                    <br/>
                                    <div className="fixed-below-Pou-scrollable">
                                        Kataraina Rimene
                                        <label className="right-Pou-label" onClick={() => handleToggleDetails('kataraina')}><sub className="triangleTrust"></sub></label>
                                        <label className="right-Pou-label">View Details</label>
                                    </div>
                                    <div className="top-div-show-divider-wai">
                                    </div>
                                    {expandedTriangle === 'kataraina' && (
                                        <div className="content1">
                                            <br/>
                                            <br/>
                                            Kataraina Rimene, along with Saana Waitai-Murray and Del wihongi were equally concemed aver Crown contral of accessto, and commercialisation of, taonga plant species. Prohibitions on the 'cultural harvest' of traditianal foods such as kereruand kuaka, and the appropriation ot ancestral lands by the Crown to create 'reserves' to conserve species such as the flaxsnail, pupuharakeke, was a major concern for Saana, As a representative for Ngati Kahunyunw, Kataraina long held herposition in the Wai 262 claim with the suppart of her iwi, Wawihi te taura harakeke engari anó mo te taura whakapapayou can break the flaxen rope but not the bonds of whakapapa " that extends to the taiae and our whakapape toPapatuanuku. lt is our inalienable obligatian to protect our whakapapa.
                                            These six tupuna laid their claim, being the 262nd claim, with the Waitangi Tribunal, wai 262 is commonly known as theFauna, Flora and intellectual Property Rights claim, which sought the protection of taonga Maori by tangata Maori(protection, conservatian, management, treatment, propagation, sale, dispersa, utlisation, and restriction on the use of andtransmission of the knowledge of New Zealand lndigenous Flora and Fauna and their resources).
                                            The first taonge introduced for protection were Kumara, p6hutwkawa, koromiko, puawananga, pipuharakeke, tuatara andkereruikukupa. w'ith others added over time.
                                            As Wai 262 progressed so too did the whanau, hapu and iwi within Wai 262 as they continued the active protertion oitaonga and matauranga Miori within their iwl and rohe, However, it hasn't stopped there, the claim now forms thestepping stones for the protection of taonqa and mātauranga Miori across Aotearoa.
                                        </div>
                                    )}
                                    <br/>
                                    <br/>
                                    <h1>
                                        Conclusion
                                    </h1>
                                    <br/>
                                    These six tupuna laid their daim, being the 262nd claim, with the Waitangi Tribunal. Wai 262 is commonly known as theFauna, Flora and lntellectual Property Rights claim, which sought the protection of taonga Māori by tāngata Māori(protection, conservation, management. treatment, propagation, sale, dispersal, utilisation, and restriction on the use of and
                                    transmission of the knowledge af New Zealand lndigenous Flora and Fauna and their resources).
                                    <br/><br/>
                                    The first taonga introduced for protection were Kǔmara, pōhutukawa, koromiko, puawananga, pǔpǔharakeke, tuatara and kererǔ/kǔkupa, with others added over time.
                                    <br/><br/>
                                    As Wai 262 progressed so too did the whānau, hapǔ and iwi within Wai 262 as they continued the active protection oftaonga and mātauranga Māori within thelr iwi and rohc, Howvever, it hasn't stopped there. the claim now forms thestepping stones for the protection of taonga and mātauranga Māori dcross Aotearoa.
                                */}
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content2' && (
                            <div className="">

                                <h1>Taonga Introduced for Protection</h1>
                                <div className="content">
                                    <br/><br/>
                                    <h2>
                                        The first taonga introduced for protection were Kūmara, pōhutukawa,
                                        koromiko, puawānanga, pūpūharakeke, tuatara and kererū/kūkupa. With
                                        others
                                        added over time.
                                    </h2>
                                    <br/>
                                    <br/>
                                    <h3>
                                        Gallery of Taonga Introduced for Protection
                                        Kumara
                                        <br/>
                                        (Swipe or click on the arrows to view more)
                                    </h3>
                                </div>
                                <div className="">
                                    <ImageSlider />
                                </div>
                                <br/>
                            </div>
                        )}
                        {selectedContent === 'content3' && (
                            <div className="">
                                <h1>How Did the Wai 262 Flora and Fauna Claim Began?</h1>
                                <br/><br/>
                                <div className="divimg5-container">
                                </div>
                                <br/>
                                <h1>The WAl 262 claim began in the 1960's and 70's, when a group of Māori rights activistschallenged the Crown about some of the policies and laws that were taking away Māori control over our taonga.</h1>
                                <br/>
                                <br/>
                                <div className="content">
                                    In October 1991, Saana Murray (Ngāti Kuri), Hema Nui A Tawhaki (Te Rarawa), lohn Hippolite (Ngāti Kōata), Tama Poata (Te-Whanau-0-Ruataupare), and Witi McMath (Ngāti Wai) with the assistance of lawyer Moana jackson (Ngāti Kahungunu)lodged the Treaty of Waitangi (the Treaty) WAl 262 Native Flora and Fauna Claim with the Waitangi Tribunal.
                                </div>
                                <h1>References</h1>
                                <br/><br/>

                                <label className="content">
                                    For more about the Waitangi Tribunal, and the 262 claim, see its website at
                                </label>
                                <label className="contentBlack" >
                                &nbsp; http://www.justice.govt.nz/tribunals/waitangi-tribunal/news/wai-262-ko-aotearoa-tenei-report-on-the-wai-262-claim-released.
                                </label>
                                <div className="top-div-show-divider-wai">
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content4' && (
                            <div className="">
                                <h1>About The Wai 262 Flora and Fauna Claim</h1>
                                <br/>
                                <div className="divimg7-container">
                                </div>
                                <br/>
                                <div className="content">
                                    On October 1991, Saana Murray-Waitai (Ngati Kuri), Del Wihongi (Te Rarawa), john Hippolite (Ngat Koata), Tama Poata (Te.Whanau-0-Ruataupare, Ngati Porou) Witi McMath (Ngati Wai) with the assistance of lawyer Moana jackson (NgatiKahunqunu) lodged the Native Flora and Fauna and intellectual Property Rights Claim with the Waitangi Tribunal.
                                    <br />
                                    The aspiration of the claim firmly asserts "Maori control over things Maori", The claim essentially seeks to restore "tinorangatiratanga" (Maori authority and self-determination) of the whanau, hapü and iwi of Aotearoa over our "taonga" (thosethings and values which we treasure, both intangible and tangible).
                                </div>
                                <h1>What happened to the Wai 262 flora and fauna claim after the 1990's?</h1>
                                <br/><br/>

                                <div className="content">
                                    After the claim was lodged in 1991, it was amended in 1993 to include international law matters such as the impact ofinternational Trade Agreements (like the 'Gatt:Trips Agreement"), intellectual Property Rights (e.g. how Copyrights,Trademarks and Patents over taonga affect Maori control over the same), and New Zealand compliance with internationally.recognised indigenous Peoples Rights, The aspiration of the claim firmly asserts "Maori control over things Maori". The claimessentially seeks to restore "tino rangatiratanga" (Maori authority and self-determination) of the whanau, hapǔ and iwi ofAotearoa over our "taonga" (those things and values which we treasure, both intangible and tangible).
                                    <br />
                                    <br />
                                    In 1997, the first Waitangi Tribunal hearing was held at Motuti, in the Far North. lt took to 2003 to hear all the claimantevidence around the motu, and it wasn't until 2010 that the Waitangi Tribunal released the Reo Chapter of its report. TheTribunal finally released its complete report, titled "Ko Aotearoa Tenei" ('This is Aotearoa' or "This is New Zealand'”), in 2011By this time, Saana Murray of Ngati Kuri was the only remaining claimant alive. Sadly, Saana passed away later thatsame year.
                                </div>

                                <h1>Where ls the Wai 262 Claim Now?</h1>
                                <br/><br/>
                                <div className="content">
                                    At the time of its release in 2011, the Crown promised to consider the Tribunal's report, but stated that it would not berushed into responding. 2 While the Crown admits the 262 report has far-reaching implications across a wide range ofGovernment policies, iwi claimants are still waiting for the Crown's comprehensive response.
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content5' && (
                            <div>
                                <h1>The Wai 262 Report Released by The Waitangi Tribunal)</h1>
                                <div className="divimg8-container"></div>
                                <br/><br/>
                                <div className="content">
                                    The Waitangi Tribunal today (2 july 2011) released its report into the Wai 262 claim,recommending wide-ranging reforms to laws and policies affecting Maori culture andidentity and calling for the Crown-Māori relationship to move beyond grievance to anew era based on partnership.
                                    <br/>  <br/>
                                    <h1 className="h4">Where was the Waitangi Tribunal Report “Ko Aotearoa Tenei” released?</h1>
                                    <br/>
                                    <br/>
                                    The Waitangi Tribunal " Ko Aotearoa Tenei report was released at Roma Marae/ Ahipara, Far North in 2011. The onlysurviving original claimant was Whaea Rangatira Saana Murray, Moana jackson ( Ngati Kahunqunu) and Hori Parata(representing Ngati WVai on behalf of witi McMath).
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content6' && (
                            <div>
                                <h1>In Broad Terms, What Did the Waitangi Tribunal Report Say About the 262 Claim?</h1>
                                <div className="divimg9-container"></div>
                                <br/><br/>
                                <div className="content">
                                    The 262 claim is widely recognized as one of the most complex and far-reaching ever to come before the Waitangi TribunalThis was also the Tribunal's first "whole-of-government' report, addressing the work of around 20 governmentdepartments,agencies, and Crown entities.
                                    <br/><br/>
                                    The Tribunal affirmed the claimants&:#39: right to have appropriate control in key decision-making regarding things theyconsidered to be "taonga" (things of value). The Tribunal also acknowledged the Crown Treaty obligation protect theclaimants’ exercise of kaitiakitanga as vital to the ongoing expression of hapu and iwi culture and identity. However, theTribunal found that, in violation of the Treaty, Crown laws and policies often transferred decision-making control to othersDepriving Maori of their rights in this way had a compounding effect on Maori social disparity generally (for example in theareas of education,employment, income, and health).
                                    <br/>
                                    <br/>
                                    To address this unjust situation, the Tribunal saw its report as providing a framework for the long overdue and truepartnership between Maori and the Crown as promised under the Treaty, lt believed its recommendations gave appropriateguidance as to how that Treaty partnership could be expressed in many areas of concern for the claimants. such aseducation, science, culture and heritage, conservation, resource management, indigenous flora and fauna, language, andpatents, At the same time, however, the Tribunal made a point of limiting claimant expectations of 'absolute' tinorangatiratanga under this claim by emphasizing the need to 'fairly and transparently' balance Maori rights against the rightsof the Crown (to govern, for example) and other New Zealanders withi an interest.
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <h1>What Did the Claimants Think About the Report?</h1>
                                <div className="content">
                                    The report was widely acknowledged by both claimants and the Crown as a significant milestone in the decades longconversation to address the claimants' grievances, it was also an opportunity to remember and honour al, past and presentwho had contributed to the kaupapa thus far.
                                    <br/><br/>
                                    In the Tribunal inquiry, the claimants gave extensive evidence of their tino rangatiratanga over all their taonga which theclaimants declared they never ceded. As such, high hopes were placed on the Tribunal to produce findings andrecommendations that would have the potential to truly transform the claimant iwi-Crown relationship, While helpfulhowever, many claimants felt the Tribunal could have gone further in the report to fully acknowledge their tinorangatiratanga and gricvances against the Crown and make stronger recommendations for resolving those grievances.
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content7' && (
                            <div>
                                <div className="specificPage">What Was Waitangi Tribunal Recommendations?</div>
                                <br/><br/>
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 1: Māori “Taonga Works" and intellectual Property
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('Works')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'Works' && (
                                    <div className="contentWai">
                                        <div className="divimg10-container">
                                        </div>
                                        <h1 className="contentBlack">"Taonga works" are artistic and cultural creations that are significant to the culture oridentity of iwi or hapǔ - for example, haka (ritualistic performance often intended tointimidate one's opponent), tā moko (ritualistic markings of the skin) or whakairo(carving).</h1>
                                        <br/>
                                        The Tribunal found that the Crown had a Treaty obligation, which it had failed to fulfil, to actively protect "to the greatestextent practicable" the interests of kaitiaki Maori in such taonga works. This resulted, among other things, in such taongaworks being used in unauthorized, offensive or derogatory ways (for example, using the Te Rarawa waharoa in the designof a coffee table). Having said that, the Tribunal reiterated that kaitiaki's rights and the Crown's obligations must be fairlybalanced alongside other interests, lilke authors of books or film-makers who may have used or drawn from such taongaworks for their creations.
                                        <br/>
                                        The Tribunal recommended among other things, that the Crown establish a system, including a Commission, to deal withcomplaints and assess affected kaitiaki interests, alongside others' interests, on a case-by-case basis.
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 2: Māori “Taonga Species"
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('Species')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'Species' && (
                                    <div className="contentWai">
                                        <h1 className="contentBlack">"Taonga species" are flora and fauna significant to iwi or hapù culture or identity. For TeRarawa for example, these include the kumara, and certain indigenous species found inthe Tangonge wetlands and the Warawara forest.</h1>
                                        <br/>
                                        The Tribunal found that the Crown had a Treaty obligation, which it had failed to fulfil, to provide "a reasonable degree ofprotection" of the interests of kaitiaki Maori in such taonga species and associated "Biological resources" (physical materialof value - including "Genetic resources" containing species DNA). The Crown's fallure resulted, among other things, in thesetaonga species being used in unauthorized, olfensive or derocatory wavs (for example, the mixing ar modification ofgenetic material.or "bioprospectingand commercialisation of biological resources for profit by business and industry)claimants' contention that iwi and hapǔ had ownership rights in taonga speciesHaving said that, the Tribunal reiected theIt also reiterated tnat laitiaki montCrown's obligations to protect kaitiaki rights must be fairly balanced alongsideother interests,lkceintelectual oroperty riants holders
                                        <br/>
                                        <br/>
                                        3 Forrerly known as the Te Rarawa "lintel", an historical ca"ving currently housed in the Te Ahu museum at Kaitala and used for
                                        brarding purposes by Te RÃnanga o Te Rarawa.
                                        <br/>
                                        <br/>
                                        To address these failures the Tribunal recommended giving greater weight to kaitiaki interests when making decisions under theHazardous Substances and New Oroanisms Act 1996 anolt genelically modified organisms,lt also recommended changes tolaws and processes relating to patents, plant veriety rights and management of Department of Conservation estates (includingestablishing a Maori advisory ccmmitee) to help better monitor and protect taonga spcdies. and associated Maori traditionalknowvledge and kaitiaki interests.
                                        <br/>
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 3: Natural Resource Management
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('NaturalResource')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'NaturalResource' && (
                                    <div className="contentWai">
                                        <h1 className="contentBlack">This chapter of the report focused on protection of Maori environmental taonga (andassociated kaitiaki responsibilities) under the Resource Management Act 1991 ("RMA")Environmental taonga includes things as land, natural features, waterways, wāhi tapu,pā sites, and flora and fauna.</h1>
                                        <br/>
                                        The Tribunal found that the Crown had a Treaty obligation, which it had falled to fulfil, to actively protect "to the greatestextent practicable" the interests of kaitlaki Maori in thelr environmental taonga, This was because the RMA, while provldingmechanisms for balancing competing interests in the environment, was not implemented in ways that ensured decision-making with an appropriate degree of consideration of kaitiaki interests. For example, decision-making authority (normallyreserved for regional and local councils) was rarely delegated to iwi, even though it was possible to do so. Also, iwimanagement plans", had little influence over local authority decision making.
                                        <br/>
                                        <br/>
                                        To address these grievances, the Tribunal recommended a number of amendments to the RMA, and that local authoritiesrelationships with kaitiaki be strengthened to ensure more meaningful integration of kaitiaki environmental priorities intodecision - making. This would involve effective 'iwi resource management plans' which are binding on local authoritydecision-making (just as regional policy statements, regional plans, and district plans are). This in turn would require the_rown to properly resource iwi plan development, The Tribunal reminded, however, about the need to fairly balance theinterests of others such as property owners and the wider community affected by resource use.
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 4: Management of the Conservation Estate
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('ConservationEstate')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'ConservationEstate' && (
                                    <div className="contentWai">
                                        <h1 className="contentBlack">This chapter concerns taonga controlled by the Department of Conservation ("DOC"such as lands (e.g, located at Tauroa), forests (like the Warawara), flora and fauna,natural features,and waterways.</h1>
                                        <br/>
                                        The Tribunal found that despite considerable DOC efforts, the Crown failed to protect, "to the greatest extent practicable"the authority of iwi and hapü in relation to these taonga. it proposed that, consistent with the Treaty partnership, theCrown harmonize Maori cultural values and the '"preservationist' conservation approach to create a new model of "kaitiakiconservation". The key underlying principles would be, first, the survival and recovery of the environment; and second, thehapÃº and iwi right to exercise kaitiakitanga and maintain their culture.
                                        <br/>
                                        <br/>
                                        The Tribunal made a number of recommendations including the establishment of new national and regional partnershipstructures to give Maor an eqwal voice with the New Zealand Conservation Authority and regional conservation boards insetting conservation obiectives and priorities, $econd, that at a local level D0C share decision-making with tangata whenuaconcerning taonga 'customary use’ (harvesting and use of plants or resources from wildlife for traditional purposes likeweaving, carving, and ceremonial rituals). Third, amendments to the Wildlife Act 1953 to enable Crown-Maori sharedmanagement of protected wildlife (and to ensure that no one, including the Crown, may 'own' it). further, that DOcimprove thelr tangata whenua consuitation around awarding concesslons (e.4. for bee hive space or tourist operations) andcommercial contracts (e.g, for pest control) in the conservation estate.
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 5: Te Reo Māori (The Māori language)
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('TeReo')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'TeReo' && (
                                    <div className="contentWai">
                                        <br/>
                                        Te reo Maori goes to the heart of Maori culture and identity. in a 1986 report the Tribunal found that te reo Maori wasseriously threatened. The Crown responded with a number of Crown initiatives since then, including making te reo Maori anofficial language; establishing the Maori Language Commission.(later known as Te Taura Whiri i Te Reo Maori); creating TeMangai paho to fund Maori TV and radio broadcasting, and support for köhanga reo (Maori language early childhoodcentres), kura kaupapa (Maori language schools) and wananga (Maori higher learning institutes). Despite this, theproportion of Maori who spoke te reo and participation across Kohanga, kura and wananga continued to decline, with thesituation approaching "crisis point"                                        <br/>
                                        <br/>
                                        While acknowledging that Maori have an equal if not greater role in the survival and growth of their language, the Tribunalfound that this decline was also due to the lack of Crown support for te reo in key strategic areas. in particular, the Crownfailed to ensure the provision of quality teachers and effective educational prograrns and resources (a symptom of adysfunctional education bureaucracy).
                                        <br/>
                                        The Tribunal recommended that Te Taura Whiri's role and powers be strengthened and broadened to ensure accountabilityof all Govermment agencies for their responsibilities towards the language. Those responsibilities were to include the setting of more meaningful and ambitious targets for language revival; and development and implementation of effective plans,policies and resourcing for the provision of public services in te reo (as well as English).
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 6: Māori knowledge (Mātauranga Māori) and Education
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('knowledge')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'knowledge' && (
                                    <div className="contentWai">
                                        <h1 className="contentBlack">Mātauranga Māori includes Māori language, "taonga works" (see above), science andtechnology, laws, history, systems of property and value exchange, and rituals andceremonies.
                                        </h1>
                                        <br/>
                                        While the whole 262 claim relates in some way to matauranga Maori, this chapter focuses on those Crown agencies havinacore respansibilities for New Zealand's (including Maori) culture, heritage, education, and science. Such agencies include thestate-funded education and science sectors; Te Papa Tongarewa; the National Library, Archives New Zealand; state-fundedbroad-casting: Creative New Zealand; and the Ministry of Culture and Heritage.
                                        <br/>
                                        As with te reo Maori, the Tribunal found that whanau, hapū and iwi have primary responsibility for preserving andtransmitting matauranga, However, the Crawn also had a Treaty obligation to actively protect taonga Maori includingmatauranga Maori, The Tribunal found that although certain agencies responsible for preserving and transmittingmatauranga Maori contributed positively, the effectiveness of fulfiling this Treaty obligation across all Governmentagencies was inconsistent, For example, matauranga Maori in public archives may be used without kaitiaki consentmatauranga Maori still struggles to compete for science funding, and Maori in mainstream English-medium education stilldo not enjoy the same level and quality of Crown support that Maori-medium education does
                                        <br/>
                                        The Tribunal made a range of recommendations relating to Government agencies across the board. Central to these was theesta blishment of cffective Treaty partnerships to support matauranga Maori in the education, science, and culture andheritage sectors, with a focus on improving shared decision-making about objectives and implementation. The Tribunal alsocalled upon Crown agencies to act in a more coordinated manner in developing matauranga policies.
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 7: Rongoa Māori (Māori Traditional Healing Practices)
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('Education')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'Education' && (
                                    <div className="contentWai">
                                        <h1 className="contentBlack">
                                            Rongoa is traditional Māori healing. lt is premised on a holistic understanding of bothphysical and spiritual wellbeing operating within a wider philosophical context ofpeople, places and events as having tapu (restrictive) or noa (common or profane)dimensions.
                                        </h1>
                                        <br/>
                                        Violations of tapu invite ill consequences, such as disease. Therefore, tohunga (healers) use the intangible rongoa of karakiaand ritenga (incantations and rituals), as well as tangible rongoa like mirimiri (massage) and traditional plants-basedremedies with well-established medicinal benefits.
                                        <br/>
                                        The Tribunal affirmed that the Crown had a Treaty obligation to protect, "to the greatest extent practicable", the authorityof iwi and hapü in relation to their taonga, including the practice of rongoa and the matauranga Maori on which it is basedHowever, the Crown vialated this obligation with the Tohunga Suppression Act 1907. The Act, which remained in force until1962, criminalized tohunga rongoa practices, The practice of rongoa has also been severely undermined by environmentaland social changes such as the clearing of bush and urbanisation, which have separated Maori from their rongoa sources.Today, Maori feature disproportionately in the negative health statistics with significantly lower life expectancy, and higherrates of infant mortality, suicide, heart disease, diabetes, asthma and many other illnesses.
                                        <br/>
                                        The Tribunal found that while increased use of rongoa has the potential to help restore Maori wellbeing, current support forit lacks urgency and remains inadequate and in violation of the Crown's Treaty obligations. The Tribunal thereforerecommended that the Crown urgently recognize the significant potential of rongoa for improving Maori health, gather datato determine the current Maori use of and demand for rongoa services, and expand such services in the health systemaccordingly (including by supporting the national rongoa organisation Te Paepae Matua). The Tribunal also recommendedthat the Ministry of Health and DOc work together to ensure the availability of rangoa plants and access to them bytohunga.
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    Kete (Chapter) 8: international instruments and Their lmpact on Māori Rights
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('Rights')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider-wai">
                                </div>
                                {expandedTriangle === 'Rights' && (
                                    <div className="contentWai">
                                        <h1 className="contentBlack">
                                            This chapter relates to the processes by which the Crown (primarily through theMinistry of Foreign Affairs and Trade) engages with Māori when it develops NewZealand's position on, and binds New Zealand to obligations under, internationalinstruments (such as treaties and declarations).
                                        </h1>
                                        <br/>
                                        As the world has become increasingly globalised, this area has become increasingly important in terms of its effects on agrowing variety of Maori rights and interests ranging from climate change to trade, to human rights.
                                        <br/>
                                        Violations of tapu invite il consequences, such as disease. Therefore, tohunga (healers) use the intangible rongoa of karakiaand ritenga (incantations and rituals), as well as tangible rongoa like mirimiri (massage) and traditional plants-basedremedies with well-established medicinal benefits.
                                        <br/>
                                        The Tribunal acknowledged that the Crown has a right to represent New Zealand internationally and to make foreign policyHowever, when such affects Maori rights and interests the Crown is obliged to actively protect those rights and interests'to the extent that is reasonable and practical under the circumstances". This requires the Crown to infor'n and consultMaari when it is developing New Zealand's position. in cases where an instrument relates to "a matter of core importanceto Maori, the Tribunal found that the Crown was obliged to obtain Maori consent, The Tribunal observed that current Crownpractices fail to complv with this standard.
                                        <br/>
                                        The Tribunal made several recommendations including mandatory Crown engagement with Maori on international Treatiesboth binding and non -binding instruments, and that the Crown go beyond consultation where appropriate to the natureand strength of the Maori interest, To facilitate this, the Crown must identify (ar help create where they do not exist)appropriate Maori engagement forums. The Crown should alsa implement a policy, co-designed with Maori, for fundingindependent Maori engagement in international forums. 0ther accountability mechanisms included regular reporting to iwiand Maori orqanisations on Crown actions relating to intemational instruments, and to Parliament's Maori Afairs SelectCommittee, and that the National interest Analysis carried out when Parliament considers international instrumentsincludes cansideration of any effect on Treaty rights ana interests
                                    </div>
                                )}
                                {expandedTriangle === 'Rights' && (
                                    <div className="top-div-show-divider-wai">
                                    </div>
                                )}
                            </div>
                        )}
                        {selectedContent === 'content8-1' && (
                            <div className="contentWai">
                                <div className="">
                                    <h1>Saana Murray</h1>
                                    <h1>Ngati Kuri</h1>
                                    <label style={{
                                        fontSize:"16px"
                                    }}>22 November 1925 – 3 September 2011</label>
                                </div>
                                <div className="imgSaana-container">
                                </div>
                                <h1>Biography</h1>
                                <label className="content">
                                    Saana Murray was a poet, a master weaver, a conservationist, a politician and an elder of Ngati Kuri. One of the initial
                                    claimants of Wai 262, she was a firm believer that the Treaty of Waitangi guaranteed the custodianship of Maori things by
                                    Maori people, and it pained her that that guarantee had not been honoured. Her mother, Ngaio, made her promise to keep
                                    fighting for the ratification of Te Tiriti o Waitangi, solidifying Saana s staunch commitment to the interests of Māori. Her
                                    ultimate desire was to build a whare taonga, an outpost school, where young people disconnected from their whenua could
                                    reconnect back to the kāinga
                                    <br/>
                                    <br/>
                                    Saana was the eldest of 13 children of her father Rapine Romana and mother Ngaio Romana. Saana went everywhere with
                                    her parents and extended whanau, she was involved with growing kumara, corn and potatoes at Kapo Wairua, gathering
                                    kaimoana all around the shores of Muriwhenua, digging gum and mustering stock on their tribal lands.

                                    <br/>
                                    <br/>
                                    She was trained as a nurse but left when she got married to Tupari Waitai, who died in a car accident at 31 years of age,
                                    leaving Saana widowed with five children. She later married Nicholas Murray, who was the son of farmer and businessman
                                    Scotty and Erana Murray. For many years, they lived, worked and grew their family in Auckland. Nicholas Murray passed
                                    away in 1983.
                                    <br/>
                                    <br/>

                                    When she was in Auckland, Saana was asked to teach Maori studies classes in Hillary college which she did for a few years.
                                    In 1970 she persuaded the Auckland regional council to exempt Wahi Tapu in Mt Wellington from being developed.

                                    <br/>
                                    <br/>
                                    She was also one of the protestors, along with Tama Poata and Maori rights organisation who protested on the steps of
                                    parliament for Maori rights.

                                    <br/>
                                    <br/>
                                    Saana was also a writer, producing waiata and poetry in both English and te reo Māori. Her first publication, Te Karanga a
                                    Te Kotuku/The call of the White Heron", came out in 1972 and it outlined Ngati Kuri struggle for lands from a Maori
                                    perspective.
                                    She was also responsible for forming Tu Kotahi, which successfully placed a restraining injunction on the Te Hapua 42
                                    Incorporation to prevent it from exchanging Kapo Wairua and nearby lands with Northern Pulp and the Crown.

                                    <br/>
                                    <br/>
                                    Saana possessed a deep knowledge of te ao Māori, particularly within the arts. Taught by her parents and kuia, she was a
                                    master weaver. Wherever Saana went, she always carried weaving materials like pīngao, harakeke, or kōrari with her. She
                                    taught many people to weave and encouraged them to use their weaving skills for the betterment of themselves, te taiao,
                                    and Māori everywhere.

                                    <br/>
                                    <br/>
                                    By forming a friendship with the DSIR's Dr Oliver Sutherland, who initiated trial crops of peanuts and pineapples as a
                                    counter to afforestation, she highlighted the need to conserve and increase traditional resources for weaving (flax, pingao,
                                    kiekie, hoihere, raupo and kakaho).

                                    <br/>
                                    <br/>
                                    The Te Hapua Traditional Arts and Crafts Trust was formed in the 1970s, which was intended to foster weaving and other
                                    customary arts and crafts in the Far North. The first tutor of the Trust was Nanny Neta Paraone, and she assististed and
                                    tutored the mokopuna me nga whaea nga wahine o Te Hapua to harvest korari, prepare and weave beautiful kete. In June
                                    1981 at the Outreach Arts Centre, Auckland, the first exhibition of Maori flax weaving was held.

                                    <br/>
                                    <br/>
                                    In 1974, Maori Organisation on Human Rights published Te Karanga a Te Kotuku: Some Records of the Land Struggle of
                                    Saana Murray and her people of Te Hiku o Te Ika, which includes letters and poems written by Saana expressing her people s
                                    struggle for land rights. This led to the 1975 Maori land march against the continual confiscation of Maori land, which left
                                    from Saana s home of Te Hapua.

                                    <br/>
                                    <br/>
                                    For her contributions to Māori, Saana was made a Companion of the New Zealand Order of Merit (CNZM) in 2009 and
                                    awarded the New Zealand Suffrage Centennial Medal in 1993 as well as the Queen s Service Medal (QSM). As an artist, she
                                    was appointed to the Arts Council of New Zealand in 1998, recognised for Lifetime Service and Dedication to Raranga
                                    Whatu at Te Roopu Raranga Whatu o Aotearoa s 2001 National Weavers Hui, and inaugurated as an esteemed member
                                    of Te Kāhui Whiritoi in 2006.

                                    <br/>
                                    <br/>
                                    Her last public appearance was at Roma Marae, Ahipara, on July 2, 2011, to hear the Waitangi Tribunal deliver its findings on
                                    the WAI262 claim.

                                    <br/>
                                    <br/>
                                </label>
                                {/*<div className="right-left">*/}
                                    {/*<div className="imgMurraySecond-container"></div>*/}
                                    {/*<div className="imgMurrayThird-container"></div>*/}
                                {/*</div>*/}
                                {/*<div className="imgMurrayJoined-container"></div>*/}

                                <div className="grid2-container">
                                    <div className="grid-itemTotal">
                                        <div className="imgMurraySecond-container">
                                        </div>
                                    </div>
                                    <div className="grid-itemTotal">
                                        <div className="imgMurrayThird-container">
                                        </div>
                                    </div>
                                </div>
                                <div className="grid2-container">
                                    <div className="grid-itemTotal">
                                        <div className="imgMurrayJoined-container">
                                        </div>
                                    </div>
                                    <div className="grid-itemTotal">
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <h3>Te Kāhui Whiritoi, Rotorua, 2006. Image courtesy of Christina Hurihia Wirihana.</h3>
                                <br/>
                                <br/>
                                <div className="imgMurrayAttending-container"></div>
                                <br/>
                                <br/>
                                <h3>Saana Murray (left) at the inaugural Kāhui Whiritoi Gathering, Rotorua, 2006.  Image courtesy of Christina Hurihia Wirihana.</h3>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        )}
                        {selectedContent === 'content8-2' && (
                            <div className="contentWai">
                                <div className="">
                                    <h1>Hema Nui A Tawhaki - Del Wihongi</h1>
                                    <h1>Te Rarawa</h1>
                                    <label  style={{
                                        fontSize:"16px"
                                    }}>10 October 1935–26 July 2008 </label>
                                </div>
                                <div className="imgPortrait-container">
                                </div>
                                <h1>Biography</h1>
                                <h3>
                                    Hema Nui A Tawhaki Witana was born on 10 October 1935, in Mangamuka, Auckland, North Island, New Zealand as the
                                    daughter of Waata Witana Hamihana and Riita Ripereta Toki Pangari. She married Louis John Wihongi in 1956.
                                    <br/>
                                    <br/>
                                    An entourage led by Del Wihongi, including Jerry Moana, Adelaide Cherrington, and Hori Sutherland, representing the Pu
                                    Hao Rangi Trust went to Japan to retrieve the nine varieties of kumara that were transferred from DSIR to Japanese
                                    researchers at Tsukuba Science City in 1964. The politicians at the time ridiculed them for this effort and none of the
                                    political parties were willing to fund the journey, calling it a foolish attempt. In the end, Dr David Bellamy, a well-known TV
                                    Botanist of the time funded the journey and was present to receive the kumara t its arrival in late November 1988. Even
                                    though at the time, this expedition was ridiculed by men including Maori politicians, in the light of Wai 262 Flora and Fauna
                                    claim, many have come to recognise it as the milestone it was.
                                    <br/>
                                    <br/>
                                    Another vision of Dell s was to establish Te Wao Nui a Tane National Ethnobotanical Garden in Auckland. The idea was to
                                    have a garden containing all the native plants valued by Maori; grouped according to their traditional uses, an idea that DSIR
                                    was prepared to invest in
                                    <br/>
                                    <br/>
                                    Another project she spearheaded was to explore the economic potential of the unique white kumara. Pu Hao Rangi Trust
                                    (guardians of the early kumara) formed a joint venture with Tahuri Whenua Inc (National Maori Vegetable Grower s
                                    Collective) to protect the oldest and most culturally significant varieties of kumara.
                                    <br/>
                                    <br/>
                                    Del along with Saana Murray rallied other leaders from different tribes to demand that the legal system change to focus on
                                    the well being of Taonga Māori, and thus the Wai 262 claim to the Waitangi tribunal was formed.
                                    <br/>
                                    <br/>
                                    She died on 26 July 2008, in Auckland, North Island, New Zealand, at the age of 72.
                                    <br/>
                                    <br/>
                                </h3>
                                <div className="imgLandscape-container"></div>
                                <br/>
                                <br/>
                                <h3>Del Wihongi (Ngāpuhi) gives evidence before the Waitangi Tribunal s Wai 262 inquiry in 2001.</h3>
                                <br/>
                                <br/>
                            </div>
                        )}
                        {selectedContent === 'content8-3' && (
                            <div className="contentWai">
                                <div className="">
                                    <h1>John Te One Hippolite</h1>
                                    <h1>Ngati Koata</h1>
                                    <label style={{
                                        fontSize:"16px"
                                    }}>(25 August 1929–17 November 1993) </label>
                                </div>
                                <div className="imgHippolite-container">
                                </div>
                                <h1>Biography</h1>
                                <h3>
                                    John Te One Hippolite was a farm labourer, political activist as well as a nurse. He was born to the labourer Benjamin
                                    (Peneamine) Hippolite and his wife Maria Poto Tuo Elkington in D’Urville Island as the eldest of 10 children. He was of Ngāti
                                    Koata, Ngāti Toa and Ngāti Kuia descent. His parents moved around constantly, looking for work, so John was brought up
                                    living with his grandparents, uncles and aunts and had a strong bond with his extended family and whakapapa was very
                                    important to him. His family was orthodox Mormons.
                                    <br/>
                                    <br/>
                                    By the time John was 13, his family moved to Nelson and they shared a house with three other families so that he can
                                    attend Nelson College. After two years of college, John worked as a Galley boy in Nelson to Wellington ferries. He also
                                    worked as a scrub cutter in the French pass area with his cousins.In 1951, he joined the army and trained as a signalman at
                                    Burnham Camp. He served in Korea as part of No 1 Commonwealth Divisional Signals Regiment. Even though the army life
                                    did not suit him, this army stint was an eye opener to him. When in Korea, he saw how refugees are being treated in their
                                    own country and he drew parallels between their situation and how Maoris are being treated in New Zealand. This is what
                                    gave birth to a political activist in him
                                    <br/>
                                    <br/>
                                    After the war he became a farmer, got married and had six children with his wife, June Noreen Gray. And he worked for
                                    New Zealand Railways at Waipara. Later he became a driver and union delegate for Kirbys Carriers in Nelson.
                                    <br/>
                                    <br/>
                                    In 1960s, the Vietnam war broke out. Along with it the activist in John emerged. Even though he was not a pacifist; John
                                    protested the war way before it became popular to do so. This protest was encountered with a lot of hostility but as John
                                    was prepared for that, it didn t deter his protest. And as him and his group held more anti-war vigils and meetings, more
                                    people joined in.

                                    <br/>
                                    <br/>
                                </h3>
                                <div className="grid2-container">
                                    <div className="grid-itemTotal">
                                        <div className="imgHippoliteSecond-container">
                                        </div>
                                    </div>
                                    <div className="grid-itemTotal">
                                        <div className="imgHippoliteThird-container">
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="right-left">*/}
                                    {/*<div className="imgHippoliteSecond-container"></div>*/}
                                    {/*<div className="imgHippoliteThird-container"></div>*/}
                                {/*</div>*/}
                                <br/>
                                <h3>
                                    He was a member of the Māori Organisation on Human Rights (MOOHR), and in 1972 was part of a group in Nelson
                                    concerned about the high incidence of Māori crime. Its members monitored the activities of the Nelson Magistrate s Court
                                    and wrote a paper the following year entitled ‘Justice and race: a monocultural system in a multicultural society’. They
                                    concluded that in order to ensure afair hearing for Māori defendants it was necessary to have legal representation. And by
                                    having this, the court s Māori imprisonment rate was lowered by a third. By extending this finding to the rest of the
                                    country, they argued that one in every three Māori prisoners should not be in prison.
                                    <br/>
                                    <br/>
                                    Another of Hippolite s concerns was conservation. In January 1973 he was appointed to the Marlborough Sounds Maritime
                                    Park Board. This interest was later recognised by his appointment to the Māori Heritage Committee of the New Zealand
                                    Historic Places Trust in 1991. He was also involved in two claims to the Waitangi Tribunal: The Takaporewa (Stephens Island)
                                    and the Indigenous Flora and Fauna claims, lodged in 1989 and 1991 respectively.
                                    <br/>
                                    <br/>
                                    In 1973, John Hippolite moved to Waikato, after his marriage broke up, where he worked as a nurse. During that time, he
                                    joined the 1975 Māori land march, was arrested at the Raglan Golf Course and at Bastion Point, and opposed the 1981
                                    Springbok tour. He was a supporter of the New Zealand Labour Party until the formation of Mana Motuhake o Aotearoa in
                                    1980. He worked closely with the Auckland Committee on Racism and Discrimination (ACORD), and in the early 1980s he
                                    angered the Mormon church when he challenged its attitude to American blacks.
                                    <br/>
                                    <br/>
                                    By the end of 1981 Hippolite was back in Nelson. There he joined a group called the Nelson Race Collective, which was part
                                    of the local anti racism coalition, and worked as a cultural adviser for the Department of Social Welfare. Determined to
                                    improve the well being and health of Māori, he reactivated the Nelson Māori committee in 1982, served on the Whakatū
                                    marae committee, helped establish a kōhanga reo in Nelson, and was a member of the Standing Committee on Māori
                                    Health.
                                    <br/>
                                    <br/>
                                    On 27 February 1993, in Richmond, he married Rosemary Gwendolyn Sutherland, a social worker, with whom he had been
                                    living for 10 years. Nine months later, on 17 November, he suffered a heart attack and died at a meeting at Whakatū marae,
                                    Nelson. He was survived by his wife and children and was buried in an RSA plot at Marsden Valley cemetery.
                                    <br/>
                                    <br/>
                                </h3>
                            </div>
                        )}
                        {selectedContent === 'content8-4' && (
                            <div className="contentWai">
                                <div className="">
                                    <h1>Tama Te Kapua (Tom) Poata </h1>
                                    <h1>Ngāti Porou</h1>
                                    <label style={{
                                        fontSize:"16px"
                                    }}>(3 April 1936-9 November 2005) </label>
                                </div>
                                <div className="imgTama-container">
                                </div>
                                <h1>Biography</h1>
                                <h3>
                                    Tama Poata was a writer, actor, Humanitarian and activist. A native of Tokomaru Bay, he worked as a secretary for the
                                    Maori Organisation on Human Rights from 1965-1975, which was active in opposition to New Zealand s involvement in
                                    Vietnam. During 1975, he became Te Matakite s vice-president. A television drama actor, he became involved in the film
                                    industry in the 1970s with Pukemanu and The Governor". Poata has worked as a screenwriter, producer, and scriptwriter
                                    since then.
                                    <br/>
                                    <br/>
                                    He wrote the script for Ngāti which was produced in association with Pacific Films. Ngati was the first film written and
                                    directed by Māori, and is of historical and cultural significance in New Zealand.
                                    <br/>
                                    <br/>
                                    In 1975, he was integral to the historic Land March to the New Zealand Parliament in Wellington alongside Saana Murray,
                                    voicing Mori land rights and preserving their culture. As a member of the anti-apartheid movement in New Zealand, he
                                    coined the name Halt All Racist Tours (HART), the organization which led and mobilised anti-apartheid protests to stop the
                                    South African rugby team from touring New Zealand.
                                    <br/>
                                    <br/>
                                    Poata was a member of Māori activist group Ngā Tamatoa who amongst other things campaigned for the Māori language
                                    to be recognised and supported by the government, leading to the Māori Language Act in 1987.
                                    <br/>
                                    <br/>
                                    He founded and was the director of a film company, Te Hokioi. Alongside his film work, Poata writes non-fiction articles,
                                    short stories, reviews and letters which have been published in Te Ao Hou and People s Voice.
                                    <br/>
                                    <br/>
                                    Poata attended a number of conferences, such as "Dream Speakers Conference in Edmonton, a policy makers conference at
                                    Griffith University in Brisbane, and the South Pacific Festival in Rarotonga. In 1991, he spoke at the Second Australian
                                    Documentary Conference in Canberra and chaired a session on Aboriginal filmmakers.
                                    <br/>
                                    <br/>
                                    He was also one of the six original claimants in the Wai 262 Flora and Fauna claim to the Waitangi Tribunal.
                                    <br/>
                                    <br/>
                                    Poata was involved with the New Zealand Film Archive (now Ngā Taonga) and this involvement is said to be an invaluable
                                    input for the Archive s bicultural framework. He was also instrumental in ensuring an equal representation of Tangata
                                    Whenua on the Archive s Board of Trustees.
                                    <br/>
                                    <br/>
                                    When Poata passed away in late 2005, Māori Party co-leader Pita Sharples called him a pioneer in the pursuit of Māori
                                    intellectual property, ensuring there was cultural protection long before others had even heard of it.

                                    <br/>
                                    <br/>
                                </h3>
                                <div className="imgTamaJoined-container"></div>
                                <br/>
                                <h3>
                                    Participants on the Maori land march walking on a country road between Rangiahua and Ohaewai. Group includes Tama Poata (far left), Okaihau
                                    College pupil Scott Alexander playing the bagpipes, Lyn Doherty (far right), a man carrying a taiaha, and an Alsatian dog. Taken 17 September
                                    1975 by Christian Heinegg on the leg between Hokianga and Otira.
                                    <br/>
                                    <br/>
                                </h3>
                                <div className="imgTamaJoinedByRally-container"></div>
                                <br/>
                                <h3>
                                    A night procession by people protesting against the 1976 rugby tour to South Africa in which the All Blacks finally toured with Māori and Samoan
                                    players as honorary whites." Tama Poata is seen in frame, with his hands in his pockets.
                                    <br/>
                                    <br/>
                                </h3>
                                <div className="imgTama2-container"></div>
                                <br/>
                                <h3>
                                    Group of Maori Land March demonstrators photographed on a rural road between Te Hapua and Mangamuka by Christian F Heinegg, 13-17
                                    September 1975. Tama Poata holds a flag.
                                    <br/>
                                    <br/>
                                </h3>
                                <div className="imgTama2Protest-container"></div>
                                <br/>
                                <h3>
                                    Protesters at a Save Manapouri march through Lambton Quay, and rally on the Public Library lawn. Frames show Tama Poata holding the right
                                    staff of a huge banner which reads "Manapouri - Comalco or NZ First?"
                                    <br/>
                                    <br/>
                                </h3>
                            </div>
                        )}
                        {selectedContent === 'content8-5' && (
                            <div className="contentWai">
                                <div className="">
                                    <h1>Te Witi McMath</h1>
                                    <h1>Ngāti Wai</h1>
                                </div>
                                <div className="imgWiti-container">
                                </div>
                                <h1>Biography</h1>
                                <div className="imgWaitingPictures-container"></div>
                                <div className="imgMcMath-container"></div>
                                <br/>
                                <h3>
                                    Participants Tama (Tom) Poata and Witi McMath leaning on a fence discussing the route during the Maori Land March. Taken 15 September 1975
                                    by Christian Heinegg between Waimirirangi Marae, Te Kao, and Paatu Marae, near Pamapuria/Kaitaia
                                    <br/>
                                    <br/>
                                </h3>


                                <div className="grid2-container">
                                    <div className="grid-itemTotal">
                                        <div className="imgWitiMcMath2-container">
                                        </div>
                                    </div>
                                    <div className="grid-itemTotal">
                                        <div className="imgWitiMcMath-container">
                                        </div>
                                    </div>
                                </div>
                                <div className="grid2-container">
                                    <div className="grid-itemTotal">
                                        <div className="imgMcMathJoined-container">
                                        </div>
                                    </div>
                                    <div className="grid-itemTotal">
                                        <div className="">
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="right-left">*/}
                                    {/*<div className="imgWitiMcMath2-container"></div>*/}
                                    {/*<div className="imgWitiMcMath-container"></div>*/}
                                {/*</div>*/}
                                {/*<div className="imgMcMathJoined-container"></div>*/}
                                <br/>
                                <h3>
                                    The chairman and executive of the Treaty Tribes Coalition, photographed in Wellington on 4 August 1994 by Evening Post staff photographer
                                    Melanie Burford, on the occasion of their meeting with the Treaty of Waitangi Fisheries Commission
                                    <br/>
                                    <br/>
                                    Back row, from left: Greg White, David Higgins, Paul Morgan, Harry Mikaere, Tom Paku, Witi McMath.Second row, from left: Lia Paranihi,
                                    Tuiopira Te Raunua Hape, Wayne Peters.In fromt: Tukekawa Wyllie (chairman)
                                    <br/>
                                    <br/>
                                </h3>
                            </div>
                        )}
                        {selectedContent === 'content8-6' && (
                            <div className="contentWai">
                                <div className="">
                                    <h1>Moana Jackson</h1>
                                    <h1>Ngati Kahungungu</h1>
                                    <label style={{
                                        fontSize:"16px"
                                    }}>10 October 1945 – 31 March 2022</label>
                                </div>
                                <div className="imgMoana-container">
                                </div>
                                <h1>Biography</h1>
                                <h3>
                                    Moana Jackson was a New Zealand lawyer specialising in constitutional law, the Treaty of Waitangi, and international
                                    indigenous issues.
                                    <br/>
                                    <br/>
                                    Moana Jackson was a quietly spoken intellectual and Māori leader who challenged the Crown with his incisive writing and
                                    analysis. But he was also a kind and generous man who cared deeply for his people
                                    <br/>
                                    <br/>
                                </h3>
                                <h2>
                                    A Few Milestones That Expresses Moana s Leadership
                                </h2>
                                <h3>
                                    <label className="text-with-dot">He wrote He Whaipaanga Hou (Report on Maori and the Criminal justice System) in 1988, stil considered the mostinfluential work on this issue after 35 years.
                                    </label>
                                    <br/>
                                    <br/>
                                    <label className="text-with-dot">He led an indigenous peoples working group that drafted the United Nations Declaration on the Rights of Indigenous
                                    Peoples</label>
                                    <br/>
                                    <br/>
                                    <label className="text-with-dot">He has been one of the leading voices for decades calling for constitutional transformation, including various forms of
                                    Māori self government.</label>
                                    <br/>
                                    <br/>
                                    <label className="text-with-dot">He coached a schoolboy rugby team while protesting against the apartheid era Springbok Tour in 1981.</label>
                                    <br/>
                                    <br/>
                                </h3>
                                <h3>
                                    If you had to name one driving motivation behind his work, it was mokopuna. The wellbeing of the next and future
                                    generations underpinned all of his work. Like his Polynesian ancestors who navigated the largest ocean on the planet, his
                                    coordinates were taken over a longer arc.
                                    <br/>
                                    <br/>
                                    Moana Jackson s work will echo for generations. -e gave his people the intellectual framework to not only understand what
                                    had happened to them but to challenge the present and articulate what might be possible in the future. -is work was
                                    certainly based on a Maori view of the world, but he was also deeply interested in the richness of other cultures.
                                </h3>
                                <div className="grid2-container">
                                    <div className="grid-itemTotal">
                                        <div className="imgMoanaJackson2-container">
                                        </div>
                                    </div>
                                    <div className="grid-itemTotal">
                                        <div className="imgWaitingPicturesSmall-container">
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="right-left">*/}
                                    {/*<div className="imgMoanaJackson2-container"></div>*/}
                                    {/*<div className="imgWaitingPictures-container"></div>*/}
                                {/*</div>*/}
                            </div>
                        )}
                        {selectedContent === 'content8-7' && (
                            <div className="contentWai">
                                <div className="">
                                    <h1>Kataraina Rimene</h1>
                                    <h1>Ngati Kahungungu and Ngati Porou</h1>
                                </div>
                                <div className="imgWaitingPictures-container">
                                </div>
                                <h1>Biography</h1>
                                <div className="imgWaitingPictures-container">
                                </div>
                            </div>
                        )}
                    </div>
                    {/*<div className="fixed-below-scrollable">*/}
                    <div className="">
                        {selectedContent !== 'content1'  && (
                            <label onClick={() => handleStepPreClick({selectedContent})}>Pre </label>
                        )}
                        {selectedContent !== 'content7'  && (
                            <label onClick={() => handleStepNextClick({selectedContent})}>
                                {selectedContent !== 'content1'  && (
                                    <label> | </label>
                                )}
                                Next </label>
                        )}
                    </div>
                    {/*<div className="fixed-below-scrollable">
                        Learn More About Trust
                        <label className="right-label"><sub className="triangleTrust"></sub></label>
                    </div>*/}
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

export default Wai262FloraCard