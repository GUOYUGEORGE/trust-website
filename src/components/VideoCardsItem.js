import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VideoCardsItem = (props) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        if(props.type==="info" || props.type==="taonga"  ){
            navigate(props.path);
        } else {
            // 使用 A 标签打开新页面
            window.open(props.path, '_blank'); // 打开新标签页
        }
    };
/*
    style={{
        display : props.show==='true'?'block':'none'
    }}*/
    return (
            <a target="_blank" className="custom_cards__item__link" onClick={handleButtonClick}>
                <div className="custom_cards__item__linkLib"  >
                    <figure className="custom_cards__item__pic-wrapLib" style={{
                        display : props.src!==''?'block':'none'
                    }}>
                        {props.src && <img src={props.src} alt='Travel Image' className="cards__item__img" />}
                    </figure>
                    <div className="custom_cards__item__infoLib">
                        <label className="custom_cards__item__titleLib">{props.title}</label>
                    </div>
                    <div className="custom_cards__item__info_textLib">
                        <label className="custom_cards__item__textLib">{props.text}</label>
                    </div>
                    <div className="custom_cards__item__infoLib">
                        <label className="custom_cards__item__content">{props.content}</label>
                    </div>
                    <div className="custom_cards__item__button_divLib">
                        <button className='custom_cards__item__buttonLib' >{props.buttontext}</button>  {/*onClick={handleButtonClick} */}
                    </div>
                </div>
            </a>

    );
};
export default VideoCardsItem;
