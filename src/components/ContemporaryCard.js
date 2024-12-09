import React, {useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'; // import useLocation
import './ContemporaryCard.css';

const ContemporaryCard = (selectedMenu) => {
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

    const hadleDisplayFlag = (value) => {
        setDisplayFlag(!displayFlag);//变更状态
    };
    const handleMenuClick = (contentId) => {
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
    };
    const handleMenuClick1 = (contentId) => {
        setDisplayFlag(!displayFlag);//变更状态
        setSelectedContent(contentId);
        setSelectedMenuItem(contentId);
    };
    const handleStepPreClick = (contentId) => {
        const lastChar = (contentId.selectedContent).substr((contentId.selectedContent).length - 1);
        const lastDigit = parseInt(lastChar)-1;
        const newStr = "content" + lastDigit.toString();
        setSelectedContent(newStr);
        setSelectedMenuItem(newStr);
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
    useEffect(() => {
        const decodedOption = decodeURIComponent(selectedOption);
        setSelectedContent(decodedOption);
        setSelectedMenuItem(decodedOption);
    }, [selectedOption]);
    return (
        <>
        <div className="trust-container">
            <div className="divimg-Contemporary">
                <div className="contem-text-container">
                    Contemporary the Wai 262
                </div>
                <div className="contem-textDDown-container">
                    Learn About the organisation`s role within the Wai 262 movement.
                </div>
            </div>
            <div className="content-wrapper">
                <div className="contem-fixed-leftTrust">
                    <div className="labelTile-container">
                        Topics/Chapters
                        <label className="right-label-contem" onClick={() => hadleDisplayFlag("mobile")} ><sub className="trianglecontem"></sub></label>
                    </div>
                    <div className={`labelText-container ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content1')}>
                        Introductory Details
                    </div>
                    <div className={`labelText-container ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content2')}>
                        Flora Taonga
                    </div>
                    <div className={`labelText-container ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content3')}>
                        Fauna Taonga
                    </div>
                    <div className={`labelText-container ${selectedMenuItem === 'content4' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content4')}>
                        Flora and Fauna Taonga - Conclusion
                    </div>
                    <div className={`labelText-container ${selectedMenuItem === 'content5' ? 'selected' : ''}`}
                         onClick={() => handleMenuClick('content5')}>
                        Protection and Management Plan for Wai 262 Flora and Fauna Contemporary Taonga
                    </div>
                    {/* for mobile*/}
                    <div className={`labelText-container1 ${selectedMenuItem === 'content1' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content1')}>
                        Introductory Details
                    </div>
                    <div className={`labelText-container1 ${selectedMenuItem === 'content2' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content2')}>
                        Flora Taonga
                    </div>
                    <div className={`labelText-container1 ${selectedMenuItem === 'content3' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content3')}>
                        Fauna Taonga
                    </div>
                    <div className={`labelText-container1 ${selectedMenuItem === 'content4' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content4')}>
                        Flora and Fauna Taonga - Conclusion
                    </div>
                    <div className={`labelText-container1 ${selectedMenuItem === 'content5' ? 'selected' : ''}`}
                         style={{
                             display:displayFlag == false ?"block":"none"
                         }}
                         onClick={() => handleMenuClick1('content5')}>
                        Protection and Management Plan for Wai 262 Flora and Fauna Contemporary Taonga
                    </div>
                </div>
                <div className="right-container">
                    <div className="scrollable-right">
                        {(selectedContent === 'content1' || selectedContent === null ) && (
                            <div className="">
                                <div className="">
                                    <h1>Introductory Details</h1>
                                    <div className="divimg-ContemporaryNew"></div>
                                    <div className="contentContemtorary">
                                        The contemporary Wai 262 claim is one of the most complex and far-reaching
                                        in the Tribunal’s history. It was the Waitangi Tribunal’s first ‘whole-of-government’ inquiry, examining the policy areas of more than 20 government
                                        agencies.
                                    </div>
                                    <br/>
                                    <h3>
                                        The claim related To The Following
                                    </h3>
                                    <div className="contentContemtorary">
                                        Te tino rangatiratanga o te Iwi Māori in respect of indigenous flora and fauna me ō rātou taonga katoa (and all their
                                        treasures) including but not limited to mātauranga, whakairo, wāhi tapu, biodiversity, genetics, Māori symbols and designs
                                        and their use and development and associated indigenous cultural and customary heritage rights in relation to such taonga.
                                        <br/>
                                        <br/>
                                        The issues raised in the Wai 262 claim have also been frequently raised by Māori elsewhere, including in Treaty settlements,
                                        legislative reviews, and other domestic and international forums. Although the claim was lodged by specific claimants, it is
                                        the desire of ‘iwi katoa’ to protect and preserve their mātauranga and taonga.
                                    </div>
                                    <br/><br/>
                                </div>
                            </div>
                        )}

                        {(selectedContent === 'content2' ) && (
                            <div className="">
                                <div className="div-Contemporary">
                                    <h1>Flora Taonga</h1>
                                    <div className="divimg-ContemporaryNew1">
                                        <img src="/images/Flora Taonga.jpg"
                                             alt="Contemporary Image" className="full-width-image"></img>
                                    </div>
                                    <h1>
                                        Rongoa Plants
                                    </h1>
                                    <div className="contentContemtorary">
                                        Rongoa refers to traditional Maori medicinal plants used for healing and well-being.
                                    </div>
                                    <br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Koromiko.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Koromiko</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Hebe spp.</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Userd for treating stomach ailments and skin conditions.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Horpito.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Horpito</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Psedowintera colorata</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Known for its antibacterial properties and used in Maori herbal medicine.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Manuka.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Manuka</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Leptospermum scoparium</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>A medicinal plant with antibacterial and anti-inflammatory properties,commonly used in skincare products and wound healing.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/kaputea.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Pukatea</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Laurelia novae-zelandiae</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Māori used pukatea for several medicinal purposes,
                                                it contains an alkaloid related to morphine although
                                                without the side effects of that drug. Because of
                                                these analgesic properties, the pulped inner bark
                                                was used to relieve toothache and a decoction of
                                                bark boiled in water was used for ulcers, skin
                                                complaints generally, and syphilis.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div>
                                        <h1>Sacred Trees</h1>
                                        <br/>
                                        <h2>
                                            Trees with spiritual significance and ceremonial uses in Maori culture.
                                        </h2>
                                    </div>
                                    <br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Totara Native Tree.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Totara Native Tree</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Podocarpus Totara</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Māori used this massive tree to make their large
                                                waka, some of which could hold up to 100 warriors!
                                                They also used the trunks of these trees because
                                                they grew straight, were big, light, and rot resistant
                                                and also used this wood to carve and the carvings
                                                that adorn many Marae are from the wood of totara.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div>
                                        <h1>Wetland Plants</h1>
                                        <br/>
                                        <h2>
                                            Flora species found in wetland ecosystems, important for biodiversity and
                                            water filtration.
                                        </h2>
                                    </div>
                                    <br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Raupo.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Raupo</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Typha orientalis</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> A tall wetland plant with multiple uses in Maori
                                                culture, such as weaving and food.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Harakeke.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Harakeke</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Phormium tenax</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Found in wetland areas, used for weaving, and
                                                making traditional items like mats and baskets.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div>
                                        <h1>Native Trees</h1>
                                        <br/>
                                        <h2>
                                            like the kauri, rimu, totara, and pohutukawa are highly valued by Maori for
                                            their cultural significance and ecological importance.
                                        </h2>
                                    </div>
                                    <br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Kauri.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy2"></img>
                                            <br/>
                                            Kauri
                                        </div>
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Totara Native Tree1.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy2"></img>
                                            Totara Native Tree
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Rimu Native Tree.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy2"></img>
                                            <br/>
                                            Rimu Native Tree
                                        </div>
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Pohutakawa Native Tree.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy2"></img>
                                            <br/>
                                            Pohutakawa Native Tree
                                        </div>
                                    </div>
                                    <br/>
                                    <div>
                                        <h1>Medicinal Plants</h1>
                                        <br/>
                                        <h2>
                                            like the kauri, rimu, totara, and pohutukawa are highly valued by Maori for
                                            their cultural significance and ecological importance.
                                        </h2>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Harakeke1.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Harakeke</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Phormium tenax</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Also known as flax, used for weaving, medicine, and
                                                cultural practices.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Kawakawa.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Kawakawa</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Macropiper excelsum</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> A plant with heart-shaped leaves used in traditional Maori medicine for various ailments.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Mamaku.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Mamaku</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Cyathea Medullaris</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> A large tree fern known for its medicinal properties
                                                and cultural significance.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <br/>
                                    <div>
                                        <h1>Endemic Plants</h1>
                                        <br/>
                                        <h2>
                                            like the pikopiko fern and the hebe species, which are unique to New Zealand
                                            and have spiritual significance for Maori.
                                        </h2>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Pikopiko fern.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Pikopiko fern</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Hymenophyllum spp.</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> A delicate fern species with cultural importance in
                                                Maori mythology and cuisine.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Hebe species.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Hebe species</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Macropiper excelsum</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Diverse flowering plants found in New Zealand,
                                                valued for their beauty and ecological role in native
                                                ecosystems.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                </div>
                            </div>
                        )}

                        {(selectedContent === 'content3' ) && (
                            <div className="">
                                <div className="div-Contemporary">
                                    <h1>Fauna Taonga</h1>
                                    <div className="divimg-ContemporaryNew1">
                                        <img src="/images/Flora Taonga.jpg"
                                             alt="Contemporary Image" className="full-width-image"></img>
                                    </div>
                                    <h3>
                                        Freshwater Fish
                                    </h3>
                                    <div className="contentContemtorary">
                                        Native fish species found in New Zealand rivers, lakes, and streams
                                    </div>
                                    <br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Inanga.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Inanga</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Hebe spp.</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>A small whitebait species culturally significant to
                                                Maori and important in traditional diets.</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Kokopu species.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Kokopu species</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Galaxias spp.</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Various species of native fish known for their
                                                resilience and importance in freshwater ecosystems.</label>
                                        </div>
                                    </div>

                                    <br/>
                                    <div>
                                        <h1>Reptiles</h1>
                                        <br/>
                                        <h2>
                                            Native reptiles with cultural and ecological significance
                                        </h2>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Tuatara.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Tuatara</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Sphenodon punctatus</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> A living fossil reptile endemic to New Zealand,
                                                considered a taonga species by Māori.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Green Gecko.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Green Gecko</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Naultinus spp.</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Brightly coloured gecko species valued for their
                                                beauty and symbolism in Māori culture.</label>
                                        </div>
                                    </div>

                                    <br/>
                                    <div>
                                        <h1>Endemic Invertebrates</h1>
                                        <br/>
                                        <h2>
                                            Unique insect and invertebrate species found only in New Zealand
                                        </h2>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Giant Weta Species.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Giant Weta Species</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}></label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Large, flightless insects with diverse forms and habitats, important in Maori stories and ecological balance.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Powelliphanta snails.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Powelliphanta snails</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}></label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Large, carnivorous land snails endemic to New
                                                Zealand, valued for their rarity and ecological role.</label>
                                        </div>
                                    </div>
                                    <br/>
                                    <div>
                                        <h1>Birds</h1>
                                        <br/>
                                        <h2>
                                            Birds such as the kiwi, tui, kereru, and kaka, hold spiritual and cultural significance in Maori mythology and storytelling.
                                        </h2>
                                    </div>

                                    <br/>
                                    <div className="resource-contem-containerLAndR">
                                        <div className="divimg-ContemporaryRLNew">
                                            <img src="/images/Kiwi Bird.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy3"></img>
                                            <br/>
                                            Kiwi Bird
                                        </div>
                                        <div className="divimg-ContemporaryRLNew">
                                            <img src="/images/Tui Bird.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy3"></img>
                                            <br/>
                                            Tui Bird
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="resource-contem-containerLAndR">
                                        <div className="divimg-ContemporaryRLNew">
                                            <img src="/images/Kereru Bird.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy3"></img>
                                            <br/>
                                            Kereru Bird
                                        </div>
                                        <div className="divimg-ContemporaryRLNew">
                                            <img src="/images/Kaka Bird.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy3"></img>
                                            <br/>
                                            Kaka Bird
                                        </div>
                                    </div>
                                    <br/>

                                    <div>
                                        <h1>Marine Species</h1>
                                        <br/>
                                        <h2>
                                            The Maui dolphin, tuatara, and koura (freshwater crayfish), which are
                                            important symbols of the interconnectedness between Maori and the natural world
                                        </h2>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Maui dolphin.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Maui dolphin</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Cephalorhynchus hectori maui</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>
                                                One of the world's rarest dolphin species, endemic to New Zealand waters and culturally significant to Maori.
                                            </label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Koura.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Koura</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}>Paranephrops planifrons</label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Freshwater crayfish species prized for its culinary and cultural importance in Maori cuisine and
                                                traditions.</label>
                                        </div>
                                    </div>

                                    <br/>
                                    <div>
                                        <h1>Insects and Invertebrates</h1>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Weta species.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Giant Weta Species</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}></label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Large, flightless insects endemic to New Zealand,valued for their ecological roles and cultural significance.</label>
                                        </div>
                                    </div>
                                    <br/><br/>
                                    <div className="resource-contem-container">
                                        <div className="divimg-ContemporaryRL">
                                            <img src="/images/Native Bees.jpg"
                                                 alt="Contemporary Image" className="full-width-image"></img>
                                        </div>
                                        <div className="resource-right-contem-container">
                                            <label style={{
                                                color:"black",
                                                fontWeight: "600",
                                                fontSize:"16px"
                                            }}>Native Bees</label>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}></label>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <label  style={{
                                                color:"black",
                                                fontSize:"12px"
                                            }}> Important pollinators in New Zealand ecosystems,essential for the reproduction of native flora and
                                                agricultural crops.</label>
                                        </div>
                                    </div>
                                    <br/><br/>


                                </div>
                            </div>
                        )}

                        {(selectedContent === 'content4' ) && (
                            <div className="">
                                <div className="div-Contemporary">
                                    <h1>Flora and Fauna Taonga - Conclusion</h1>
                                    <div className="resource-contem-containerLAndR">
                                        <div className="divimg-ContemporaryRLNew" style={{
                                            height:"42vh"
                                        }}>
                                            <img src="/images/Flora and Fauna Taonga - Conclusion-1.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy4"></img>
                                        </div>
                                        <div className="divimg-ContemporaryRLNew" style={{
                                            height:"42vh"
                                        }}>
                                            <img src="/images/Flora and Fauna Taonga - Conclusion-2.jpg"
                                                 alt="Contemporary Image" className="full-width-imageBy4"></img>
                                        </div>
                                    </div>
                                    <h2>
                                        These previously presented examples highlight the rich diversity of flora and
                                        fauna taonga encompassed by the Wai 262 claim, reflecting the
                                        interconnectedness between Maori culture, traditional knowledge, and the
                                        natural environment.
                                    </h2>
                                    <div className="contentContemtorary">
                                        Protecting and managing all these contemporary taonga is essential for preserving biodiversity, cultural heritage, and the
                                        well-being of both Maori communities and the broader ecosystem.
                                        <br />
                                        By implementing a comprehensive protection and management plan that respects Maori knowledge and values, New
                                        Zealand can ensure the long-term sustainability and well-being of the Wai 262 flora and fauna contemporary taonga for
                                        future generations.
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        )}
                        {(selectedContent === 'content5' ) && (
                            <div className="">
                                <div className="div-Contemporary">
                                    <h1>Protection and Management Plan for Wai 262 Flora
                                        and Fauna Contemporary Taonga
                                    </h1>
                                    <br/>
                                    <h2>
                                        Recognition and Respect
                                    </h2>
                                    <div>
                                        <ul style={{
                                            marginLeft:"20px",
                                            padding:"10px"
                                        }}>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Acknowledge the intrinsic cultural, spiritual, and traditional significance of Wai 262 flora and fauna taonga to Maori
                                                communities.
                                            </li>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Support the revitalization and transmission of traditional knowledge, practices, and stories related to these taonga
                                                among Maori youth and future generations.
                                            </li>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Incorporate Maori perspectives and values into conservation and management strategies to ensure the holistic well
                                                being of both people and the environment.
                                            </li>
                                        </ul>
                                    </div>

                                    <br/>
                                    <h2>
                                        Te Tiriti Partnership and Management and Collaboration
                                    </h2>
                                    <div>
                                        <ul style={{
                                            marginLeft:"20px",
                                            padding:"10px"
                                        }}>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Establish co management agreements between Maori iwi, hapu, government agencies, and conservation organizations
                                                to facilitate shared governance of land, resources, and biodiversity.
                                            </li>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Foster collaborative research partnerships that blend Western science with Maori traditional ecological knowledge to
                                                inform conservation practices and decision making processes.
                                            </li>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Promote community led initiatives that empower Maori kaitiaki as stewards of Wai 262 taonga, fostering a sense of
                                                ownership and responsibility for their protection and management.
                                            </li>
                                        </ul>
                                    </div>

                                    <br/>
                                    <h2>
                                        Conservation and Habitat Restoration
                                    </h2>
                                    <div>
                                        <ul style={{
                                            marginLeft:"20px",
                                            padding:"10px"
                                        }}>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Implement conservation programs targeted at protecting and restoring habitats for endemic flora and fauna taonga,
                                                including predator control, weed eradication, and revegetation efforts.
                                            </li>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Develop species recovery plans for threatened or endangered Wai 262 taonga, integrating traditional Maori ecological
                                                knowledge with modern conservation techniques to ensure their survival and resilience.
                                            </li>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Support sustainable land management practices that prioritize the conservation of biodiversity, ecosystem health, and
                                                cultural values, while respecting the rights and interests of Maori communities.
                                            </li>
                                        </ul>
                                    </div>
                                    <br/>
                                    <h2>
                                        Education and Outreach
                                    </h2>
                                    <div>
                                        <ul style={{
                                            marginLeft:"20px",
                                            padding:"10px"
                                        }}>
                                            <li style={{
                                                marginLeft:"20px",
                                                padding:"10px",
                                                color:"gray"
                                            }}>
                                                Provide educational resources, workshops, and cultural programs that promote awareness and appreciation of Wai 262
                                                flora and fauna taonga among diverse audiences, including schools, local communities, and visitors.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/*<div className="fixed-below-scrollableCon">*/}
                    <div className="">
                        {/*<label style={{*/}
                        {/*}}>Pre </label>*/}
                        {/*<label style={{*/}
                        {/*}}>  |  Next </label>*/}
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
                    <div className="fixed-below-scrollable">
                        Other Learning Categories
                        <label className="right-label"><sub className="triangleContemporary"></sub></label>
                    </div>
                </div>
            </div>
            <div>
                <br/>
                <br/>
            </div>
        </div>

        </>

  );
}

export default ContemporaryCard