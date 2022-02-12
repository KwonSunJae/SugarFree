

import React from "react";
import { Route,Link,Routes } from "react-router-dom";

import About from './components/About';
import Home from './components/Home';

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
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;