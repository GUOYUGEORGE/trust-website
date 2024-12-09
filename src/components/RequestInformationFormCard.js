import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import './RequestInformationFormCard.css';
import {Link} from "react-router-dom";
import { ProForm,ProFormRadio } from '@ant-design/pro-components';
import { Input , Select ,Button ,DatePicker } from "antd";

const RequestInformationFormCard = () => {
    const [returnDiv, setReturnDiv] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [professionOther, setProfessionOther] = useState('');
    const [directContactNumber, setDirectContactNumber] = useState('');
    const [locations, setLocations] = useState('');
    const [textArea, setTextArea] = useState('');

    const handleChange = (event) => {
        setTextArea(event.target.value);
    };

    const [dotStateRequest, setDotStateRequest] = useState("0");


    // 使用 useState 来定义多选框的状态
    const [selectedInterests, setSelectedInterests] = useState([]);
    // 当多选框状态改变时调用的函数
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        // 判断多选框是否被选中
        if (event.target.checked) {
            // 如果被选中，将其值添加到已选择的兴趣列表中
            setSelectedInterests([...selectedInterests, value]);
        } else {
            // 如果取消选中，从已选择的兴趣列表中移除其值
            setSelectedInterests(selectedInterests.filter(item => item !== value));
        }
        console.info("11==",selectedInterests);
    };


    const handleRequestSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            "fullName":fullName,
            "emailAddress":emailAddress,
            "professionOther":professionOther,
            "locations":locations,
            "interests":selectedInterests.join(','),
            "infomationRequest":textArea,
            "directContactNumber":directContactNumber,
        };
        console.log("formData",formData);
        try {
            const response = await fetch('http://localhost:8080/saveRequestForm', {
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
          <div className="requesrInformationDiv">
          </div>
          <div className="overlay">
              <div className="requesrInformationTitle">
                  Information Request Form
                  <br/>
                  Giving Knowledge for Awareness
              </div>
              <div className="indicator">
                      <span onClick={() => setDotStateRequest('1')} style={{
                          "background-color": (dotStateRequest==='1' || dotStateRequest==='0') ?'red':'#000'
                      }}></span>
                  <span onClick={() => setDotStateRequest('2')} style={{
                      "background-color": dotStateRequest==='2' ?'red':'#000'
                  }}></span>
              </div>
              <div className="requesrInformationDiv2"  style={{
                  "display": (dotStateRequest==='1' || dotStateRequest==='0') ?'block':'none'
              }}>
                  <label className="requesrInformationTitle2">Personal Details</label><br/>
                  <br/>
                  <div className="requestCss" >
                      <div className="requestLeftCss">
                          <div className="registerD">
                              <label className="labelLeft">Full Name *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <div className="requestLeftCss">
                              <Input placeholder="First name and last name"  value={fullName}   onChange={(e) => setFullName(e.target.value)}  />
                          </div>
                          <div className="registerD">
                              <label className="labelLeft">Email Address *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <div className="requestLeftCss">
                              <Input value={emailAddress} placeholder="e.g. - jane@gmail.com"  onChange={(e) => setEmailAddress(e.target.value)}  />
                          </div>
                          <div className="registerD">
                              <label className="labelLeft">Direct Contact Number (Select Country) *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <div className="requestLeftCss">
                              {/*<Input value={directContactNumber} placeholder="New Zealand (+64)"   onChange={(e) => setDirectContactNumber(e.target.value)}  />*/}
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
                                  onChange = {(e) => setDirectContactNumber(e.target.value)}
                                  options={[
                                      { value: '1',label: 'Chinese'},
                                      { value: '2',label: 'Japanese'},
                                      { value: '3',label: 'New Zealand'},
                                  ]}
                              />

                          </div>
                      </div>
                      <div className="requestRightCss">
                          <div className="registerD">
                              <label className="labelLeft">Profession/Other *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <div className="requestLeftCss">
                              <Input placeholder="e.g. - Engineer, Architect, etc."  value={professionOther}   onChange={(e) => setProfessionOther(e.target.value)}  />
                          </div>
                          <div className="registerD">
                              <label className="labelLeft">Country of Location *</label>
                              <label className="labelRightNormal">*Option Is Required</label>
                          </div>
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
                              onChange = {(e) => setLocations(e.target.value)}
                              options={[
                                  { value: '1',label: 'Chinese'},
                                  { value: '2',label: 'Japanese'},
                                  { value: '3',label: 'New Zealand'},
                              ]}
                          />
                      </div>
                  </div>
                  <br/>
              </div>
              <div  className={
                  dotStateRequest==='2'?"requesrInformationDiv2":"requesrInformationDiv3"
              }>
                  <label className="requesrInformationTitle2">Information Request Details</label><br/>
                  <br/>
                  <div className="requestInfoCss" >
                      <div className="requestLeftCss1">
                          <div className="registerD">
                              <label className="labelLeft">Tick The Box *</label>
                              <label className="labelRightNormal2">*Option Is Required</label>
                          </div>
                          <div className="requestLeftCss1">
                              <div className="requestInfoDiv">
                                  <div className="requestNextUp">
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="history"
                                             checked={selectedInterests.includes('history')} // 检查该选项是否已被选中
                                             onChange={handleCheckboxChange}
                                      />
                                      Maori History
                                      <br />
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="flora"
                                             checked={selectedInterests.includes('flora')}
                                             onChange={handleCheckboxChange}
                                      />
                                      Flora and Fauna <br />
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="intellectual"
                                             checked={selectedInterests.includes('intellectual')}
                                             onChange={handleCheckboxChange}
                                      />
                                      Intellectual Property Rights <br />
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="indigenous"
                                             checked={selectedInterests.includes('indigenous')}
                                             onChange={handleCheckboxChange}
                                      />
                                      Indigenous/People`s Rights <br />
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="environment"
                                             checked={selectedInterests.includes('environment')}
                                             onChange={handleCheckboxChange}
                                      />
                                      Environment <br />
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="climate"
                                             checked={selectedInterests.includes('climate')}
                                             onChange={handleCheckboxChange}
                                      />
                                      Climate Change <br />
                                  </div>
                                  <div className="requestNextDown">
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="justice"
                                             checked={selectedInterests.includes('justice')} // 检查该选项是否已被选中
                                             onChange={handleCheckboxChange}
                                      />
                                      Justice <br />
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="instruments"
                                             checked={selectedInterests.includes('instruments')} // 检查该选项是否已被选中
                                             onChange={handleCheckboxChange}
                                      />
                                      International Instruments <br />
                                      <input className="checkboxCss"
                                             type="checkbox"
                                             value="other"
                                             checked={selectedInterests.includes('other')} // 检查该选项是否已被选中
                                             onChange={handleCheckboxChange}
                                      />
                                      Other <br />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="requestRightCss3">
                          <div className="registerD">
                              <label className="labelLeft">Information Request *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <div>
                              <div>
                                  <textarea name="infomationRequest" className="textareaCss" value={textArea} onChange={handleChange}></textarea>
                                  {/*onClick={handleRequestSubmit}*/}
                                  <button className='requestInformation-form-submit-btn' onClick={() => setReturnDiv('1')}   >Submit Message</button>
                              </div>
                          </div>
                          <div className="requestReturnDiv" style={{
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
                                  }}>We will get back to you through your email address
                                      <br/>regarding your request forthe information</label>
                                  <button className="close-button" onClick={() => setReturnDiv('0')} >X</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <br/>
              </div>
          </div>
          <div className="requesrInformationMask">
          </div>
      </div>
  );
}
export default RequestInformationFormCard