import React, {useState} from 'react';
import './Footer.css';
import 'boxicons';

const Footer = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            "emailAddress":emailAddress,
        };
        console.log("formData",formData);
        try {
            const response = await fetch('http://localhost:8080/saveEmailForm', {
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
    <div className='footer-container'>
        <div className='footer-section'>
            <div className="footer__data">
                <label className='footer__title'>
                    Join the Tiaki Taonga newsletter to receive our super exciting news!
                </label>
                <form>
                    Emails *
                    <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='footer-input' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}
                    />
                    <button className='buttonFooter' onClick={handleEmailSubmit} >Subscribe</button>
                </form>

            </div>
            {/* Icons section 3 */}
        </div>
    </div>
  )
}

export default Footer