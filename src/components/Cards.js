import React, {useState,useEffect } from "react";
import CustomCardsItem from "./CustomCardsItem";
import './Cards.css'


const Cards  = () => {

    const [showFlag, setShowFlag] = useState(0);
    const setShowFlag1 = (value) => {
        const currentWidth = window.innerWidth; // 实时获取当前宽度
        if(currentWidth<=960){
            //nothing
        } else{
            if(showFlag+value<0 || showFlag+value>2 ){
            } else {//showFlag>0
                setShowFlag(showFlag+value);
            }
        }

    }

    const setInitial = (value) => {
        setWidth(value);
        if(value<=960){
            setShowFlag(100);
        } else {
            setShowFlag(0);
        }

    }
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setInitial(window.innerWidth);
        // 添加事件监听
        window.addEventListener('resize', handleResize);
        // 清理事件监听
        return () => {
            window.removeEventListener('resize', handleResize); // 清理监听器
        };
    }, []);
    return (
        <div className="cards">
            <div className="cardDiv">
                <div className="cardUp">
                    Ngā Kāwai Ako<br/>
                    <label className="labelH1">Learning Categories to Choose From
                    </label>
                </div>
            </div>
            <br/>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="page-turn left-arrow" onClick={() => {setShowFlag1(-1)}}  style={{
                        backgroundColor:showFlag===0?"gray":"",
                    }}>&lt;</div>
                    <div className="page-turn right-arrow" onClick={() => {setShowFlag1(1)}}  style={{
                        backgroundColor:showFlag===2?"gray":"",
                    }}>&gt;</div>

                    <div className="grid3-container" style={{
                        display:showFlag===0?"flex":showFlag===100?"block":"none",
                    }}>
                        <div className="grid3-itemTotal">
                            <CustomCardsItem
                                src="/images/1 About The Trust.jpg"
                                title="Introductory Details"
                                text="About the Trust"
                                content="Learn about the organisation`s role within the Wai262 movement. "
                                showdiv="1"
                                path="/aboutTheTrust/content1" />
                        </div>
                        <div className="grid3-itemTotal">
                            <CustomCardsItem
                                src="/images/3 Learn About Te Pa Whati.jpg"
                                title="Historical - 2020"
                                text="2019 Te Pae Tawhiti"
                                content="Learn about Te Pae Tawhiti and how it responded to the Wai262 claim. "
                                showdiv="2"
                                path="/tePaeTawhiti/content1" />
                        </div>
                    </div>
                    <div className="grid3-container"  style={{
                        display:showFlag===1?"flex":showFlag===100?"block":"none",
                    }}>
                        <div className="grid3-itemTotal">
                            <CustomCardsItem
                                src="/images/2 Wai 262 flaura and fauna claim.jpg"
                                title="Historical - Ko Aotearoa Tenei"
                                text="Wai262 flora and Fauna Claim"
                                content="Learn about the history of the Wai262 claim,and how it got into power. "
                                showdiv="3"
                                path="/wai262Flora/content1" />
                        </div>
                        <div className="grid3-itemTotal">
                            <CustomCardsItem
                                src="/images/5 Contemporary WAI 262.jpg"
                                title="Today"
                                text="Contemporary Wai 262"
                                content="Learn about the organisation`s role within the Wai262 movement. "
                                showdiv="4"
                                path="/contemporary/content1" />
                        </div>
                    </div>
                    <div className="grid3-container" style={{
                        display:showFlag===2?"flex":showFlag===100?"block":"none",
                    }}>
                        <div className="grid3-itemTotal">
                            <CustomCardsItem
                                src="/images/Wai 262 Into The Future - Thumbnail.jpg"
                                title=""
                                text="Future Aspects of the Wai 262"
                                content="AI and Cyber Security Impacts on Maori Intellectual Property Rights,etc. "
                                showdiv="3"
                                path="/wai262Flora/content1" />
                        </div>
                        <div className="grid3-itemTotal">
                            <div className="">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardDown">
                    <label className="cardButtonLabel">VIEW INFOMATION GLOSSARY</label>
                </div>
            </div>
        </div>
    )

}

export default Cards