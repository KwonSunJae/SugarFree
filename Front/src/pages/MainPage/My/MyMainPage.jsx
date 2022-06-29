import React, { useState, useEffect } from 'react';
import {Navigate, useLocation, useNavigate, useParams} from 'react-router-dom';
import './MyMainPage.css';
import CustomPopup from "./CustomPopup";
import axios from '../../../utils/api';
import decodeJwt from "../../../utils/decode_jwt";

const MyMainPage = () => {
  let params = useParams();
  let location = useLocation();
  const user_id = params.user_id;
  
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const [userName, setUserName] = useState("");
  const [myCandyNum, setMyCandyNum] = useState();
  const [visibility, setVisibility] = useState(false);
  const [userUrl, setUserUrl] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const loginId ="";
    const sessionID = localStorage.getItem("jwt");
    console.log(sessionID);
    if(sessionID){
      loginId = decodeJwt(sessionID);
      console.log(loginId,"< token id");
      console.log(user_id,"log id");
      
    }
    if(loginId!= user_id){
      localStorage.removeItem("give");
      localStorage.removeItem("giveId");
      localStorage.setItem("give","true");
      localStorage.setItem("giveId",user_id);
      navigate("/givecandy");
    }
    
    
  },[]);
  useEffect(()=>{
    //axios로 유저 아이디를 보내서 nickname을 받아옴
    axios.get("/api/userinfo?id="+user_id)
      .then((res) =>{
        setUserName(res.data.nickname);
      })
      .catch((err) =>{
        alert("해당하는 아이디를 찾을 수 없습니다.")
      });
  }, [user_id])

  useEffect(() =>{
    axios.post("/api/mycandy" , {id : user_id})
      .then((res) =>{
        setMyCandyNum(res.data.length);
      })
      .catch((err) =>{
        alert("해당하는 아이디를 찾을 수 없습니다.")
      });
  },[user_id]);

  useEffect(()=>{
    //페이지 진입 시, url 세팅
    setUserUrl(`http://dev-front-tutor.openinfra-kr.ogr/${location.pathname}`);
  }, [location])
  
  const handlePopupClick = (e) =>{
    setVisibility(!visibility)
    navigator.clipboard.writeText(userUrl);
  }

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
          <button onClick={handlePopupClick}>복사하기</button>

        </CustomPopup>

        <p className="font3">링크 공유하기 </p>
      </div>
    </div>
  );
}

export default MyMainPage;