
import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import axios from '../../utils/api';
import setAuthorizationToken from "../../utils/auth_login"
import './LoginPage.css';

axios.defaults.withCredentials = true;

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        id: "",
        pw: ""
    });

    return (
        <div id='login-div' className='bgc'>
            <InputField data={loginInfo} onChange={setLoginInfo} />
        </div>
    );
}

const InputField = ({ data, onChange }) => {

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        onChange({
            ...data,
            [name]: [value]
        });
    };

    const page2Register = () => {
        navigate("/register");
    };

    const [clicked, setClicked] = useState(true);
    const click = () => setClicked(current => !current);

    const [cclicked, setCclicked] = useState(true);
    const cclick = () => setCclicked(current => !current);

    const handleClick = (e) => {
        e.preventDefault();
        if (data.id === "" || data.pw === "") {
            alert("Fill out every form");
        }
        else {
            console.log("Sending data to server...")
            //Login API 정해지면 URL 변경하겠음
            axios.post("/api/login", {
                id: data.id,
                pw: data.pw
            })

                .then((res) => {
                    const result = res.data.result;


                    console.log("response : " + result);
                    if (result === true) {
                        //로그인 성공하면 페이지 변경, 나중에 추가되면 변경 예정

                        const token = res.data.token;
                        localStorage.setItem('jwtToken', token);
                        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                        setAuthorizationToken(token);
                        console.log(token)
                        navigate(`/main/${data.id}`);

                    } else {
                        const token = res.data.token;
                        setAuthorizationToken(token);
                        if (result === "id invalid") {
                            alert("Wrong Id. Please Check Again");
                        } else {
                            alert("Wrong Pwd. Please Check Again");

                        }
                    }

                }
                )
                .catch(error => {
                    console.log(error)
                });
            onChange({
                id: "",
                pw: ""
            });
        }
    };

    return (
        <div className='loginPage'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
            </style>

            <p className="title">로그인</p>
            <p className="font">아이디</p>
            <input className='input'
                type="text"
                placeholder='ID'
                name="id"
                onChange={handleChange}
                value={data.id} />
            <p className='font'>비밀번호</p>
            <input className='input'
                type="password"
                placeholder='PWD'
                name="pw"
                onChange={handleChange}
                value={data.pw} />
            <br />

            <button onClick={handleClick} onMouseEnter={click} onMouseLeave={click} className="button" type="button">
                로그인
            </button>
            <button onClick={page2Register} onMouseEnter={cclick} onMouseLeave={cclick} className="button" type="button">
                회원가입
            </button>
        </div>

    );
}

export default LoginPage;