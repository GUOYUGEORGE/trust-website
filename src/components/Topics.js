import React, {useRef,useEffect, useState} from "react";
import CustomCardsItem from "./CustomCardsItem";
import './Topics.css'
import {Link} from "react-router-dom";


const Topics  = () => {

    const divRef = useRef(null);  // 创建一个ref
    const [leftBoundary, setLeftBoundary] = useState(0);
    useEffect(() => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setLeftBoundary(rect.left + window.scrollX);
            console.log('Left coordinate:', rect.left );
            console.log('Left window.scrollX:', window.scrollX );
        }
    }, []);
    return (
        <div className="topics">
            {/*style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}*/}
            <div className="topicsDiv" style={{ flex: '0 1 auto' }}>
                <div className="topicsUp" >
                    <label style={{ fontWeight: "bold", fontSize: "36px" }}>Featured Topics</label>
                    <br />
                    <label style={{ fontSize: "36px" }}>Select a Topic to Learn More</label>
                </div>
            </div>
            <div className="topicsDivDown" >
                <div className="grid4-container">
                    <div className="grid4-itemTotal">
                        <CustomCardsItem
                            src="/images/Saana Waitta-Murray.jpg"
                            title=""
                            text="Profile of Claimants"
                            content="Wai 262 Flora and Fauna Claim"
                            path="/wai262Flora/content8-1"
                            hiddenButton="true"
                        />
                    </div>
                    <div className="grid4-itemTotal">
                        <CustomCardsItem
                            src="/images/maori-flax-3-1515872.jpg"
                            title=""
                            text="How Did The Wai 262 Claimants Started?"
                            content="Wai 262 Flora and Fauna Claim"
                            path="/wai262Flora/content3"
                            hiddenButton="true"
                        />
                    </div>
                    <div className="grid5-itemTotal">
                        <CustomCardsItem
                            src="/images/What is Wai 262.jpg"
                            title=""
                            text="What is Wai 262?"
                            content="Wai 262 Flora and Fauna Claim"
                            path="/tePaeTawhiti/content5"
                            hiddenButton="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Topics