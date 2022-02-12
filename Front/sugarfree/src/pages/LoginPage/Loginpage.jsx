import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [userInfo, setUserInfo] = useState({
        userId : "",
        userPwd: ""
    });

    return (
        <div id='login-div'>
            <fieldset>
            <legend>Input your Id and Password</legend>
            <InputField data={userInfo} onChange={setUserInfo}/>
            </fieldset>
        </div>
    );
}

const InputField = ({data, onChange}) => {

    // const history = useHistory();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        
        onChange({
            ...data,
            [name] : value
        });
    };

    const handleClick = (e) =>{
        e.preventDefault();
        if(data.userId === "" || data.userPwd ===""){
            alert("Fill out every form");
        }
        else{
            console.log("Sending data to server...")
            //Login API 정해지면 URL 변경하겠음
            axios.post("http://127.0.0.1:5000/login/valid/", {
                    userId : data.userId,
                    userPwd : data.userPwd
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
                userId:"",
                userPwd:""
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
                name="userId" 
                onChange={handleChange}
                value={data.userId}/>
            <br/>
            <b>PASSWORD</b>
            <input
                type="password"
                placeholder='PWD' 
                name="userPwd" 
                onChange={handleChange}
                value={data.userPwd}/>
            <br/>
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}

export default LoginPage;