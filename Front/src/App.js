import React from "react";
import { Route, Routes } from "react-router-dom";

// import About from './components/About';
// import Home from './components/Home';
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainPage } from "./pages/MainPage/Main";
import { GiveCandyPage } from "./pages/GiveCandyPage";
import { MyMainPage } from "./pages/MainPage/My";

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage/>}>
        <Route path=":user_id" element={<MyMainPage/>}/>
      </Route>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/givecandy" element={<GiveCandyPage/>} />
    </Routes>
  );
}

export default App;