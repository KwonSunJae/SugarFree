import React, { useState } from 'react';
import candyMachine from 'Front/sugarfree/public/img/candyMachine_512.png';


const MainPage = () => {
  const [userNum, setUserNum] = useState(0);
  const [candyNum, setCandyNum] = useState(0);

  return (

    <div style={{ backgroundColor: '#F2DBD8' }}>
      <h3>가입자 수 : {setUserNum}</h3>
      <h3>전달된 선물 수 : {setCandyNum}</h3>
      <img src={candyMachine} alt="candyMachine" />
      <br></br>
      <button type="button"><img src="Front/sugarfree/public/img/btn_login_light_250.png" height="80" width="100" /></button>
    </div>
  );
}
export default MainPage;