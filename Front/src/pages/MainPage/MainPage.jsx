import React, { useState } from 'react';



const MainPage = () => {
  const [userNum, setUserNum] = useState(0);
  const [candyNum, setCandyNum] = useState(0);

  return (

    <div style={{ backgroundColor: '#F2DBD8' }}>
      <h3>가입자 수 : {userNum}</h3>
      <h3>전달된 선물 수 : {candyNum}</h3>
      <img src={"/img/candyMachine_512.png"} alt="candyMachine" />
      <br></br>
      <button type="button"><img src="/img/btn_login_light_250.png" height="80" width="100" /></button>
    </div>
  );
}
export default MainPage;