import React from "react";
import { Route,Routes } from "react-router-dom";

// import About from './components/About';
// import Home from './components/Home';
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {MainPage} from "./pages/MainPage"
const App = () => {
  return (
      <Routes>
        <Route path="/main/" element={<MainPage/>}/>
        <Route path="/login/" element={<LoginPage/>}/>
        <Route path="/register/" element={<RegisterPage/>}/>
      </Routes>
    //</div>
  );
}

export default App;