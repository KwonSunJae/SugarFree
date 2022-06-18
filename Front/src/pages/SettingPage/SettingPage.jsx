import react from "react";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const SettingPage = () => {

    const [userName, setUserName] = useState(""); // 현재 사용 유저 : 서버에서 받아와야 함
    const navigate = useNavigate();

    const quit = () => {
        alert("탈퇴 완료");
        //서버에서 해당 유저 삭제
        navigate("/main");
    }

    const cancel = () => {
        alert("탈퇴 취소");
        navigate("/main/"+{userName});
    }

    //여기 버튼 이미지 만들어주세요
    return (
        <div>
            <p>정말 떠나실 건 가요?</p>
            <button onClick={quit}>네</button>
            <button onClick={cancel}>아니요</button>
        </div>
    );
};

export default SettingPage;