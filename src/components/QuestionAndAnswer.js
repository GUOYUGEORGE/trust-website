import React, {useRef,useEffect, useState} from "react";
import CustomCardsItem from "./CustomCardsItem";
import './QuestionAndAnswer.css'
import {Link} from "react-router-dom";


const QuestionAndAnswer  = () => {

    const divRef = useRef(null);  // 创建一个ref
    const [leftBoundary, setLeftBoundary] = useState(0);

    const [expandedQATriangle, setExpandedQATriangle] = useState(null);
    const QAToggleDetails = (triangleId) => {
        setExpandedQATriangle((prevId) => (prevId === triangleId ? null : triangleId));
    };


    useEffect(() => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setLeftBoundary(rect.left + window.scrollX);
            console.log('Left coordinate:', rect.left );
            console.log('Left window.scrollX:', window.scrollX );
        }
    }, []);
    return (
        <div>
            <div className="QAContainer">
                <div className="QAInfo">
                    <p>
                        Anyone is open to supporting our cause as an organisation once they know our identity and purpose.
                        We also provide the means of access to information that you may be interested in gaining knowledge
                        of across different fields of studies and research notes.
                    </p>
                </div>
                <div className="QAActions">
                    {/* Action 1: Request Information */}
                    <div className="QAAction">
                        <p>
                            Have an interest in one of our topics? Reach out today if you are interested in requesting
                            information from us, and we’ll get back to you as soon as possible.
                        </p>
                        <Link to="/requestInformationForm/" className="QAAHero" style={{ textDecoration: 'none' }}>
                            <label className="QAButton">REQUEST INFORMATION</label>
                        </Link>
                    </div>

                    {/* Action 2: Donate */}
                    <div className="QAAction">
                        <p>You can help support our cause further by donating today.</p>
                        <Link to="/donateForm/" className="QAAHero" style={{ textDecoration: 'none' }}>
                            <label className="QAButton">DONATE</label>
                        </Link>
                    </div>

                    {/* Action 3: Register */}
                    <div className="QAAction">
                        <p>
                            Another way you can support our cause is by registering as a volunteer, or as a member of the
                            organisation. We are also open to overseas applicants.
                        </p>
                        <Link to="/registerForm/" className="QAAHero" style={{ textDecoration: 'none' }}>
                            <label className="QAButton">REGISTER</label>
                        </Link>
                    </div>
                </div>
            </div>
            {/*<div className="nextDiv" style={{*/}
            {/*}}>*/}
                {/*<div className="nextUp" >*/}
                    {/*FREELY UNCOVER THE ROOTS OF OUR WHAKAPAPA*/}
                    {/*<label className="nextUpLabel">*/}
                        {/*Anyone is open to supporting our cause as an organisation once they know our identity and purpose.*/}
                        {/*We also provide the means of access to information that you may be interested in gaining knowledge of across different fields of studies and research notes.*/}
                    {/*</label>*/}
                {/*</div>*/}
                {/*<div className="nextDown" style={{*/}
                    {/*"height":"auto"*/}
                {/*}}>*/}
                    {/*<div className="buttonDiv">*/}
                        {/*<Link to='/requestInformationForm/' className='QAAHero' style={{ textDecoration: 'none' }} >*/}
                            {/*<label className="QAAButoon">REQUEST INFOMATION</label>*/}
                        {/*</Link>*/}
                        {/*<Link to='/donateForm/' className='QAAHero' style={{ textDecoration: 'none' }} >*/}
                            {/*<label className="QAAButoon">DONATE</label>*/}
                        {/*</Link>*/}
                        {/*<Link to='/registerForm/' className='QAAHero' style={{ textDecoration: 'none' }}>*/}
                            {/*<label className="QAAButoon">REGISTER</label>*/}
                        {/*</Link>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}


            {/*<div className="QAContainer">
                <div className="QAContainerDiv">
                    <div className="QAContainerDivTop">
                        <label style={{
                            color:"white",
                            fontSize:"36px",
                        }}> Who,What,and Why</label>
                        <br />
                        <label style={{
                            color:"white",
                            fontSize:"36px",
                        }}>Questions And Answers </label>
                        <div className="fixed-below-QA-scrollable">
                            <label style={{
                                color:"white",
                            }}>WHAT IS THE WAI 262 CLAIM?</label>
                            <label className="right-QA-label" style={{
                                display:(expandedQATriangle==="triangle2"||expandedQATriangle===null)?"inline-block":"none"
                            }} onClick={() => QAToggleDetails('triangle1')}>▼</label>
                            <label className="right-QA-label" style={{
                                display:expandedQATriangle==="triangle1"?"inline-block":"none"
                            }}  onClick={() => QAToggleDetails(null)}>▲</label>
                        </div>
                        <div className="top-div-show-dividerQA">
                        </div>
                        {expandedQATriangle === 'triangle1' && (
                            <div className="">
                                <h4 className="h4" style={{
                                    color:"white",
                                    padding:"5vh"
                                }}>
                                    Wai 262 is the 262nd claim registered with the Waitangi Tribunal. It was lodged on 9 October 1991 by six claimants on behalf of themselves and their iwi: Haana Murray (Ngāti Kurī), Hema Nui a Tawhaki Witana (Te Rarawa), Te Witi McMath (Ngāti Wai), Tama Poata (Ngāti Porou), Kataraina Rimene (Ngāti Kahungunu), and John Hippolite (Ngāti Koata).
                                </h4>
                                <br/>
                            </div>
                        )}
                        <div className="fixed-below-QA-scrollable">
                            <label style={{
                                color:"white",
                            }}>WHAT IS THE CLAIM ABOUT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <label className="right-QA-label" style={{
                                display:(expandedQATriangle==="triangle1"||expandedQATriangle===null)?"inline-block":"none"
                            }} onClick={() => QAToggleDetails('triangle2')}>▼</label>
                            <label className="right-QA-label" style={{
                                display:expandedQATriangle==="triangle2"?"inline-block":"none"
                            }}  onClick={() => QAToggleDetails(null)}>▲</label>
                        </div>
                        <div className="top-div-show-dividerQA">
                        </div>
                        {expandedQATriangle === 'triangle2' && (
                            <div className="">
                                <h4 className="h4" style={{
                                    color:"white",
                                    padding:"5vh"
                                }}>
                                    The claim is about the place of Māori culture, identity, and traditional knowledge in New Zealand's laws, and in government policies and practices. It concerns who controls Māori traditional knowledge, who controls artistic and cultural works such as haka and waiata, and who controls the environment that created Māori culture. It also concerns the place in contemporary New Zealand life of core Māori cultural values such as the obligation of iwi and hapū to act as kaitiaki (cultural guardians) towards taonga (treasured things) such as traditional knowledge, artistic and cultural works, important places, and flora and fauna that are significant to iwi or hapū identity.
                                </h4>
                                <br/>
                            </div>
                        )}
                    </div>
                    <div className="maskQA"></div>
                </div>
            </div>*/}
        </div>
    )

}

export default QuestionAndAnswer