import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './MainPage.css';



const MainPage = () => {

  const navigate = useNavigate();

  const loginClick = (e) => {
    navigate("/login");
  }

  const resisterClick = (e) => {
    navigate("/register");
  }

  const [userNum, setUserNum] = useState(0);
  const [candyNum, setCandyNum] = useState(0);
  const [clicked, setClicked] = useState(true);
  const click = () => setClicked(current => !current);
  const [cclicked, setCclicked] = useState(true);
  const cclick = () => setCclicked(current => !current);

  return (

    <div className="bgc" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font">가입자 수 : {userNum}</p>
      <p className="font">전달된 선물 수 : {candyNum}</p>

      <img src={"/img/candyMachine_512.png"} height="450" width="450" alt="candyMachine" />
      <br></br>

      <button onClick={loginClick} onMouseEnter={click} onMouseLeave={click} className="imgbutton" type="button">
        <img src={clicked ? "/img/btn_login_light_250.png" : "/img/btn_login_dark_250.png"} height="100" width="100" />
      </button>
      <button onClick={resisterClick} onMouseEnter={cclick} onMouseLeave={cclick} className="imgbutton" type="button">
        <img src={cclicked ? "/img/btn_join_light_250.png" : "/img/btn_join_dark_250.png"} height="100" width="100" />
      </button>
    </div>
  );
}

export default MainPage;