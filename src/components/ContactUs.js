import React, {useState} from 'react';
import './ContactUs.css';

const ContactForm = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [fullName, setFullName] = useState('');
    const [textArea, setTextArea] = useState('');
    const handleChange = (event) => {
        setTextArea(event.target.value);
    };
    const handleTouchSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            "emailAddress":emailAddress,
            "message":textArea,
            "fullName":fullName,
        };
        console.log("formData",formData);
        try {
            const response = await fetch('http://localhost:8080/saveTouchWithCustomerForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle success
            alert('you already succeed save the form');
            window.location.reload(); // 保存成功后刷新当前页面
            console.log('Data sent successfully');
        } catch (error) {
            // Handle error
            console.error('There was a problem with the request:', error);
        }
    };


  return (
    <div className='contact-form-container'>
      <div className='form-box'>
        <div className='right-contactUs-container'>
          <h2 className='right-container-title'>Get in Touch With Us Today</h2>
          <p className='right-container-para'>We are open for any suggestion or just to have a chat. Leave a message and we will return as soon as possible!</p>
        </div>

        <div className='left-container'>
          <section className='contact-form-section'>
            <label className='contact-labels'>Full Name</label>
            <input type='text' className='input-name' placeholder='Enter your name'  value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
    
            <label className='contact-labels'>E-mail</label>
            <input type='text' className='input-email' placeholder='Enter your email' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} ></input>
    
            <label className='contact-labels'>Message</label>
            <textarea type='text' className='message-area' cols='50' rows='10' placeholder='Type your message' value={textArea} onChange={handleChange} />
          </section>
    
          <button className='form-submit-btn' onClick={handleTouchSubmit} >Submit Message</button>
        </div>
      </div>
    </div>
    
  )
}

export default ContactForm