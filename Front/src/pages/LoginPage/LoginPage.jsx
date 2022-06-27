
import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyMainPage } from '../MainPage/My';


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
                        const access_token = res.data.token;

                        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                        navigate(`/main/${data.id}`);
                    } else {
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
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
            </style>
            <p className="font">ID</p>
            <input className='input'
                type="text"
                placeholder='ID'
                name="id"
                onChange={handleChange}
                value={data.id} />
            <p className='font'>PASSWORD</p>
            <input className='input'
                type="password"
                placeholder='PWD'
                name="pw"
                onChange={handleChange}
                value={data.pw} />
            <br />

            <button onClick={handleClick} onMouseEnter={click} onMouseLeave={click} className="imgbutton" type="button">
                <img src={clicked ? "/img/btn_login_light_250.png" : "/img/btn_login_dark_250.png"} height="80" width="80" />

            </button>
            <button onClick={page2Register} onMouseEnter={cclick} onMouseLeave={cclick} className="imgbutton" type="button">
                <img src={cclicked ? "/img/btn_join_light_250.png" : "/img/btn_join_dark_250.png"} height="80" width="80" />

            </button>
        </>
    );
}

export default LoginPage;