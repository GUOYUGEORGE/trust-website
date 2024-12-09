import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import './TShirtFormCard.css';
import {Link} from "react-router-dom";
import { ProForm,ProFormRadio } from '@ant-design/pro-components';
import { Input ,InputNumber , Select  ,DatePicker } from "antd";
const TShirtFormCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [purchaseQuantity, setPurchaseQuantity] = useState('');
    const [purchaseQuantitySize, setPurchaseQuantitySize] = useState(1);
    const [price, setPrice] = useState(0);
    const [payment, setPayment] = useState('');
    const [datedd, setDatedd] = useState('');
    const [datemm, setDatemm] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [fullName, setFullName] = useState('');
    const [physicalAddress, setPhysicalAddress] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [colour, setColour] = useState('');
    const [matchesWithSizingOptions, setMatchesWithSizingOptions] = useState(0);
    const [selectedColler, setSelectedColler] = useState('');
    const [selectedSizing, setSelectedSizing] = useState('');
    const [directContactNumber, setDirectContactNumber] = useState('');
    const [materialType, setMaterialType] = useState('');
    const [materialSize, setMaterialSize] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(0);
    const [showViewDisclaimerDiv, setShowViewDisclaimerDiv] = useState(0);
    const showConfirmationFlag = (flagNo) => {
        setShowConfirmation(flagNo);
    };
    const handleDateChange = (e) => {

        setDateInput(e.target.value);
    };
    const handlePurchaseQuantitySize = (e) => {
        setPurchaseQuantitySize(e.target.value)
    };
    const handleCollerChange = (e) => {
        setSelectedColler(e.target.value);
    };

    const [dotState, setDotState] = useState("0");
    // const [isMuted, setIsMuted] = useState(false);
    // const showDotState = (flagNo) => {
    //     setDotState(flagNo);
    // };
    const handleSizingRadioChange = (event) => {
        setSelectedSizing(event.target.value);
    };

    const handleTshirtSubmit = async (e) => {
        setShowConfirmation("2");
        e.preventDefault();
        const formData = {
            "emailAddress":emailAddress,
            "fullName":fullName,
            "directContactNumber":directContactNumber,
            "physicalAddress":physicalAddress,
            "sizing":selectedSizing,
            "collerType":selectedColler,
            "colour":colour,
            "purchaseQuantity":purchaseQuantity,
            "materialType":materialType,
            "size":materialSize,
            "totalPrice":price,
            "cardNumber":cardNumber,
            "expirationDate":dateInput,
            "securityCode":securityCode,
        };
        console.log("formData",formData);
        try {
            const response = await fetch('http://localhost:8080/saveThirtOrderForm', {
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

    const divRef = useRef(null); // 创建一个 ref
    const [divHeight, setDivHeight] = useState(0);

    const updateHeight = () => {
        if (divRef.current) {
            setDivHeight(divRef.current.clientHeight);
        }
    };

    useEffect(() => {
        // 初始化高度
        updateHeight();

        // 添加窗口 resize 事件监听器
        window.addEventListener('resize', updateHeight);

        // 清理事件监听器
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []); // 空依赖数组表示这个 useEffect 只在组件挂载和卸载时运行


  return (
      <div className="trust-container">
              <div className="tShirtBackGroundDiv">
                  <div className="tShirt-text-container">
                      Order Confirmation
                  </div>
                  <label className="about-label-container">Confirm your order and payment details below</label>
              </div>
              <div ref={divRef} className="content-Thirt-wrapper">
                  {/*<div className="TShirtContainer">
                      <div className="TShirtTitle">
                          <label className="TShirtLabelTitle">T-Shirt Purchase Form</label>
                          <br/>
                          Tino Rangatiratanga:Wai 262 T-Shirts
                      </div>

                      <div className="right">
                          <label  style={{
                              color:"#74A64D"
                          }}> Please Read the disclaimer before buying</label>
                          <br/>
                          <div style={{
                              backgroundColor:"#74A64D"
                          }} onClick={() => setShowViewDisclaimerDiv('1')} >
                              <label style={{
                                  display: "flex",
                                  color:"white",
                                  height:"2em",
                                  justifyContent: "center",
                                  alignItems: "center",
                              }}>View Disclaimer</label>
                          </div>
                      </div>
                  </div>*/}
                  <br/>
                  <div  className="TShirtDivNew">
                      <div className="tShirtFormCss" >
                          <div className="tShirtFormLeftCss">
                              <div style={{
                                  display:"flex",
                                  backgroundColor:"lightgray",
                                  height:"auto",
                              }}>
                                  <div className="tShirtDivLeft">
                                      <label className="boldFirstLabel">Order Summary</label>
                                      <br/>
                                      <br/>
                                      <label className="boldLabel">Product Name</label>
                                      <br/>
                                      <label className="smallFontFamily" > Tiaki Taonga Trust - T-Shirt</label>

                                      <br/>
                                      <label className="boldLabel">Selected Gender/Age Group</label>

                                      <br/>
                                      <label className="smallFontFamily" > Women</label>


                                      <br/>
                                      <label className="boldLabel"> Selected Quantity</label>
                                      <br/>
                                      <label className="smallFontFamily" >  2x</label>

                                      <br/>
                                      <label className="boldLabel">  Selected Material</label>
                                      <br/>
                                      <label className="smallFontFamily" >  Drifit (Polyester)</label>

                                      <br/>
                                      <label className="boldLabel">  Selected Colour</label>
                                      <br/>
                                      <label className="smallFontFamily">  White</label>
                                      <br/>
                                      <label className="boldLabel">  Selected Size</label>
                                      <br/>
                                      <label className="smallFontFamily"> L </label>
                                      <br/>
                                      <br/>
                                      <label className="totalPrice" > Total Order Price</label>
                                      <br/>
                                      <label className="priceLabel" >$50</label>
                                  </div>
                                  <div className="tShirtDivRight"></div>
                              </div>
                              <div>
                                <h1>Trust's Purchase Disclaimer</h1>
                                  <br/>
                                  <ul style={{
                                      fontSize:"16px"
                                  }}>
                                      <li>
                                          T-shirt size and fit: <label style={{
                                          color:"#697477"
                                      }}>Sizes are approximate and based on standard charts. fit may vary due to individual body shapes and manufacturing differences.Review the sizing guide before purchase.
                                      </label></li>
                                      <li>
                                          Colour Representation: <label style={{
                                          color:"#697477"
                                      }}>Colours shown are as accurate as possible but may vary slightly due to screen settings and lighting.</label>
                                      </li>
                                      <li>
                                          Garment Material and Type:<label style={{
                                          color:"#697477"
                                      }}> Descriptions of material and type are provided,but minor variations miy occur due to manufacturing processes.</label>
                                      </li>
                                      <li>
                                          Encryption Protection: <label style={{
                                          color:"#697477"
                                      }}>We use encryption to prevent the unauthorized copying of T-shir designs. However, T-shirts purchased will be free of encryption,as displayed on the website.
                                      </label></li>
                                      <li>
                                          No Return Policy: <label style={{
                                          color:"#697477"
                                      }}>All sales are final, Wve do not accept returns or exchanges for any reason.</label>
                                      </li>
                                      <li>
                                          Secured Payment Methods: <label style={{
                                          color:"#697477"
                                      }}>Every step possible has been taken to previde seure payment methods, We use industry.standard encryption and security measures to protect your payment information during transactions.
                                      </label></li>
                                      <li>
                                          Price Changes: <label style={{
                                          color:"#697477"
                                      }}>T-shirt prikes are subiect to change based on printer and supplier demands, Prikes may fluctuate without prior notice.</label>
                                      </li>
                                      <li>
                                          Purchaser Responsibility:
                                          <label style={{
                                              color:"#697477"
                                          }}>By purchasing. you accept ful responsibility fr your selection, including size, colour, and type. Ensure your personal
                                              information is secure when ordering.</label>
                                      </li>
                                      <li>
                                          T-shirt Delivery Timeframe: <label style={{
                                          color:"#697477"
                                      }}>By purchasing, you accept full responsibility for your selection,including size, colour, and type. Ensure your personal information is secure when ordering.
                                      </label></li>
                                  </ul>
                                  <br/>
                                  <label style={{
                                      color:"#697477"
                                  }}>For questions or concerns, please contact customer servike before purchasing. Thank you for your understanding and cooperation.</label>
                              </div>
                          </div>
                          <div className="tShirtFormRightCss" >
                              <label className="TShirtTitle2">Billing Details</label><br/><br/>
                              <div className="registerD">
                                  <label className="tShirtRadioLabel">Select Payment Method * </label>
                                  <label className="tShirtLabelRightNormal">*Option Is Required</label>
                              </div>
                              <div className="tShirtCssFlex">
                                  <div style={{display:"flex",width:"65%",marginLeft:"-10px"}}>
                                      <Select
                                          defaultValue="select an option"
                                          style={{
                                              width: "100%",
                                              marginLeft:"10px"
                                          }}
                                          allowClear
                                          onChange = {(e) => setPayment(e.target.value)}
                                          options={[
                                              { value: '1',label: 'VISA'},
                                              { value: '2',label: 'PAYPAL'},
                                              { value: '3',label: 'UnionPay'},
                                          ]}
                                      />
                                  </div>
                                  <div className="paymentDiv" style={{display:"flex"}}>
                                  </div>
                              </div>
                              <br/>
                              <div className="registerD">
                                  <label className="tShirtRadioLabel">Card Number *</label>
                                  <label className="tShirtLabelRightNormal">*Field Must Be Filled</label>
                              </div>
                              <Input  value={cardNumber}   onChange={(e) => setCardNumber(e.target.value)}  />
                              <br/><br/>
                              <div className="registerD">
                                  <label className="tShirtRadioLabel">Security Code *</label>
                                  <label className="tShirtLabelRightNormal">*Field Is Required</label>
                              </div>
                              <Input  value={securityCode}   onChange={(e) => setSecurityCode(e.target.value)} style={{ width: '100%' }} />
                              <br/><br/>
                              <div className="registerD">
                                  <label className="tShirtRadioLabel">Expiry Date *</label>
                                  <label className="tShirtLabelRightNormal">*Entry Is Required</label>
                              </div>
                              <DatePicker  placeholder="Enter date here" onChange={handleDateChange} style={{
                                  height:"35px",
                                  width:"100%",
                              }}  />
                              <div  className="buttonTShirtForm">
                                  <div className='labelDonate'  onClick={() => setShowConfirmation('1')}    >
                                      Confirm Your Purchase
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/*this is for confirmation div*/}
              <div className="viewDisclaimerDiv" style={{
                  "display": (showViewDisclaimerDiv==='1' ) ?'block':'none'
              }}>
                  <button className="close-btn" onClick={(e) => setShowViewDisclaimerDiv("0")}>X</button>

                  <div style={{
                    marginTop:"10vh"
                  }}>
                      <h1 style={{
                          marginLeft:"10px"
                      }}>
                          Trust Disclaimer for T-Shirts
                      </h1>
                      <br/>
                      <h2 style={{
                          marginLeft:"10px"
                      }}>
                          Please read the following disclaimer carefully before making a purchaseof T-Shirts from our store
                      </h2>
                      <br/>
                      <ul style={{
                          marginLeft:"5%"
                      }}>
                          <li>
                              The colours, sizes, and material types used to print T-Shirts may vary due to manufacturers' supply on demand.
                              variations in colour, size, and material type may occur and should be expected.
                          </li>
                          <li>
                              We do not accept any responsibility for discrepancies in colour, size, or material type variations.
                          </li>
                          <li>
                              Buyers are strongly advised to be certain about their purchase of T-Shirts before completing the transaction. Pleaseensure that you have thoroughly reviewed the product details, including size charts and material descriptions, beforemaking a purchase.
                          </li>
                          <li>
                              All sales of T-Shirts are final. We do not accept returns or exchanges for purchased T-Shirts, regardless of any variationsin colour, size, or material type.
                          </li>
                      </ul>

                      <br/>
                      <h3 style={{
                          marginLeft:"10px"
                      }}>
                          By proceeding with the purchase of T-Shirts from our store, you acknowledge and agree to the terms outined in thisdisclaimer, lf you have any questions or concerns regarding your purchase, please contact us before completing your order.
                      </h3>
                      <br/>
                      <h3 style={{
                          marginLeft:"10px"
                      }}>
                          Thank you for your understanding and cooperation.
                      </h3>
                      <br/>
                      <br/>
                  </div>
              </div>
              <div className="confirmationDiv" style={{
                  "display": (showConfirmation==='2' ) ?'block':'none'
              }}>
                  <div className="confirmSuccessDiv">
                      <div style={{
                          color:"#74A541",
                          fontSize:"38px",
                      }}>Your order  has now been confirmed</div>
                      <button className="close-button" onClick={() => setShowConfirmation('0')} >X</button>
                  </div>
              </div>
              <div className="confirmationDiv2" style={{
                  "display": (showConfirmation==='1' ) ?'block':'none'
              }}>
                  <h1 className="h1TShirt">Puchase Confirmation</h1><br/>
                  {/*<div className="confirmationCss" >
                       <div className="confirmationLeftCss">
                           <label>Full Name</label>
                       </div>
                      <div className="confirmationRightCss">
                          <label>Direct Contact Number</label>
                      </div>
                  </div>*/}
                  <div className="confirmationCss" >
                      <div className="confirmationLeftCss">
                          <label>Full Name</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>Jane Doe</label>
                      </div>
                  </div>
                  <br/>
                  <div className="confirmationCss" >
                      <div className="confirmationLeftCss">
                          <label>Direct Contact Number</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>+6499887765</label>
                      </div>
                  </div>
                  <br/>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>Hu Deng</label>
                      </div>
                      <div className="confirmationRightLabelCss">
                          <label>0272381398</label>
                      </div>
                  </div>
                  <br/>
                  <div className="confirmationCss" >
                      <div className="confirmationLeftCss">
                          <label>Email adress</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>DHDENGHU@GMAIL.COM</label>
                      </div>
                  </div>
                  <br/>
                  <div className="confirmationCss" >
                      <div className="confirmationLeftCss">
                          <label>Physical Adress</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>77 View Rd</label>
                      </div>
                  </div>
                  <br/>
                  <div className="confirmationCss" >
                      <div className="confirmationLeftCss">
                          <label>T-Shirt Size</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>Shoulder</label>
                      </div>
                      <div className="confirmationRightLabelCss">
                          <label>Arm</label>
                      </div>
                      <div className="confirmationRightLabelCss">
                          <label>Chest</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>2</label>
                      </div>
                      <div className="confirmationRightLabelCss">
                          <label>3</label>
                      </div>
                      <div className="confirmationRightLabelCss">
                          <label>4</label>
                      </div>
                  </div>
                  <br/>
                  <div className="confirmationCss" >
                      <div className="confirmationLeftCss">
                          <label>Payment Method</label>
                      </div>
                      <div className="confirmationRightCss">
                          <label>Card Number</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>VISA</label>
                      </div>
                      <div className="confirmationRightLabelCss">
                          <label>1234567898765432</label>
                      </div>
                  </div>
                  <br/>
                  <div className="confirmationCss" >
                      <div className="confirmationLeftCss">
                          <label>Security Number</label>
                      </div>
                  </div>
                  <div className="confirmationCss" >
                      <div className="confirmationRightLabelCss">
                          <label>051</label>
                      </div>
                  </div>
                  <div className="buttonConfirmAndOrder">
                      <div className='labelTShirt' onClick={handleTshirtSubmit}    >
                          CONFIRM AND ORDER
                      </div>
                  </div>
                  <div className="cancelConfirmAndOrder">
                      <div className="cancel-confirmation" onClick={() => setShowConfirmation('0')}     >
                          Cancel Confirmation
                      </div>
                  </div>
              </div>
              <div className="tShirtMask" style={{
                  zIndex: (showConfirmation==='1' ) ?'2':'1'
              }}>
              </div>
          </div>
  );
}
export default TShirtFormCard