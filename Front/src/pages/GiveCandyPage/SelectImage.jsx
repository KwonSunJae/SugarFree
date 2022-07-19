import { useState,useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "../../utils/api"
const UploadMessage = () =>{

    const [userName, setUserName] = useState(""); // 받는사람 - 서버에서 값 받아와야함
    const [content, setContent] = useState(""); //함께 보낼 메세지 내용 
    const navigate = useNavigate();
    const texthandler = (e) => {
        setContent(e.target.value);
    }
    
    const onImgChange = async (event) =>{
        console.log(event.target.files[0])
        const response  = await axios.post('/api/uploadImage',event.target.files[0]);
        console.log(response.data);
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
                <p>{userName}님에게 보낼 이모티콘이나 사진을 선택해주세요.</p>
                
                    {/* <textarea
                    value={content}
                    rows="20"
                    cols="50"
                    placeholder="내용을 입력해주세요"
                    onChange={texthandler}/> */}
                    <input type = 'file' className="imgInput" id = 'giveImg' accept="image/*" name = 'file' onChange={onImgChange}/>
                    <button onClick={onclick}>전송</button>
            </div>
        </div>
    );
}

export default UploadMessage;