import React from "react";
import { Route, Routes } from "react-router-dom";

// import About from './components/About';
// import Home from './components/Home';
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainPage } from "./pages/MainPage/Main";
import { GiveCandyPage } from "./pages/GiveCandyPage";

import { MyMainPage } from "./pages/MainPage/My";

import { InputNamePage } from "./pages/GiveCandyPage";
import { TypeSelectPage } from "./pages/GiveCandyPage";
import { SelectGiftPage } from "./pages/GiveCandyPage";
import { WriteMessagePage } from "./pages/GiveCandyPage";
import { CheckGiveCandyPage } from "./pages/GiveCandyPage";

const App = () => {
  return (
    <Routes>

      <Route path="/main" element={<MainPage/>}>
        <Route path=":user_id" element={<MyMainPage/>}/>
      </Route>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/givecandy" element={<GiveCandyPage/>} />
      <Route path="/givecandy/input-name" element={<InputNamePage></InputNamePage>} />
<<<<<<< HEAD
      <Route path="/givecandy/input-name/type-select" element={<TypeSelectPage></TypeSelectPage>} />
      <Route path="/givecandy/input-name/type-select/select-gift" element={<SelectGiftPage></SelectGiftPage>} />
      <Route path="/givecandy/write-message" element={<WriteMessagePage></WriteMessagePage>} />
      <Route path="/givecandy/check-givecandy" element={<CheckGiveCandyPage></CheckGiveCandyPage>} />
=======
      <Route path="/givecandy/type-select" element={<TypeSelectPage></TypeSelectPage>} />

>>>>>>> ebd6ca0ded3ce61212578c1c2b45c9e55bb44fff
    </Routes>
  );
}

export default App;