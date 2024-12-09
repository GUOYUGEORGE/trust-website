import React, { useState } from 'react';
import './ImageSlider.css'; // 引入样式文件

function ImageSlider() {
    const images = [
        "/images/1. Kumara.jpg",
        "/images/2 - Pohutakawa.jpg",
        "/images/3 - Koromiko.jpg",
        "/images/1 - Puawananga.jpg",
        "/images/1 - Pupu Harakeke.jpg",
        "/images/1 Kukupa.jpg",
        "/images/2 - Koromiko.jpg",
        "/images/2 - Puawananga.jpg",
        "/images/3 - Harakeke - NZ Flax Plant.jpg",
        "/images/4 - Horopito.jpg",
        "/images/5 - Kawakawa - Rongoā Māori.jpg",
        "/images/Female Koura Crayfish.jpg",
        "/images/Freshwater Crayfish - Koura.jpg",
        "/images/Freshwater EEL.jpg",
        "/images/Freshwater Mussels - Variants.jpg",
        "/images/Lamphrey.jpg",
        "/images/Mullet.jpg",
        "/images/New Zealand Cockles.jpg",
        "/images/Patiki Fish.jpg",
    ];
    const imagesLabel = [
        "Kumara",
        "Pohutakawa",
        "Patiki",
        "Puawananga",
        "Pupu Harakeke",
        "Kukupa",
        "Koromiko",
        "Puawananga2",
        "Harakeke",
        "Horopito",
        "Kawakawa",
        "Female Koura Crayfish",
        "Freshwater Crayfish - Koura",
        "Freshwater EEL",
        "Freshwater Mussels - Variants",
        "Lamphrey",
        "Mullet",
        "New Zealand Cockles",
        "Patiki Fish",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextImage() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // setSecond(0);
        // setThird(0);
        // alert(second);
    }

    function prevImage() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        // setSecond(0);
        // setThird(0);
    }

    function setImageNo(no) {
        if(currentIndex===images.length-2){
            // setThird(0);

            // setSecond(0);
        }
        if(currentIndex===images.length-1){
            // setSecond(0);
            // setThird(1);
        }
        setCurrentIndex((prevIndex) => (prevIndex + no) % images.length);
    }


    return (
        <div>
            <div className="image-slider">
                <img
                    src={images[currentIndex]}
                    alt="Slideshow"
                    className="image-container"
                />
                <div className="nav-buttons">
                    <div className="nav-text">{imagesLabel[currentIndex]}</div>
                    <div>
                        <button onClick={prevImage}>Pre</button>
                        <button onClick={nextImage}>Next</button>
                    </div>
                </div>
            </div>

            <div className="right-leftSlider"  onScroll="true">
                <img
                src={
                    images[currentIndex]
                    // currentIndex===(images.length-1)?images[0]:images[currentIndex]
                } onClick={() => setImageNo(0)}
                className="imgFirst-container" style={{
                filter: 'grayscale(70%)'
                 }} />
                <img
                    src={
                        currentIndex===(images.length-1)?images[0]:images[currentIndex+1]
                    } onClick={() => setImageNo(1)}
                    className="imgFirst-container" />
                <img
                    src={
                        currentIndex===(images.length-1)?images[1]:
                            (currentIndex===(images.length-2)?images[0] :
                                (currentIndex===(images.length-1)?images[2] :images[currentIndex+2] )
                            )
                    }  onClick={() => setImageNo(2)}
                    className="imgFirst-container"  />
            </div>
        </div>


    );
}

export default ImageSlider;
