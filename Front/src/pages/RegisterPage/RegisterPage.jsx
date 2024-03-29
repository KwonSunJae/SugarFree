import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/api';
import './RegisterPage.css';

//나중에 여기에 질문 추가
const questions = {
    "1": "당신의 고향은 어디인가요?",
    "2": "좋아하는 사람의 이름은?",
    "3": "아버지의 성함은?",
    "4": "좋아하는 캐릭터의 이름은?"
};



const InputInfo = ({ userInfo, onChangeUserInfo, onClickSave }) => {

    //입력창에 보이는 값이 바뀔 때, state 변경
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChangeUserInfo({
            ...userInfo,
            [name]: value
        });
    }

    //중복 검사 버튼 클릭 시, 중복인지 아닌지 확인
    const handleCheckDuplicate = (e) => {
        //db에서 같은 아이디가 있는지 검사하고 없다면 onChangeUserInfo로 id_duplicate true로 변경
        axios.get("/api/validate", {
            params: { id: userInfo.id }
        }).then((res) => {
            const result = res.data.result;
            console.log("response : " + result + "end");
            if (result === true) {
                onChangeUserInfo({
                    ...userInfo,
                    "id_duplicate": true
                });
                alert("사용할 수 있는 아이디 입니다.")
            } else {
                alert("사용할 수 없는 아이디 입니다.")
            }
        })
            .catch(error => {
                console.log(error)
            });
        e.preventDefault()

    }

    const onChangeQuestion = (e) => {
        const select = document.getElementById("questionSelect");
        const selectedQuestion = select.options[select.selectedIndex].value;
        console.log(selectedQuestion)
        onChangeUserInfo({
            ...userInfo,
            ['questionNum']: selectedQuestion,
        });
    };

    //저장
    const handleClick = () => {
        //save시 작동
        onClickSave();
    }

    // 비밀번호 visibility 변경
    const pwVisibility = () => {
        let pwd = document.getElementById("pwdInput");
        if (pwd.type === "password") {
            pwd.type = "text"
        } else {
            pwd.type = "password";
        }
    }

    return (

        <div id='register-div' className='resister'>
            <p className='title'>회원가입</p>
            <p className='rtitle'>아이디</p>

            <input className='rinput'
                type="text"
                placeholder='ID'
                name="id"
                onChange={handleChange}
                value={userInfo.id}
            />
            <button
                className='resisBtn'
                name='id_duplicate'
                onClick={handleCheckDuplicate}>
                중복확인
            </button>
            <br />
            <p className='rtitle'>비밀번호</p>

            <input className='rinput'
                id='pwdInput'
                type="password"
                placeholder='PWD'
                name="pw"
                onChange={handleChange}
                value={userInfo.pw}
            />
            <input className="checkbox" type="checkbox" onClick={pwVisibility} />비밀번호 보기
            <br />
            <p className='rtitle'>닉네임</p>

            <input className="rinput"
                type="text"
                placeholder='NICKNAME'
                name="nickname"
                onChange={handleChange}
                value={userInfo.nickname}
            />

            <br />
            <p className='rtitle'>비밀번호 찾기 질문</p>
            <select id='questionSelect' onChange={onChangeQuestion} value={userInfo.questionNum}>
                <option value='0'>질문을선택해주세요</option>
                <option value='1'>{questions["1"]}</option>
                <option value='2'>{questions["2"]}</option>
                <option value='3'>{questions["3"]}</option>
                <option value='4'>{questions["4"]}</option>
            </select>
            <br />
            <p className='rtitle'>비밀번호 찾기 답변</p>

            <input className='rinput'
                id='answer'
                type="text"
                name='answer'
                onChange={handleChange}
                value={userInfo.answer}
            />
            <button className="resisBtn2" onClick={handleClick}>회원가입</button>
        </div>

    );
}

const RegisterPage = () => {
    const [userInfo, setUserInfo] = useState({
        "id": "",
        "pw": "",
        "nickname": "",
        "id_duplicate": false,
        "questionNum": "",
        "answer": ""
    });
    const navigate = useNavigate();

    const onClickSave = () => {
        //axios로 dbe 전송
        if (userInfo.pw === "") {
            alert("비밀번호는 빈칼일 수 없습니다.");
        }
        else if (userInfo.id_duplicate === false) {
            alert(" 아이디 중복확인을 해주세요.")
        }
        else if (userInfo.answer === "") {
            alert("질문에 대한 답변이 빈칸일 수 없습니다.")
        }
        else if (userInfo.questionNum === "") {
            alert("질문을 선택해주세요.")
        }
        else {
            console.log({ userInfo })

            axios.post("/api/register", {
                id: userInfo.id,
                pw: userInfo.pw,
                nickname: userInfo.nickname,
                question: userInfo.questionNum,
                answer: userInfo.answer,


            }
            ).then((res) => {
                const result = res.data.result;
                console.log("response : " + result + "!");
                if (result === true) {
                    alert("정상적으로 회원가입이 되셨습니다.")
                    navigate("/login/");
                } else {
                    alert("알수 없는 오류로인하여 회원가입이 불가합니다.")

                }
            })
                .catch(error => {
                    console.log(error)
                });

        }

    }

    return (

        <InputInfo
            userInfo={userInfo}
            onChangeUserInfo={setUserInfo}
            onClickSave={onClickSave}
        />

    );
}

export default RegisterPage; 