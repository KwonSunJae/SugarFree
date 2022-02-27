import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';



const InputName = () => {

  const navigate = useNavigate();

  const typeSelect = (e) => {
    navigate("/givecandy/type-select");
  }


  return (
    <div className="bgc" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">당신의 이름은?</p>
      <div class="grayBox">
        <input type="text">

        </input>

      </div>

      <button onClick={typeSelect} class="imgbutton"><img src={"/img/btn_next_light_250.png"} height="150" width="150" /></button>

    </div>
  );
}

export default InputName;
