import { useNavigate } from 'react-router-dom';

const CheckGiveCandy = () =>{
    const navigate = useNavigate();
    //timeout으로 안하면 이전 페이지에서 alert수행해서 timeout으로 설정
    setTimeout(()=> alert({/*받은 사람*/}+"님께 선물을 보냈어요!"),0);
    const goToMain = () => {
        navigate("/main");
    }
    return (
        <div>
             <style>
             @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap');
            </style>
            <br/>
            <p className="font1">{/*받은 사람*/}님의 선물함</p>
            <img src={"/img/candyMachine_512.png"} height="450" width="450" alt="candyMachine" />
            {/* 이거 일단next버튼으로 해놓음 => "main/userid" 로 이동할 버튼 이미지 수정 ex) 메인으로 */}
            <button className="imgbutton" onClick={goToMain}><img src={"/img/btn_next_light_250.png"} height="150" width="150" /></button>
        </div>

    );

}


export default CheckGiveCandy;