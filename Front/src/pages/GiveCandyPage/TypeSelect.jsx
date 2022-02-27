import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';



const TypeSelect = () => {



  return (
    <div className="bgc" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">선물보내기</p>
      <div class="grayBox2">
        <p className="font1">진짜 선물과 함께 전달할래요</p>
        <p>같이 전달할 기프티콘 이미지를 준비해주세요</p>
        <p>화이트데이에 편지와 함께 전달해드릴게요</p>
      </div>
      <br></br>
      <div class="grayBox2">
        <p className="font1">마음만 전할래요</p>
        <p>메세지만 전달해드릴게요</p>
      </div>

      <button class="imgbutton"><img src={"/img/btn_next_light_250.png"} height="150" width="150" /></button>

    </div>
  );
}

export default TypeSelect;