import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        id : "",
        pw: ""
    });

    return (
        <div id='login-div' className='bgc'>
            <InputField data={loginInfo} onChange={setLoginInfo}/>
        </div>
    );
}

const InputField = ({data, onChange}) => {

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        
        onChange({
            ...data,
            [name] : [value]
        });
    };

    const page2Register = () =>{
        navigate("/register");
    };

    const handleClick = (e) =>{
        e.preventDefault();
        if(data.id === "" || data.pw ===""){
            alert("Fill out every form");
        }
        else{
            console.log("Sending data to server...")
            //Login API 정해지면 URL 변경하겠음
            axios.post("/api/login", {
                    id : data.id,
                    pw : data.pw
            })
            .then((res) =>{
                const result = res.data.result;
                
                console.log("response : " + result);
                if(result === "true"){
                    //로그인 성공하면 페이지 변경, 나중에 추가되면 변경 예정
                    const access_token = res.data.token;

                    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
		            axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

                    //history.push("/mainPage");
                }else{
                    if(result ==="id invalid"){
                        alert("Wrong Id. Please Check Again");
                    }else{
                        alert("Wrong Pwd. Please Check Again");
                    }
                }
            })
            .catch(error =>{
                console.log(error)
            });
            onChange({
                id:"",
                pw:""
            });
        }
    };

    return (
        <>
            <b>ID</b>
            <br/>
            <input
                type="text"
                placeholder='ID' 
                name="id" 
                onChange={handleChange}
                value={data.id}/>
            <br/>
            <b className='font'>PASSWORD</b>
            <br/>
            <input
                type="password"
                placeholder='PWD' 
                name="pw" 
                onChange={handleChange}
                value={data.pw}/>
            <br/>
            <button onClick={page2Register}>Sign Up</button>
            <button onClick={handleClick}>Sign In</button>
        </>
    );
}

export default LoginPage;