import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';
import CustomPopup from "./CustomPopup";


const GiveCandyPage = () => {

  const navigate = useNavigate();

  const inputName = (e) => {
    navigate("/givecandy/input-name");
  }

  const [userName, setUserName] = useState(""); // 선물 받는 유저 : 서버에서 받아와야 함

  const [userUrl, setUserUrl] = useState("");

  return (

    <div className="bgc" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">{userName}님의 선물함</p>

      <img src={"/img/candyMachine_512.png"} height="450" width="450" alt="candyMachine" />
      <div className="overlay">
        <button onClick={inputName} className="giveBtn"><img src={"/img/btn_give_light_250.png"} height="150" width="150" /></button>
      </div>

    </div>
  );
}

export default GiveCandyPage;