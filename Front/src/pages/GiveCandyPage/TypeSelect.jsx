import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';



const TypeSelect = () => {

  const [typeflag, settypeflag] = useState(false);
  const navigate = useNavigate();

  const ongifthandler = () => {
    alert("베타 버전에서는 지원하지 않는 서비스에요. 다음에 다시만나요 ;-)");
  }

  const ondevclick = () => {
    setClick(!click);
    settypeflag(true);
    console.log("마음만 전할래요");
  }

  const selectGift = (e) => {
    if (typeflag) {
      localStorage.setItem("giveGift", false);
      navigate("/givecandy/input-name/type-select/select-gift");
      settypeflag(false);
    } else {
      alert("아무 옵션도 선택하지 않았어요! 옵션을 선택해주세요");
    }
  }

  const [click, setClick] = useState(true);

  return (
    <div className="typeSelect" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">선물보내기</p>

      <div className="grayBox" onClick={ongifthandler}>

        <p className="typeTitle">진짜 선물과 함께 전달하기</p>
        <img className="giveGiftImg" src={"/img/give_gift.png"} width="60px"></img>
        <p className="intro">같이 전달할 기프티콘 이미지를 준비해주세요<br />화이트데이에 편지와 함께 전달해드릴게요 !</p>
        <p></p>
      </div>
      <br></br>

      <div className={`grayBox ${click ? '' : 'click'}`} onClick={ondevclick}>

        <p className="typeTitle">마음만 전할래요</p>
        <img className="giveGiftImg" src={"/img/give_heart.png"} width="60px"></img>

        <p className="intro">메세지만 전달해드릴게요</p>
      </div>

      <button onClick={selectGift} className="nextBtn">
        <img className="nextImg" src={"/img/next.png"} width="20px"></img>
        다음</button>

    </div>
  );
}

export default TypeSelect;