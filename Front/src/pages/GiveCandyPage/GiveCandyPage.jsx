import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';
import CustomPopup from "./CustomPopup";
import axios from "../../utils/api"

const GiveCandyPage = () => {

  const navigate = useNavigate();

  useEffect(function () {
    const id = localStorage.getItem("giveId");
    console.log("give candy to", id);
    axios.get("/api/userinfo?id=" + id).then(function (res) {
      setUserName(res.data.nickname);
      console.log(res.data.nickname, "<- this is giveCandy main")
      localStorage.setItem("senderNick", res.data.nickname);
    })
  }, [])

  const inputName = (e) => {
    console.log(e);
    navigate("/givecandy/input-name");
  }

  const [userName, setUserName] = useState(""); // 선물 받는 유저 : 서버에서 받아와야 함

  const [userUrl, setUserUrl] = useState("");

  return (

    <div className="giveCandyPage" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">{userName}님의 선물함</p>

      <img className="cmi" src={"/img/candyMachine_512.png"} alt="candyMachine" />


      <button onClick={inputName} className="giveBtn" >
        <img className="giftImage" src={"/img/gift.png"} width="20px"></img>
        선물하기</button>


    </div>
  );
}

export default GiveCandyPage;