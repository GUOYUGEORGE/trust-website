import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import './DonateFormCard.css';
import {Link} from "react-router-dom";
import { Input , Select ,Button,DatePicker  } from "antd";

const DonateFormCard = () => {
    const [returnDiv, setReturnDiv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [purchaseQuantity, setPurchaseQuantity] = useState('');
    const [payment, setPayment] = useState('');
    const [datedd, setDatedd] = useState('');
    const [datemm, setDatemm] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [fullName, setFullName] = useState('');
    const [physicalAddress, setPhysicalAddress] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [shoulders, setShoulders] = useState(0);
    const [currency, setCurrency] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [directContactNumber, setDirectContactNumber] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(0);
    const showConfirmationFlag = (flagNo) => {
        setShowConfirmation(flagNo);
    };
    const handleDateChange = (e) => {
        setDateInput(e.target.value);
    };

    const [dotState, setDotState] = useState("0");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            "orderNo": "12",
            "fullName":fullName,
            "emailAddress":emailAddress,
            "directContactNumber":directContactNumber,
            "physicalAddress":physicalAddress,
            "amount":donationAmount,
            "donationType":currency,
            // "paymentMethod":payment,
            "paymentMethod":currency,
            "expireDate":dateInput,
            // "securityCode":securityCode,
            "securityCode":cvv,
            "expiryDate":expiryDate,
            "cvv":cvv,
            "cardno":cardNumber
            // "orderNo": "12",
            // "paymentMethod": "111",
            // "cardno":"13245",
            // "securityCode":"222",
            // "expiryDate":"2026-3-3",
            // "size":"small"
        };
        console.log("formData",formData);
        try {
            const response = await fetch('http://localhost:8080/saveDonateForm', {
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
      <div>
          <div className="donateBackGroundDiv">
          </div>
          <div className="donateIndicator">
                      <span onClick={() => setDotState('1')} style={{
                          "background-color": (dotState==='1' || dotState==='0') ?'red':'#000'
                      }}></span>
              <span onClick={() => setDotState('2')} style={{
                  "background-color": dotState==='2' ?'red':'#000'
              }}></span>
          </div>
          <div className="donateOverlay">
              <div className="TShirtTitle">
                 Donation Ticket: 01
                  <br/>
                  Hoatu He Iti Koha - Give a Little
                  <br/>
                  Donation - Koha Form
              </div>
              <br/>
              <div className="donateDiv"  style={{
                  "display": (dotState==='1' || dotState==='0') ?'flex':'none'
              }}>

                  <label className="donateTitle2">Personal Details</label><br/>
                  <div className="donateFormCss" >
                      <div className="donateFormLeftCss">
                          <div className="registerD">
                              <label className="labelLeft">Full Name *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <Input placeholder="First name and last name" value={fullName}   onChange={(e) => setFullName(e.target.value)}  />
                          <br/>
                          <br/>

                          <div className="registerD">
                              <label className="labelLeft">Email Address *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <Input  value={emailAddress} placeholder="e.g. - jane@gmail.com"     onChange={(e) => setEmailAddress(e.target.value)}  />
                          <br/>
                          <br/>
                          <div className="registerD">
                              <label className="labelLeft">Direct Contact Number (Select Country) *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <Input  value={directContactNumber}   onChange={(e) => setDirectContactNumber(e.target.value)}
                               placeholder='New Zealand (+64)'/>
                      </div>
                      <div className="donateFormRightCss">
                          <div className="registerD">
                              <label className="labelLeft">Country of Location *</label>
                              <label className="labelRightNormal">*Option Is Required</label>
                          </div>
                          {/*<Input  value={physicalAddress}   onChange={(e) => setPhysicalAddress(e.target.value)}  />*/}
                          <Select
                              defaultValue="1"
                              showSearch
                              style={{
                                  width: "100%"
                              }}
                              filterOption={(input, option) =>
                                  option.label.toLowerCase().includes(input.toLowerCase())
                              }
                              allowClear
                              onChange = {(e) => setPhysicalAddress(e.target.value)}
                              style={{ width: '100%' }}
                              options={[
                                  { value: '1',label: 'New Zealand'},
                                  { value: '2',label: 'Chinese'},
                                  { value: '3',label: 'Japanese'},
                              ]}
                          />
                          <br/>
                          <br/>
                          <div className="registerD">
                              <label className="labelLeft">Amount of Donation *</label>
                              <label className="labelRightNormal">*Both Option Is Required</label>
                          </div>
                          <Select
                              defaultValue="Currency - NZ($)"
                              style={{
                                  width: "45%"
                              }}
                              allowClear
                              onChange = {(e) => setCurrency(e.target.value)}
                              options={[
                                  { value: '1',label: 'NZ Dollars'},
                                  { value: '2',label: 'American Dollars'},
                                  { value: '3',label: 'RMB'},
                              ]}
                          />
                          <Input placeholder="Insert donation amount (in Digits)"  value={donationAmount}   onChange={(e) => setDonationAmount(e.target.value)}  style={{
                              marginLeft:"5%",
                              width: "50%"
                          }} />
                      </div>
                  </div>
              </div>
              <div className={
                  dotState==='2'?"donateDiv":"donateDiv2"
              }>
                  <label className="donateTitle2">Purchase Quantity and Payment Option</label><br/>


                  <div className="donateFormCss" >
                      <div className="donateFormLeftCss">
                          <div className="registerD">
                              <label className="labelLeft">Select Payment Method * </label>
                              <label className="labelRightNormal">*Option Is Required</label>
                          </div>
                          <div className="donateCssFlex">
                              <div style={{display:"flex",width:"65%",marginLeft:"-10px"}}>
                                  <Select
                                      defaultValue="1"
                                      style={{
                                          width: "100%",
                                          marginLeft:"10px"
                                      }}
                                      allowClear
                                      onChange = {(e) => setCurrency(e.target.value)}
                                      options={[
                                          { value: '1',label: 'VISA'},
                                          { value: '2',label: 'PAYPAL'},
                                          { value: '3',label: 'UnionPay'},
                                      ]}
                                  />
                              </div>
                              <div className="donatePaymentDiv" style={{display:"flex"}}>
                              </div>
                          </div>
                          <div className="registerD">
                              <label className="labelLeft">Card Number *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <Input  value={cardNumber} placeholder="0123xxxxxxxxxxxxxxxx"   onChange={(e) => setCardNumber(e.target.value)}  />
                      </div>
                      <div className="donateFormRightCss">
                          <div style={{
                              display:"flex"
                          }}>
                              <div className="donateFormMiddleCss">
                                  <div className="registerD">
                                      <label className="labelLeft">Expiry Date *</label>
                                      <label className="labelRightNormal">*Entry Is Required</label>
                                  </div>
                                  <DatePicker  placeholder="Enter date here" onChange={(e) => setExpiryDate(e.target.value)} style={{
                                      height:"35px",
                                      width:"100%"
                                  }}  />
                              </div>
                              <div className="donateFormMiddleCss">
                                  <div className="registerD">
                                      <label className="labelLeft">Security Code *</label>
                                      <label className="labelRightNormal">*Field Is Required</label>
                                  </div>
                                  <Input  value={cvv}  placeholder="Three digit at the back of your card"  onChange={(e) => setCvv(e.target.value)} style={{ width: '100%' }} />
                              </div>
                          </div>

                          <div  className="buttonDonateForm">
                              <div className='labelDonate'   onClick={handleSubmit}   > {/*handleSubmit*/}  {/*onClick={() => setReturnDiv('1')}*/}
                                  DONATE
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="donateReturnDiv" style={{
              "display": (returnDiv==='1' ) ?'block':'none'
          }}>
              <div className="confirmReturnDiv">
                  <label style={{
                      color:"#74A541",
                      fontSize:"38px",
                  }}>Ngā Mihi</label>
                  <br/>
                  <label style={{
                      color:"#74A541",
                      fontSize:"38px",
                  }}>Jane Wilkins</label>
                  <br/>
                  <label style={{
                      color:"#74A541",
                      fontSize:"22px",
                  }}>You have donated NZ$30 to the Trust</label>
                  <button className="close-button" onClick={() => setReturnDiv('0')} >X</button>
              </div>
          </div>
          {/*this is for donate div*/}
          {/*<div className="donateDiv" style={{
              "display": (showConfirmation==='1' ) ?'block':'none'
          }}>
              <h1 className="h1TShirt">Puchase Donate</h1><br/>
              <div className="donateCss" >
                  <div className="donateLeftCss">
                      <label>Full Name</label>
                  </div>
                  <div className="donateRightCss">
                      <label>Direct Contact Number</label>
                  </div>
              </div>
              <div className="donateCss" >
                  <div className="donateRightLabelCss">
                      <label>Hu Deng</label>
                  </div>
                  <div className="donateRightLabelCss">
                      <label>0272381398</label>
                  </div>
              </div>
              <br/>
              <div className="donateCss" >
                  <div className="donateLeftCss">
                      <label>Email adress</label>
                  </div>
              </div>
              <div className="donateCss" >
                  <div className="donateRightLabelCss">
                      <label>DHDENGHU@GMAIL.COM</label>
                  </div>
              </div>
              <br/>
              <div className="donateCss" >
                  <div className="donateLeftCss">
                      <label>Country of Location</label>
                  </div>
              </div>
              <div className="donateCss" >
                  <div className="donateRightLabelCss">
                      <label>77 View Rd</label>
                  </div>
              </div>
              <br/>
              <div className="donateCss" >
                  <div className="donateLeftCss">
                      <label>Amount of Donation</label>
                  </div>
              </div>
              <div className="donateCss" >
                  <div className="donateRightLabelCss">
                      <label>Shoulder</label>
                  </div>
              </div>
              <br/>
              <div className="donateCss" >
                  <div className="donateLeftCss">
                      <label>Payment Method</label>
                  </div>
                  <div className="donateRightCss">
                      <label>Card Number</label>
                  </div>
              </div>
              <div className="donateCss" >
                  <div className="donateRightLabelCss">
                      <label>VISA</label>
                  </div>
                  <div className="donateRightLabelCss">
                      <label>1234567898765432</label>
                  </div>
              </div>
              <br/>
              <div className="donateCss" >
                  <div className="donateLeftCss">
                      <label>Security Number</label>
                  </div>
              </div>
              <div className="donateCss" >
                  <div className="donateRightLabelCss">
                      <label>051</label>
                  </div>
              </div>
              <div className="buttonDonateAndOrder">
                  <div className='labelDonate' onClick={() => setShowConfirmation('0')}    >
                      CONFIRM AND ORDER
                  </div>
              </div>
          </div>*/}

          <div className="donateMask" style={{
              zIndex: (showConfirmation==='1' ) ?'2':'1'
          }}>
          </div>

      </div>
  );
}
export default DonateFormCard