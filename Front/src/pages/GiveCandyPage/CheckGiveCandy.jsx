import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from "../../utils/api"
const CheckGiveCandy = () =>{
    
    const [userName, setUserName] = useState(""); //받는 사람 : 서버연결
    const [flag, setFlag] = useState("");
    
    const navigate = useNavigate();
    // 닉네임, 받는유저, 선물된 이모티콘, 메세지내용이 서버로 성공적으로 보내지면 => 여기도 if문으로 해서 성공시
    //if()
    
    
    useEffect(function(){
        const Gift ={
            name: localStorage.getItem("giverNick"),
            description: localStorage.getItem("giveImg"),
            emoji: localStorage.getItem("giveGift"),
            photo: "",
            user_id: localStorage.getItem("giveId"),
        }
        setUserName(localStorage.getItem("senderNick"));
        console.log(Gift);
        axios.post("/api/givecandy",Gift).then((res)=>{
            if(res.data.result == true){
                alert(Gift.user_id+"님께 선물을 보냈어요!");
                navigate("/main/"+Gift.user_id);
            }
            else{
                alert(Gift.user_id+"님께 선물을 보내지 못했어요. 다시 시도해주세요");
                navigate("/main/"+Gift.user_id);
            }
        })
        setFlag(localStorage.getItem("giveId"));
    },[])
    



    const goToMain = () => {

        navigate("/main/"+flag);
        
    }
    return (
        <div>
             <style>
             @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
            </style>
            <br/>
            <p className="font1">{userName}님의 선물함</p>
            <img src={"/img/candyMachine_512.png"} height="450" width="450" alt="candyMachine" />
            {/* 이거 일단next버튼으로 해놓음 => "main/userid" 로 이동할 버튼 이미지 수정 ex) 메인으로 */}
            <button className="imgbutton" onClick={goToMain}><img src={"/img/btn_next_light_250.png"} height="150" width="150" /></button>
        </div>

    );

}


export default CheckGiveCandy;