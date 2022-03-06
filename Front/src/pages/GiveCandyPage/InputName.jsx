import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './GiveCandyPage.css';



const InputName = () => {

  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const typeSelect = (e) => {
    if(nickname === ""){
      alert("이름을 입력하지 않았어요. 입력해주세요");
    }else{
      navigate("/givecandy/input-name/type-select");
      setNickname("");
    }
  }

  const saveNickname = (e) =>{
    setNickname(e.target.value);  // 닉네임 - 서버연결
  }
  return (
    <div className="bgc" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
      </style>
      <br></br>
      <p className="font1">당신의 이름은?</p>

      <div className="grayBox">
        <input type="text"
        onChange={saveNickname}
        >


        </input>

      </div>

      <button onClick={typeSelect} className="imgbutton"><img src={"/img/btn_next_light_250.png"} height="150" width="150" /></button>


    </div>
  );
}

export default InputName;
