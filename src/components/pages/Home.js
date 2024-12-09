import React, {useEffect ,useState,useRef } from 'react';
import '../../App.css'
import Cards from '../Cards';
import Topics from '../Topics';
import QuestionAndAnswer from '../QuestionAndAnswer';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import ContactUs from '../ContactUs';
import TShirtForm from '../TShirtForm';
import Roots  from '../Roots';


function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            {/*add two cards begin*/}
            <Topics />
            <QuestionAndAnswer />


            {/*add two cards end*/}



            <TShirtForm />
            <ContactUs />
            <Footer />
            <Roots />
        </>
    )
}

export default Home;

