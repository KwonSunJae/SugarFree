import React, {useCallback, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

//나중에 여기에 질문 추가
const questions = {
    "1" : "1",
    "2" : "2",
    "3" : "3",
    "4" : "4"
};



const InputInfo = ({userInfo, onChangeUserInfo, onClickSave}) =>{
    
    //입력창에 보이는 값이 바뀔 때, state 변경
    const handleChange = (e) =>{
        const {name, value} = e.target;
        onChangeUserInfo({
            ...userInfo,
            [name] : [value]
        });
    }

    //중복 검사 버튼 클릭 시, 중복인지 아닌지 확인
    const handleCheckDuplicate = (e) =>{
        //db에서 같은 아이디가 있는지 검사하고 없다면 onChangeUserInfo로 id_duplicate true로 변경
        e.preventDefault()
        onChangeUserInfo({
            ...userInfo,
            "id_duplicate" : true
        });
    }

    const onChangeQuestion = (e) =>{
        const select = document.getElementById("questionSelect");
        const selectedQuestion = select.options[select.selectedIndex].value;
        onChangeUserInfo({
            ...userInfo,
            "question" : [selectedQuestion]
        });
    };

    //저장
    const handleClick = () =>{
        //save시 작동
        onClickSave();
    }

    // 비밀번호 visibility 변경
    const pwVisibility = () =>{
        let pwd = document.getElementById("pwdInput");
        if(pwd.type === "password"){
            pwd.type = "text"
        }else{
            pwd.type = "password";
        }
    }

    return(
        <>
            <b className='font'>아이디</b>
            <br/>
            <input
                type="text"
                placeholder='ID' 
                name="id" 
                onChange={handleChange}
                value={userInfo.id}
            />
            <button 
                name='id_duplicate'
                onClick={handleCheckDuplicate}>
            check
            </button>
            <br/>
            <b className='font'>비밀번호</b>
            <br/>
            <input
                id='pwdInput'
                type="password"
                placeholder='PWD' 
                name="pw" 
                onChange={handleChange}
                value={userInfo.pw}
            />
            <input type="checkbox" onClick={pwVisibility}/>Show Password
            <br/>
            <b className='font'>닉네임</b>
            <br/>
            <input
                type="text"
                placeholder='NICKNAME'
                name="nickname"
                onChange={handleChange}
                value={userInfo.nickname}
            />
            <br/>
            <b className='font'>비밀번호 찾기 질문</b>
            <br/>
            <select id='questionSelect'>
                <option value={questions["1"]}>1</option>
                <option value={questions["2"]}>2</option>
                <option value={questions["3"]}>3</option>
                <option value={questions["4"]}>4</option>
            </select>
            <br/>
            <b className='font'>비밀번호 찾기 답변</b>
            <br/>
            <input 
                id='answer'
                type="text"
                name='answer'
                onChange={handleChange}
                value={userInfo.answer}
            />
            <br/>
            <button onClick={handleClick}>Submit</button>
        </>
    );
}

const RegisterPage = () =>{
    const [userInfo, setUserInfo] = useState({
        "id" : "",
        "pw" : "",
        "nickname" : "",
        "que" : "",
        "id_duplicate" : false,
        "qustionNum" : "",
        "answer" : ""
    });
    const navigate = useNavigate();

    const onClickSave = () =>{
        //axios로 db에 전송


        navigate("/login/");
    }

    return(
        <div id='register-div' className='bgc'>
            <InputInfo 
                userInfo = {userInfo} 
                onChangeUserInfo={setUserInfo} 
                onClickSave = {onClickSave}
            />
        </div>
    );
}

export default RegisterPage; 