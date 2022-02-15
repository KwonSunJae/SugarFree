import React, { useState } from 'react';
import './MyMainPage.css';
import CustomPopup from "./CustomPopup";


const MyMainPage = () => {

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const [userName, setUserName] = useState("");
  const [myCandyNum, setMyCandyNum] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const [userUrl, setUserUrl] = useState("");

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

      <div style={{ display: 'flex', flexDirection: 'row' }} >
        <button className="imgbutton" onClick={(e) => setVisibility(!visibility)}> <img src={"/img/btn_share_light_250.png"} height="40" width="40" /></button>
        <CustomPopup className="font1"
          onClose={popupCloseHandler}
          show={visibility}
          title="링크 공유하기"
        >
          <p type="text">{userUrl}</p>
          <button onClick={(e) => setVisibility(!visibility)}>복사하기</button>

        </CustomPopup>

        <p className="font3">링크 공유하기 </p>
      </div>
    </div>
  );
}

export default MyMainPage;