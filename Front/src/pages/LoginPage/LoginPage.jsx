import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        id : "",
        pw: ""
    });

    return (
        <div id='login-div'>
            <fieldset>
                <legend>Input your Id and Password</legend>
                <InputField data={loginInfo} onChange={setLoginInfo}/>
            </fieldset>
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
            axios.post("http://127.0.0.1:5000/login/valid/", {
                    id : data.id,
                    pw : data.pw
            })
            .then((res) =>{
                const result = res.data.success;
                console.log("response : " + result);
                if(result === "valid"){
                    //로그인 성공하면 페이지 변경, 나중에 추가되면 변경 예정
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
        <form>
            <b>ID</b>
            <br/>
            <input
                type="text"
                placeholder='ID' 
                name="id" 
                onChange={handleChange}
                value={data.id}/>
            <br/>
            <b>PASSWORD</b>
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
        </form>
    );
}

export default LoginPage;