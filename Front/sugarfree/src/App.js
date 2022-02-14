import React from "react";
import { Route, Routes } from "react-router-dom";

// import About from './components/About';
// import Home from './components/Home';
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainPage } from "./pages/MainPage/Main";
import { MyMainPage } from "./pages/MainPage/My";


const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage></MainPage>} />
      <Route path="/main/userid" element={<MyMainPage></MyMainPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />

    </Routes>
    //</div>
  );
}

export default App;