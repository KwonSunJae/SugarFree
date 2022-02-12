

import React from "react";
import { Route,Link,Routes } from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <div >
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
    
      <Routes>
      <Route exact path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      </Routes>
    </div>
  );
}

export default App;