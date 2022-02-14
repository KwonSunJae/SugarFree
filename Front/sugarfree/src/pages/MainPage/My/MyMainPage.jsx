import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './MyMainPage.css';



const MyMainPage = () => {

  const navigate = useNavigate();

  const shareClick = (e) => {
    navigate("/share");
  }
  const [userName, setUserName] = useState("");
  const [myCandyNum, setMyCandyNum] = useState(0);
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
      <p className="font1">{userName}님에게 도착한 {myCandyNum}개의 선물</p>
      <p className="font2">3월 14일에 뽑을 수 있어요</p>

      <img src={"/img/candyMachine_512.png"} height="450" width="450" alt="candyMachine" />
      <br></br>

      {/*<button onClick={shareClick} onMouseEnter={click} onMouseLeave={click} className="imgbutton" type="button">
        <img src={clicked ? "/img/btn_login_light_250.png" : "/img/btn_login_dark_250.png"} height="100" width="100" />
      </button>
  */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={shareClick}>공유버튼</button>
        <p className="font2">링크 공유하기 </p>
      </div>
    </div>
  );
}

export default MyMainPage;