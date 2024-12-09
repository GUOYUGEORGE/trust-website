import React, {useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'; // import useLocation
import './AboutTheTrustCard.css';

const AboutTheTrustCard = (selectedMenu) => {
    // const location = useLocation();
    // var menuName = 'content1';
    // if(location.search!==""){
    //     menuName = location.search.split('=')[1];
    // }
    const { selectedOption } = useParams();
    const decodedOption = decodeURIComponent(selectedOption);
    const [selectedContent, setSelectedContent] = useState(decodedOption);
    const [selectedMenuItem, setSelectedMenuItem] = useState(decodedOption);
    const [displayFlag, setDisplayFlag] = useState(true);

    const hadleDisplayFlag = () => {
        setDisplayFlag(!displayFlag);//变更状态
    };

    const handleMenuClick = (contentId) => {
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
        if(!(contentId==="content4-1")){
            setExpandedNewMenu(false);
        }
    };

    const handleMenuClick1 = (contentId) => {
        setDisplayFlag(!displayFlag);//变更状态
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
        if(!(contentId==="content4-1")){
            setExpandedNewMenu(false);
        }
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

    // const navigate = useNavigate();
    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };

    useEffect(() => {
        const decodedOption = decodeURIComponent(selectedOption);
        setSelectedContent(decodedOption);
        setSelectedMenuItem(decodedOption);
    }, [selectedOption]);
    return (
        <>
        <div className="trust-container">
            <div className="imgTrust-container">
                {/*<div className="about-text-container">*/}
                <h1 className="h1AboutTrust-container">
                    About the Trust
                </h1>
                {/*</div>*/}
                <br/>
                <div className="textTrust-container">
                    Learn about the organisation`s role within the Wai 262 movement,learn about Te Tiriti O Waitangi and the concepts of He Whakaputanga.
                </div>
            </div>

            <div className="content-about-wrapper">
                <div className="about-fixed-leftTrust">
                    <div className="labelTile-container">
                        Topics/Chapters
                        <label className="right-label-about-the-trust" onClick={() => hadleDisplayFlag()} ><sub className="trianglecontem"></sub></label>
                    </div>
                    <div className={`about-labelText-container ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content1')}>
                        About The Trust
                    </div>
                    <div className={`about-labelText-container ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content2')}>
                        The Vision and The Mission
                    </div>
                    <div className={`about-labelText-container ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content3')}>
                        The Pou(Foundation of The Trust)
                    </div>
                    <div className={`about-labelText-container ${selectedMenuItem === 'content4' ? 'selected' : ''}`}>
                        <label className="" onClick={() => handleMenuClick('content4')}>Threaty of Waitangi in Māori</label>
                    </div>
                    <div className={`about-labelText-container ${selectedMenuItem === 'content5' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content5')}>
                        The Kaupapa(Purpose) of the Trust
                    </div>


                    {/* for mobile*/}
                    <div className={`about-labelText-container1 ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content1')}>
                        About The Trust
                    </div>
                    <div className={`about-labelText-container1 ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content2')}>
                        The Vision and The Mission
                    </div>
                    <div className={`about-labelText-container1 ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content3')}>
                        The Pou(Foundation of The Trust)
                    </div>
                    <div className={`about-labelText-container1 ${selectedMenuItem === 'content4' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content4')}>
                        <label className="" >Threaty of Waitangi in Māori</label>
                    </div>
                    <div className={`about-labelText-container1 ${selectedMenuItem === 'content5' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content5')}>
                        The Kaupapa(Purpose) of the Trust
                    </div>
                </div>
                <div className="right-container">
                    <div className="scrollable-trust-right">
                        {(selectedContent === 'content1' || selectedContent === null ) && (
                            <div className="">
                                <div className="">
                                    <h1>When Did the Claim Start and Who Were the Original Claimants</h1>
                                    <div className="divimg-containerNew"></div>
                                    <div className="content">
                                        The trust is an incorporated society and was established in 2012 as a Non-Profitable Organisization.The registered members involved are whanau hapuu.The major ley factor is that the Kaupapa(purpose) that it is hapuu centred and led.
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content2' && (
                            <div className="">
                                <div className="">
                                    <h1 className="contentTrust">Rangatiratanga (Maori Sovereignty)</h1>

                                    <div className="contentTrustBlack">
                                        It is used in the Māori version of the Treaty of Waitangi to express "full exclusive andundisturbed possession" over Māori-owned land and all their taonga (treasures).
                                    </div>
                                    <br/>
                                    <h1 className="contentTrust">English Translation of a phrase (From The Treaty) Expressing Maori Sovereignty</h1>
                                    <div className="contentAboutTrustCardContent">
                                        Ko te Kuini o lingarani ka wakarite ka wakaae ki nga Rangatira ki nga hapu - kinga tangata katoa o Nu Tirani te tinorangatiratanga o o ratou wenua o ratou kainga me o ratou taonga katoa.
                                        The Queen of England agrees to protect the Chiefs, the subtribes and all the people of New Zealand in the unqualifiedexercise oftheir chieftainship over their lands, villages and all their treosures.
                                    </div>
                                    <div className="top-div-show-divider">
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedContent === 'content3' && (
                            <div>
                                <h1>Pou(Foundation of The Trust)</h1>
                                <div className="divimg2-containerNew"></div>
                                <div className="contentGap">
                                    <h1 className="h4">He Wakaputanga 1835(Articles 1 to 4) - Maori Constitution</h1>
                                    <br/>
                                    <label>
                                        Declaration of Independence 1835
                                    </label>
                                </div>
                                <div className="fixed-below-Pou-scrollable">
                                    Nga Hapuu Rangatria o Ngapuhi i hainatia He Wakaputanga o Nu Tireni
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('triangle1')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider">
                                </div>
                                {expandedTriangle === 'triangle1' && (
                                    <div className="contentTrustLabel">
                                        <h4 className="h4">
                                            1.Ko matou ko nga Tino Rangatria o nga iwi o Nu Tireni i raro mai o Hauraki kua oti nei te huihui
                                            i Waitangi i Tolerau 28 o Oketopa 1835.ka wakaputa i te Rangatiratanga o to matou wenua a ka
                                            meatia ka wakaputaia e matou he Wenua Rangatira.kia huaina 'Ko te Walaminenga o nga Hapu o Nu Tireni.
                                        </h4>
                                        <br/>
                                        We, the absolute leaders of the tribes (iwi) of New Zealand (Nu Tireni) to the north of Hauraki (Thames) havingassembled in the Bay of lslands (Tokerau) on 28th Octaber 1835. [We] declare the authority and leadership of ourcountry and say and declare them to be prosperous ecorTe Wakamienga o nga Hapū o Nu Tireni' (Thnomy and chiefly country (Wenua Ranqatira) under the title of 'Te Wakaminenga o nga Hapu o Nu Tireni'(The sacred Confederation of Tribes of New Zealand).

                                        <br/><br/>
                                        <h4 className="h4">
                                            2.Ko te Kingitanga ko teo Nu Tireni ka meatia nei kei nga Tino Rangatira anaketo matou huihuinqa. a kaua e matou te wakarite ture ki te tahi hunga ke atu, me te tahiKawanatanga hoki kia meatia j fematou e wakarite ana ki te riteo Nu Tireni, ko nga tangata anake e meatia nei etia nee matouito mato!huinuinga
                                        </h4>
                                        <br/>
                                        The sovereiantykinaship (Kinaitarfrom the land of the Confederation of New Zealand are hereiedared to belona solely to the true leaders (lina Ranoatiral of ourgathering,and we also declare that wve will notallow (tukua) any other group to frame laws (wakaoVernnrenItanaa) to be established irthe lands of the Confederation, unless (by peiinted by us to carry out (wakarite)the laws (ture) we havéenacted in our assembly (huihuinga).
                                        <br/><br/>
                                        <h4 className="h4">
                                            3. Ko matou ko nga Tino Rangatira ke mea nei kia haihui ki te runanga ki Waitangi a te Ngahuru i tenei tau i tenei taki te wakarite ture kia tika ai te wakaw:a mau pu te rongo kia mutu te he kia tika te hokohoko, a ka meahoki ki nga Tauiwi o runga kia waara arkrte wakaoranga o to matou wenua. a kia ururatou li te wakaminenga o Nu Tire
                                        </h4>
                                        <br/>
                                        We, the true leaders have agreed to meet in a formal gathering (runanga) at Waitangi in the autumn (Ngahuru) of eacNyear to enact laws (wakarite ture) that justice may be done (kia tika al te wavakanga), so that peace may prevait, anwrong doing cease and trade (hcDetienwiethesouthern tribes to set aside their animosities, considerthe well being of our land and entesacred confedcration of New Zealand.
                                        <br/><br/>
                                        <h4 className="h4">
                                            4. Ka mea matou kia tuhituhia he pukapuka ki te ritenga o tenei o to matou wakaputanga nei ki te Kingi o Ingaranihei kawe atu i to matou aroha, nana hoki i wakaae ki te Kara mo matou. a no te mea ka atawai matou, ka tiaki inga pakeha e noho nei i uta e rere mai ana ki te hokohoko, koia ka mea ai matou ki te Kingi kia waiho hei matua kia matou i to matou Tamarikitanga kei wakakahoretia to matou Rangatiratanga. Kua wakaetia katoatia e matou itenei ra i te 28 o opketopa 1835 ki te aroaro o te Reirenetio te Kingi o ingarani.
                                        </h4>
                                        <br/>
                                        We agree that a copy of our declaration shauld be writen and sent to the king of England to express our appreciation(aroha) for this approval of our flaq, And because we are showing friendship and care for the Pakeha who live on ourshores, who have rome here to trade (hakohoko), we ask the king to remain as a protector (matua) for us in ourinexperienced statehood (tamarikitanga), lest our authority and leadership be ended (kei whakakaharetia tó matouRanqatiratanqa).
                                        <br/><br/>
                                    </div>
                                )}
                                <div className="fixed-below-Pou-scrollable">
                                    The Codicil
                                    <label className="right-Pou-label" onClick={() => handleToggleDetails('triangle2')}><sub className="triangleTrust"></sub></label>
                                    <label className="right-Pou-label">View Details</label>
                                </div>
                                <div className="top-div-show-divider">
                                </div>
                                {expandedTriangle === 'triangle2' && (
                                    <div className="contentTrustLabel">
                                        <br/><br/>
                                        <h4 className="h4">
                                            Ko matou ko nga Rangatira ahakoa kihai i tae ki te huihuinga nei no te nuinga o te Waipuke no te aha ranei - kawakaae katoa ki te waka putanga Rangatiratanga o Nu Tirene a ka uru ki roto ki te Wakaminenga.
                                        </h4>
                                        <br/>
                                        We are the Rangatira who, although we did not attend the meeting due to the widespread flooding or other reasons, fully agree with He Wakaputanga Rangatiratanga o Nu Tireni and join the sacred Confederation.
                                        <br/><br/>
                                    </div>
                                )}
                            </div>

                        )}
                        {selectedContent === 'content4' && (
                            <div className="contentTrustLabel">
                                <h4 className="h4">
                                    Threaty of Waitangai in Māori
                                </h4>
                                <br/>
                                <div className="trust-div">
                                    <div className="trust-divLeft">
                                        <h4 className="h4">
                                            Te Tiriti o Waitangi
                                        </h4>
                                        <br/><br/><br/>
                                        Ko Wilkitoria te Kwini o ingarani i tana mahara atawal ki nga Rangatira me nga Hapu o Nu Tirani i tana hiahia hoki kiatohungia ki a ratou o ratou rangatiratanga me to ratou wenua, a kia mau tonu hoki te Rongo ki a ratou me te Atanoho holikua wakaaro ia he mea tika kia tukua mai tetahi Rangatira " hei kai wakarite ki nga langata maori o Nu Tirani - kiawakaaetia e nga Rangatira maori te Kawanatanga o te Kuini ki nga wahikatoa o te wenua nei me nga motu * na te mea hokile tokomaha ke nga tangata o tona lwi Kua noho ki tenei wenua, a e haere mai nei.
                                        <br/><br/><br/>
                                        Na ko te Kuini e hiahia ana kia wakaritea te Kawanatanga kia kaua ai nga kino e puta mai ki te tangata maori ki te Pakeha enono ture kore ana.
                                        <br/><br/><br/>
                                        Na,kua pai te Kuini kia tukua a hau a Wiremu Hopihona he Kapitana i te Rolara Nawi hei Kawana mo nga wahi katoa o NuTirani e.tukua aianel amua atu ki te kuini, e mea atu ana ia ki noa Rangatira o te wakaminenoa o noa hapu o Nu Tirani meera Ranaatira atu enei ture ka korerotia nei.
                                        <br/><br/>
                                    </div>
                                    <div className="trust-divRight">
                                        <div className="divimg3-containerNew">
                                        </div>
                                        <br/>
                                        <h4 className="h4">
                                            Most chiefs signed the Maori text of the Treaty. This text was signed at Waitangi on 6 February 1840, andthereafter in the north and at Auckland, The Māori is reproduced as it was written.
                                        </h4>
                                        <br/>
                                    </div>
                                </div>

                                <h4 className="h4">
                                    Ko te tuatahi
                                </h4>
                                <br/><br/>
                                Ko nga Rangatira o te wakaminenga me nga Rangatira katoa hoki ki hai i uri ki tawa wakaminenga ka tuku rawa atu ki teKuini o Ingarani ake tonu atu te Kawanatanga katoa o o ratou wenua.
                                <h4 className="h4">
                                    Ko te tuarua
                                </h4>
                                <br/><br/>
                                Ko te Kuini o lngarani ka wakarite ka wakaae ki nga Rangatira ki nga hapu - ki nga tangata katoa o Nu Tirani te tinorangatifratanga o o ratou wenua o ratou kainga me o ratou taonga katoa. Otia ko nga Rangatira o te wakaminenga me ngaRangatira katoa atu ka tuku ki te Kuini te hokonga o era wahi wenua e pal ai te tangata nona te wenua - ki te ritenga o te会utu e wakaritea ai e ratou ko te kai hoko e meatia nei e te Kuini hei kai hoko mona.
                                <br/><br/>
                                <h4 className="h4">
                                    Ko te tuatoru
                                </h4>
                                <br/><br/>
                                Hei wakaritenga mai hoki tenei mo te wakaaetanga ki te Kawanatanga o te Kuini - ka tiakina e te Kuini o lingarani ngatangata maori katoa u Nu Tirani ka tukua ki a ratou naa tikanga katoa rite tahi ki ana mea ki nga tangata o ingarani.
                                <br/><br/>
                                [signedWy, Hobson Consul & Lieutenant Governor
                                <br/><br/>
                                Na ko matou ko nga Rangatira o te Wakaminenga o nga hapu o Nu Tirani ka huihui nei ki Waitangi ko matou hoki ko ngaRangatira o Nu Tirani ka kite nei i te'ritenga o enei kupu. Ka tangchia ka wakaaetia katoatia e matou, koia ka tohungia ai omateu ingoa o matou tohu.
                                <br/><br/>
                                Ka meatia tenei ki Waitangi i te ono o nga ra o Pepuerii te tau kotahi mano e waru rau e wa te kau o to tatou Arikj.
                                <br/><br/>
                                Ko nga Rangatira o te Wakaminenga
                                <br/><br/>
                                <br/><br/>
                                <h4 className="h4Trust">
                                    Discover More Facts from Other Resources
                                </h4>

                                <div className="resource-trust-container">
                                    <div className="resource-1"></div>
                                    <div className="resource-trust-right-container">
                                        <h1 className="contentTrustBlack">The Treaty of Waitangi trail</h1>
                                        <label>Over 40 rangatira signed the Treaty at Waitangi, among themmany who had signed the Declaration of independence.</label>
                                        <br/><br/>
                                        <button className="read-more-btn" onClick={() => handleButtonClick('https://www.tepapa.govt.nz/discover-collections/read-watch-play/maori/treaty-waitangi/treaty-close/treaty-waitan-gi-trail')}>Read Article</button>
                                    </div>
                                </div>
                                <div className="resource-trust-container">
                                    <div className="resource-2"></div>
                                    <div className="resource-trust-right-container">
                                        <h1 className="contentTrustBlack">The making of the Treaty of Waitangi</h1>
                                        <label>Maori Sovereignty was not signed over to Hobson by NgaHapuu Rangatira -please add this as a very important pointand refer to the Maori Wersion.</label>
                                        <br/><br/>
                                        <button className="read-more-btn" onClick={() => handleButtonClick('https://www.tepapa.govt.nz/discover-collections/read-watch-play/maori/treaty-waitangi/treaty-waitangi-close/mak-ing-treaty')}>Read Article</button>
                                    </div>
                                </div>
                                <br/>
                                <div className="resource-trust-container">
                                    <div className="resource-3"></div>
                                    <div className="resource-trust-right-container">
                                        <h1 className="contentTrustBlack">The content of the Treaty of Waitangi</h1>
                                        <label>Te Tiriti o waitangi was not signed by the lwi, it was Signedby Nga Hapuu Rangatira</label>
                                        <br/><br/>
                                        <button className="read-more-btn" onClick={() => handleButtonClick('https://www.tepapa.govt.nz/discover-collections/read-watch-play/maori/treaty-waitangi/treaty-close/content-trea-ty-waitangi')}>Read Article</button>
                                    </div>
                                </div>
                                <br/>
                                <div className="resource-trust-container">
                                    <div className="resource-4"></div>
                                    <div className="resource-trust-right-container">
                                        <h1 className="contentTrustBlack">Report on Stage 1 of the Te Paparahi o TeRaki Inquiry Released</h1>
                                        <label>Te Paparahi o Te Raki ( The Great Lands of NorthlandWaitangi Tribunal Report - states that "Nga Hapuu Rangatirathat signed Te Tiriti o Waitangi 1840 " "Did not cede theirSovereignty to the British Monarchy.'</label>
                                        <br/><br/>
                                        <button className="read-more-btn" onClick={() => handleButtonClick('https://waitangitribunal.govt.nz/news/report-on-stage-1-of-the-te-paparahi-o-te-raki-inquiry-released-2/')}>Read Article</button>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        )}
                        {selectedContent === 'content5' && (
                            <div>
                                Content for The Kaupapa(Purpose) of the Trust
                            </div>
                        )}
                    </div>
                    {/*<div className="fixed-below-scrollable">*/}
                    <div className="">
                        {selectedContent !== 'content1'  && (
                            <label onClick={() => handleStepPreClick({selectedContent})}>Pre </label>
                        )}
                        {selectedContent !== 'content5'  && (
                            <label onClick={() => handleStepNextClick({selectedContent})}>
                                {selectedContent !== 'content1'  && (
                                    <label> | </label>
                                )}
                                Next </label>
                        )}
                    </div>
                    {/*<div className="fixed-below-scrollable">*/}
                        {/*Learn More About Trust*/}
                        {/*<label className="right-label"><sub className="triangleTrust"></sub></label>*/}
                    {/*</div>*/}
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

export default AboutTheTrustCard