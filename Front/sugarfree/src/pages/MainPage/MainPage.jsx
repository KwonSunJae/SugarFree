import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './MainPage.css';

const MainPage = () => {

  function loginClick(e) {
    window.location.href("/home/login")
  }
  function resisterClick(e) {
    window.location.replace("/home/register")
  }
  const [userNum, setUserNum] = useState(0);
  const [candyNum, setCandyNum] = useState(0);
  const [clicked, setClicked] = React.useState(true);
  const click = () => setClicked(current => !current);
  const [cclicked, setCclicked] = React.useState(true);
  const cclick = () => setCclicked(current => !current);

  return (

    <div className="bgc">

      <h3>가입자 수 : {userNum}</h3>
      <h3>전달된 선물 수 : {candyNum}</h3>

      <img src={"/img/candyMachine_512.png"} alt="candyMachine" />
      <br></br>
      <Link to="/home/login">
        <button onMouseEnter={click} onMouseLeave={click} className="imgbutton" type="button"><img src={clicked ? "/img/btn_login_light_250.png" : "/img/btn_login_dark_250.png"} height="100" width="100" /></button>
      </Link>
      <button onClick={resisterClick} onMouseEnter={cclick} onMouseLeave={cclick} className="imgbutton" type="button"><img src={cclicked ? "/img/btn_join_light_250.png" : "/img/btn_join_dark_250.png"} height="100" width="100" /></button>

    </div>
  );
}

export default MainPage;