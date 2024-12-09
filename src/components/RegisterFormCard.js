import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import './RegisterFormCard.css';
import { ProForm,ProFormRadio } from '@ant-design/pro-components';
import { Input , Select ,Button ,DatePicker } from "antd";
import {Link} from "react-router-dom";

const RequestInformationFormCard = () => {
    const [returnDiv, setReturnDiv] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [nameOfHapuu, setNameOfHapuu] = useState('');
    const [european, setEuropean] = useState('');
    const [pacificIsland, setPacificIsland] = useState('');
    const [ethnicGroup, setEthnicGroup] = useState('');
    const [others, setOthers] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [streetNumberAndName, setStreetNumberAndName] = useState('');
    const [unitNumber, setUnitNumber] = useState('');
    const [suburd, setSuburd] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [birthday, setBirthday] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [nationalityDesc, setNationalityDesc] = useState('');

    const titleChange = (e) => {
        setSelectedTitle(e.target.value);
    };
    const handleTitleRadioChange = (event) => {
        setSelectedTitle(event.target.value);
    };
    const [selectedGender, setSelectedGender] = useState('');
    const handleGenderRadioChange = (event) => {
        setSelectedGender(event.target.value);
    };
    const [selectedNationality, setSelectedNationality] = useState('');
    const handleNationalityRadioChange = (event) => {
        setSelectedNationality(event.target.value);
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
    };

    // for img
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // 读取文件内容并将其转换为 Data URL
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        var desc = "";
        if(selectedNationality==='maori'){
            desc = nameOfHapuu;
        } else if(selectedNationality==='european'){
            desc = european;
        } else if(selectedNationality==='pacificIsland'){
            desc = pacificIsland;
        } else if(selectedNationality==='ethnicGroup'){
            desc = ethnicGroup;
        } else if(selectedNationality==='others'){
            desc = others;
        }
        const formData = {
            "fullName":fullName,
            "emailAddress":emailAddress,
            "title":selectedTitle,
            "gender":selectedGender,
            "birthday":birthday,
            "nationality":selectedNationality,
            "nationalityDesc":desc,
            "streetInfo":streetNumberAndName,
            "apartmentInfo":11,
            "suburd":suburd,
            "postcode":postcode,
            "country":country,
            "ethnicity":ethnicity,
            "registrationOption":11,
            "pictureIdentification":111111
        };
        console.log("formData",formData);
        try {
            const response = await fetch('http://localhost:8080/saveRegisterForm', {
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
          <div className="registerInformationDiv">
          </div>
          <div className="overlayRegister">
              <div className="registerInformationTitle">
                  ID: 01
                  <br/>
                  Registration Form
                  <br/>
                  Application Is Open To All Nationalities
              </div>
              <div className="indicator">
                  <span onClick={() => setDotStateRequest('1')} style={{
                      "background-color": (dotStateRequest==='1' || dotStateRequest==='0') ?'red':'#000'
                  }}></span>
                  <span onClick={() => setDotStateRequest('2')} style={{
                      "background-color": dotStateRequest==='2' ?'red':'#000'
                  }}></span>
              </div>
              <div className="registerDiv2"  style={{
                  "display": (dotStateRequest==='1' || dotStateRequest==='0') ?'block':'none'
              }}>
                  <div className="registerCss" >
                      <div className="registerLeftCss">
                          <div className="registerLeftCss1">
                              <label className="labelLeft">Personal Details</label><br/>
                              <div className="registerD">
                                  <label className="labelLeft">Title * </label>
                                  <label className="labelRight">*Field Must Be Selected</label>
                              </div>
                          </div>
                          <div className="registerLeftCss1">
                              <div className="registerD">
                                  <ProFormRadio.Group
                                      options={[
                                          { label: 'mr', value: 'mr' },
                                          { label: 'mrs', value: 'mrs' },
                                      ]}
                                      style={{ display: 'flex', width: '20%', lineHeight: '320px' }}
                                      onChange={titleChange}
                                  />
                              </div>
                              <br/>
                              <div className="registerD">
                                  <label className="labelLeft">Full Name *</label>
                                  <label className="labelRightNormal">*Field Must Be Filled</label>
                              </div>
                              <Input placeholder="First name and last name" value={fullName}   onChange={(e) => setFullName(e.target.value)}  />
                              <br/>
                              <br/>
                              <div className="registerD">
                                  <label className="labelLeft">Gender *</label>
                                  {/*<label className="labelRightNormal">*Field Must Be Filled</label>*/}
                              </div>
                              <ProFormRadio.Group
                                  name="radio"
                                  options={[
                                      { label: 'Male',value: 'male', },
                                      { label: 'Female',value: 'female'},
                                      { label: 'Prefer Not To Say',value: 'nottosay'}
                                  ]}
                                  style={{ display: 'flex', width: '20%', height: '30px' }}
                                  onChange={handleGenderRadioChange} // 监听变化事件
                              />
                              <div className="registerD">
                                  <label className="labelLeft">Date Of Birth *</label>
                                  <label className="labelRightNormal">*Field Must Be Filled</label>
                              </div>
                              <DatePicker  placeholder="Enter date here" onChange={(e) => setBirthday(e.target.value)} style={{
                                  height:"35px",
                                  width:"100%"
                              }}  />
                          </div>
                      </div>
                      <div className="registerLeftCss">
                          <div className="registerLeftCss3">
                              <label className="labelLeft">Full Residential Address </label>
                          </div>
                          <div className="registerLeftCss3">
                              <div className="registerD">
                                  <label className="radioLabel">Street Number And Name *</label>
                                  <label className="labelRight">*Field Must Be Selected</label>
                              </div>
                              <Input  value={streetNumberAndName} placeholder="32 Street Name"  onChange={(e) => setStreetNumberAndName(e.target.value)}   />
                              <br/> <br/>
                              <div className="registerD">
                                  <label className="radioLabel">Apartment / Unit Number *</label>
                                  <label className="labelRight">*Field Must Be Filled</label>
                              </div>
                              <Input  value={unitNumber}  placeholder="53"    onChange={(e) => setUnitNumber(e.target.value)}  />
                              <br/> <br/>
                              <div className="registerD">
                                  <label className="radioLabel">Suburd*</label>
                                  <label className="labelRight">*Field Must Be Filled</label>
                              </div>
                              <Input  value={suburd}  placeholder="Name of Suburd"   onChange={(e) => setSuburd(e.target.value)}  />
                              <br/> <br/>
                              <div className="registerD">
                                  <label className="radioLabel">Region/State/Province*</label>
                                  <label className="labelRight">*Both Fields Must Be Filled</label>
                              </div>
                              <label className="labelLeft">Postcode</label>
                              <Input  value={postcode} placeholder="3257"  onChange={(e) => setPostcode(e.target.value)} style={{ width: '40%' }} />
                              <label className="labelLeft">Country</label>
                              {/*<Input  value={country}   onChange={(e) => setCountry(e.target.value)}  style={{ width: '35%' }} />*/}
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
                                  onChange = {(e) => setCountry(e.target.value)}
                                  style={{ width: '40%' }}
                                  options={[
                                      { value: '1',label: 'New Zealand'},
                                      { value: '2',label: 'Chinese'},
                                      { value: '3',label: 'Japanese'},
                                  ]}
                              />
                              <br/>
                          </div>
                      </div>
                  </div>
                  <div className="registerCss" >
                      {/*<div className="registerLeftCss">
                          <div className="registerD">
                              <ProFormRadio.Group
                                  options={[
                                      { label: 'mr', value: 'mr' },
                                      { label: 'mrs', value: 'mrs' },
                                  ]}
                                  style={{ display: 'flex', width: '20%', height: '30px' }}
                                  onChange={titleChange}
                              />
                              <label className="labelRight">*Field Must Be Selected</label>
                          </div>
                          <br/>
                          <div className="registerD">
                              <label>Full Name *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <Input placeholder="Full name" value={fullName}   onChange={(e) => setFullName(e.target.value)}  />
                          <br/>
                          <br/>
                          <ProFormRadio.Group
                              name="radio"
                              options={[
                                  { label: 'Male',value: 'male', },
                                  { label: 'Female',value: 'female'},
                                  { label: 'Prefer Not To Say',value: 'nottosay'}
                              ]}
                              style={{ display: 'flex', width: '20%', height: '30px' }}
                              onChange={handleGenderRadioChange} // 监听变化事件
                          />
                          <div className="registerD">
                              <label>Date Of Birth *</label>
                              <label className="labelRightNormal">*Field Must Be Filled</label>
                          </div>
                          <DatePicker  placeholder="Enter date here" onChange={(e) => setBirthday(e.target.value)} style={{
                              height:"35px",
                              width:"100%"
                          }}  />

                      </div>
                      <div className="registerLeftCss">
                          <div className="registerDiv">
                              <div className="registerUp">
                                  <ProFormRadio.Group
                                      name="nationality"
                                      options={[
                                          { label: 'Maori',value: 'maori' }
                                      ]}
                                      value={selectedNationality}
                                      onChange={handleNationalityRadioChange} // 监听变化事件
                                  />
                              </div>
                              <div className="registerDown">
                                  <Input placeholder="Name of iwi/Hapuu" value={nameOfHapuu}   onChange={(e) => setNameOfHapuu(e.target.value)}  />
                              </div>
                              <div className="registerUp">
                                  <ProFormRadio.Group
                                      name="nationality"
                                      options={[
                                          { label: 'European',value: 'european' }
                                      ]}
                                      value={selectedNationality}
                                      onChange={handleNationalityRadioChange} // 监听变化事件
                                  />
                              </div>
                              <div className="registerDown">
                                  <Input placeholder="Specific Nationality" value={european}   onChange={(e) => setEuropean(e.target.value)}  />
                              </div>
                              <div className="registerUp">
                                  <ProFormRadio.Group
                                      name="nationality"
                                      options={[
                                          { label: 'Pacific Island',value: 'pacificIsland' }
                                      ]}
                                      value={selectedNationality}
                                      onChange={handleNationalityRadioChange} // 监听变化事件
                                  />
                              </div>
                              <div className="registerDown">
                                  <Input placeholder="Name Which Pacific Island" value={pacificIsland}   onChange={(e) => setPacificIsland(e.target.value)}  />
                              </div>

                              <div className="registerUp">
                                  <ProFormRadio.Group
                                      name="nationality"
                                      options={[
                                          { label: 'Ethnic Group',value: 'ethnicGroup' }
                                      ]}
                                      value={selectedNationality}
                                      onChange={handleNationalityRadioChange} // 监听变化事件
                                  />
                              </div>
                              <div className="registerDown">
                                  <Input placeholder="Name Which Ethnic Group" value={ethnicGroup}   onChange={(e) => setEthnicGroup(e.target.value)}  />
                              </div>

                              <div className="registerUp">
                                  <ProFormRadio.Group
                                      name="nationality"
                                      options={[
                                          { label: 'Other Nationalities',value: 'others' }
                                      ]}
                                      value={selectedNationality}
                                      onChange={handleNationalityRadioChange}
                                  />
                              </div>
                              <div className="registerDown">
                                  <Select
                                      defaultValue="select an option"
                                      style={{
                                          width: "100%"
                                      }}
                                      allowClear
                                      onChange = {(e) => setOthers(e.target.value)}
                                      options={[
                                          { value: '0',label: 'select an option'},
                                          { value: '1',label: 'Chinese'},
                                          { value: '2',label: 'Japanese'},
                                          { value: '3',label: 'New Zealand'},
                                      ]}
                                  />
                              </div>
                          </div>
                          <br/>
                      </div>*/}
                  </div>
              </div>
              <div   className={
                  dotStateRequest==='2'?"registerDiv4":"registerDiv3"
              } >
                  {/*className="registerDiv3"style={{
                  "display": dotStateRequest==='2' ?'block':'none'
              }}*/}
                  <label className="labelLeft">Other Further Details</label><br/>
                  <div className="registerCss">
                      <div className="registerLeftCss">
                          <div className="registerLeftCss1">
                              <div className="registerD">
                                  <label className="labelLeft">Ethnicity/Nationality(Optional) *</label>
                                  {/*<label className="labelRightNormal">*Field Must Be Filled</label>*/}
                              </div>
                              <Select
                                  defaultValue="Māori, Chinese, etc."
                                  style={{
                                      width: "100%"
                                  }}
                                  allowClear
                                  onChange = {(e) => setEthnicity(e.target.value)}
                                  options={[
                                      { value: '1',label: 'Chinese'},
                                      { value: '2',label: 'Māori'},
                                      { value: '3',label: 'Japanese'},
                                      { value: '4',label: 'New Zealand'},
                                  ]}
                              />
                              <div className="registerD">
                                  <label className="labelLeft">Email Address *</label>
                                  <label className="labelRightNormal">*Field Must Be Filled</label>
                              </div>
                              <Input placeholder="e.g. - jane@gmail.com" value={emailAddress}   onChange={(e) => setEmailAddress(e.target.value)}  />
                              <br/>
                              <br/>
                              <div className="registerCss1">
                                  <div className="registerLeftCss4">
                                      <input
                                          type="file"
                                          accept="image/*"
                                          className="fileInputCss"
                                          onChange={handleFileInputChange}
                                      />
                                      <br/>
                                  </div>
                                  <div className="registerLeftCss2">
                                      {selectedFile && (
                                      <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '80px' }} />
                                      )}
                                  </div>
                              </div>
                          </div>
                          {/*<div className="registerD">
                              <label className="radioLabel">Street Number And Name *</label>
                              <label className="labelRight">*Field Must Be Selected</label>
                          </div>
                          <Input  value={streetNumberAndName}   onChange={(e) => setStreetNumberAndName(e.target.value)}  />
                          <br/>
                          <br/>
                          <div className="registerD">
                              <label className="radioLabel">Apartment / Unit Number *</label>
                              <label className="labelRight">*Field Must Be Filled</label>
                          </div>
                          <Input  value={unitNumber}   onChange={(e) => setUnitNumber(e.target.value)}  />
                          <br/>
                          <br/>
                          <div className="registerD">
                              <label className="radioLabel">Suburd*</label>
                              <label className="labelRight">*Field Must Be Filled</label>
                          </div>
                          <Input  value={suburd}   onChange={(e) => setSuburd(e.target.value)}  />
                          <br/>
                          <br/>
                          <div className="registerD">
                              <label className="radioLabel">Region/State/Province*</label>
                              <label className="labelRight">*Both Fields Must Be Filled</label>
                          </div>
                          Postcode&nbsp;&nbsp;
                          <Input  value={postcode}   onChange={(e) => setPostcode(e.target.value)} style={{ width: '35%' }} />
                          &nbsp;&nbsp;Country&nbsp;&nbsp;
                          <Input  value={country}   onChange={(e) => setCountry(e.target.value)}  style={{ width: '35%' }} />
                          <br/>*/}
                      </div>
                      <div className="registerLeftCss">
                          <div className="registerLeftCss1">
                              <div className="registerD">
                                  <label className="labelLeft" >Registration Option*</label>
                                  <label className="labelRight">*Option Must Be Selected</label>
                              </div>
                              <div className="registerForRadio">
                                  <ProFormRadio.Group
                                  name="register"
                                  options={[
                                  { label: 'Volunteer',value: 'volunteer', },
                                  { label: 'Trust\'s Member',value: 'member'},
                                  { label: 'As a Volunteer and Member',value: 'volunteerMember'}
                                  ]}
                                  style={{ display: 'flex', width: '20%', height: '30px' }}
                                  onChange={handleGenderRadioChange} // 监听变化事件
                                  />
                              </div>
                          </div>

                          <div className="registerRightCss1">
                              {/* onClick={handleRegisterSubmit} */}  {/*() => setReturnDiv('1')*/}
                              <Button type="primary" autoInsertSpace={false} onClick={handleRegisterSubmit} className='registerInformation-form-submit-btn1'  >
                                  REGISTER
                              </Button>
                          </div>
                      </div>
                  </div>
                  <br/>
              </div>
          </div>
          <div className="registerMask">
          </div>
          <div className="confirmationReturnDiv" style={{
              "display": (returnDiv==='1' ) ?'block':'none'
          }}>
              <div className="confirmReturnDiv">
                  <label style={{
                      color:"#74A541",
                      fontSize:"38px",
                  }}>Kia Ora</label>
                  <br/>
                  <label style={{
                      color:"#74A541",
                      fontSize:"38px",
                  }}>Jane Wilkins</label>
                  <br/>
                  <label style={{
                      color:"#74A541",
                      fontSize:"22px",
                  }}>You have successfully registered as a volunteer</label>
                  <button className="close-button" onClick={() => setReturnDiv('0')} >X</button>
              </div>
          </div>
      </div>
  );
}
export default RequestInformationFormCard