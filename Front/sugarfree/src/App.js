import React from "react";
import { Route,Link,Routes } from "react-router-dom";

// import About from './components/About';
// import Home from './components/Home';
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";

function App() {
  return (
    // <div >
    //   <ul>
    //     <li>
    //       <Link to="/">홈</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">소개</Link>
    //     </li>
    //   </ul>
    // <Route path="/" element={<Home></Home>} />
    // <Route path="/about" element={<About></About>} />
      <Routes>
        <Route path="/home/login" element={<LoginPage></LoginPage>}/>
        <Route path="/home/register" element={<RegisterPage></RegisterPage>}/>
      </Routes>
    //</div>
  );
}

export default App;