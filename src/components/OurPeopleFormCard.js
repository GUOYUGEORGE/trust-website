import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import './OurPeopleFormCard.css';
import {Link} from "react-router-dom";
import { Input , Select ,Button,DatePicker  } from "antd";
import VideoCardsItem from "./VideoCardsItem";
import { ReactComponent as NewZealandMap }  from './New_Zealand(location_map).svg'; // 假设你有一个 SVG 文件

const OurPeopleFormCard = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const handleRegionClick = (id) => {
        // setSelectedRegion(e.target.id); // 捕获点击区域的id
        const regionId = id; // 确保你的 SVG 地图中的路径有唯一的 id
        setSelectedRegion(regionId); // 更新 selectedRegion 状态
    };
  return (
      <div className="">
          <div className="imgOurPeople-container">
              <div className="textOurPeople-container">
                  Ko Matou - Our People
              </div>
          </div>
          <div style={{
              "display":"flex"
          }}>
              <div style={{ position: 'relative', width: '50%', height: '80vh',}}>
                  <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '15%',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',  /* 半透明背景 */
                      padding: '10px',
                      borderRadius: '5px',
                      zIndex: 10,  /* 确保文本在地图上方 */
                  }}>
                      <h2>Identify By Location</h2>
                      <h3>Aotearoa New Zealand</h3>
                      <br/>
                      <h3>Select a region from the map to view <br/>
                          profiles of current claimants by their <br/>location</h3>
                  </div>

                  {/* 地图部分 */}
                  <NewZealandMap
                      width="100%"  /* 使地图占满宽度 */
                      height="auto"  /* 高度自适应 */
                      className="newZealandMap"

                      onClick={(e) => {
                          if (e.target.tagName === 'path') {
                              handleRegionClick(e.target.id); // 处理点击事件，捕获点击的区域 ID
                          }
                      }}
                  />
              </div>

              <div style={{ display:"flex",width: '50%', padding: '90px' }}>
                  {/*Christchurch*/}
                  {selectedRegion==="path1369" ? (
                      <div className="card">
                          <div className="location-title">Christchurch</div>
                          <div className="profile">
                              <img src="https://via.placeholder.com/60" alt="Profile Picture" />
                                  <div className="profile-info">
                                      <h3>Mary Winiata | Followed by Ranking</h3>
                                      <p>Southland</p>
                                  </div>
                          </div>
                          <div className="description">
                              Māori used pukatea for several medicinal purposes, it contains an alkaloid related to
                              morphine although without the side effects of that drug. Because of these analgesic
                              properties, the pulped inner bark was used to relieve toothache and a decoction of bark
                              boiled in water was used for ulcers, skin complaints generally, and syphilis.
                          </div>
                      </div>
                  ) : (
                      selectedRegion==="path1338" ? (
                          <div className="card">
                              <div className="location-title">Southland</div>
                              <div className="profile">
                                  <img src="https://via.placeholder.com/60" alt="Profile Picture" />
                                  <div className="profile-info">
                                      <h3>Mike Wilson | Followed by Ranking</h3>
                                      <p>Southland</p>
                                  </div>
                              </div>
                              <div className="description">
                                  Māori used pukatea for several medicinal purposes,it contains an alkaloid related to morphine although without
                                  the side effects of that drug. Because of these analgesic properties,
                                  the pulped inner bark was used to relieve toothache and a decoction of bark boiled
                                  in water was used for ulcers, skin complaints generally, and syphilis.
                              </div>
                              <br/>
                              <div className="profile">
                                  <img src="https://via.placeholder.com/60" alt="Profile Picture" />
                                  <div className="profile-info">
                                      <h3>Joanna Myers | Followed by Ranking</h3>
                                      <p>Southland</p>
                                  </div>
                              </div>
                              <div className="description">
                                  Māori used pukatea for several medicinal purposes,it contains an alkaloid
                                  related to morphine although without the side effects of that drug. Because of these analgesic properties,
                                  the pulped inner barkwas used to relieve toothache and a
                                  decoction of bark boiled in water was used for ulcers, skin complaints generally, and syphilis.
                              </div>
                              <br/>
                              <div className="profile">
                                  <img src="https://via.placeholder.com/60" alt="Profile Picture" />
                                  <div className="profile-info">
                                      <h3>Murray Johnston | Followed by Ranking</h3>
                                      <p>Southland</p>
                                  </div>
                              </div>
                              <br/>
                              <div className="description">
                                  Māori used pukatea for several medicinal purposes,it contains an alkaloid
                                  related to morphine although without the side effects of that drug. Because of these analgesic properties,
                                  the pulped inner barkwas used to relieve toothache and a
                                  decoction of bark boiled in water was used for ulcers, skin complaints generally, and syphilis.
                              </div>
                          </div>
                      ) : (
                          <div className="card">
                              <div className="location-title">mapId = {selectedRegion}-no data now</div>
                              <div className="profile">
                                  <img src="https://via.placeholder.com/1" alt="Profile Picture" />
                                  <div className="profile-info">
                                      <h3>no data now | Followed by Ranking</h3>
                                      <p>Southland</p>
                                  </div>
                              </div>
                              <div className="description">
                                  no data now
                              </div>
                          </div>
                      )
                  )}
              </div>
          </div>
      </div>
  );
}
export default OurPeopleFormCard