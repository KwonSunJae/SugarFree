import React from "react";
import { Route, Routes } from "react-router-dom";

// import About from './components/About';
// import Home from './components/Home';
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainPage } from "./pages/MainPage/Main";
import { MyMainPage } from "./pages/MainPage/My";
import { GiveCandyPage } from "./pages/GiveCandyPage";
import { InputNamePage } from "./pages/GiveCandyPage";
import { TypeSelectPage } from "./pages/GiveCandyPage";
import { SelectGiftPage } from "./pages/GiveCandyPage";
import { WriteMessagePage } from "./pages/GiveCandyPage";
import { CheckGiveCandyPage } from "./pages/GiveCandyPage";


const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage></MainPage>} />
      <Route path="/main/userid" element={<MyMainPage></MyMainPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      <Route path="/givecandy" element={<GiveCandyPage></GiveCandyPage>} />
      <Route path="/givecandy/input-name" element={<InputNamePage></InputNamePage>} />
      <Route path="/givecandy/input-name/type-select" element={<TypeSelectPage></TypeSelectPage>} />
      <Route path="/givecandy/input-name/type-select/select-gift" element={<SelectGiftPage></SelectGiftPage>} />
      <Route path="/givecandy/write-message" element={<WriteMessagePage></WriteMessagePage>} />
      <Route path="/givecandy/check-givecandy" element={<CheckGiveCandyPage></CheckGiveCandyPage>} />
    </Routes>
  );
}

export default App;