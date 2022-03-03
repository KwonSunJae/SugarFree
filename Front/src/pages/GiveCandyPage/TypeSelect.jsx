import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';



const TypeSelect = () => {
  const [typeflag ,  settypeflag] = useState(false);
  const navigate = useNavigate();

  const ongifthandler = () => {
    alert("베타 버전에서는 지원하지 않는 서비스에요. 다음에 다시만나요 ;-)");
  }

  const ondevclick = () => {
    // 여기에 css 적용 시키면 될 듯
    settypeflag(true);
    console.log("마음만 전할래요");
  }

  const selectGift = (e) => {
    if(typeflag){
      navigate("/givecandy/input-name/type-select/select-gift");
      settypeflag(false);
    } else{
      alert("아무 옵션도 선택하지 않았어요! 옵션을 선택해주세요");
    }
  }


  return (
    <div className="bgc" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">선물보내기</p>
      <div className="grayBox2" onClick={ongifthandler}>
        <p className="font1">진짜 선물과 함께 전달할래요</p>
        <p>같이 전달할 기프티콘 이미지를 준비해주세요</p>
        <p>화이트데이에 편지와 함께 전달해드릴게요</p>
      </div>
      <br></br>
      <div className="grayBox2" onClick={ondevclick}>
        <p className="font1">마음만 전할래요</p>
        <p>메세지만 전달해드릴게요</p>
      </div>

      <button className="imgbutton" onClick={selectGift}><img src={"/img/btn_next_light_250.png"} height="150" width="150" /></button>

    </div>
  );
}

export default TypeSelect;