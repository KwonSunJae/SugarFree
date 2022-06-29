import { useState,useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

const WriteMessage = () =>{
    const [userName, setUserName] = useState(""); // 받는사람 - 서버에서 값 받아와야함
    const [content, setContent] = useState(""); //함께 보낼 메세지 내용 
    const navigate = useNavigate();
    const texthandler = (e) => {
        setContent(e.target.value);
    }
    const onclick = (e) => {
        localStorage.setItem("giveMsg",content);
        navigate("/givecandy/check-givecandy");
        console.log(content);  // content 내용 - 서버연결
        setContent("");
    }
    useEffect(function(){
        setUserName(localStorage.getItem("senderNick"));
      },[])
    return (
        <div>
            <style>
             @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
            </style>
            <br/>
            <p className="font1">선물 보내기</p>
            <div>
                <p>{userName}님에게 보낼 메세지를 적어주세요</p>
                <form>
                    <textarea
                    value={content}
                    rows="20"
                    cols="50"
                    placeholder="내용을 입력해주세요"
                    onChange={texthandler}/>
                </form>
            </div>
            <button className="imgbutton" onClick={onclick}><img src={"/img/btn_give_light_250.png"} height="150" width="150" /></button>
        </div>
    );
}

export default WriteMessage;