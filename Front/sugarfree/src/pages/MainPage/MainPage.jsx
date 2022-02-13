import React, {useState} from 'react';
//import { useHistory } from 'react-router-dom';

const MainPage = () => {
    const [userNum, setUserNum] = useState(0);
    const [candyNum, setCandyNum] = useState(0);

    return (
      <div>
          <h3>가입자 수 : {setUserNum}</h3>
          <h3>전달된 선물 수 : {setCandyNum}</h3>
          <img src={ require('./Front/sugarfree/public/img/candyMachine_512.png') } />
          <button type="button"><img src="Front/sugarfree/public/img/btn_login_light_250.png" alt=""/></button>
      </div>
  );
}
export default MainPage;