import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './page/Login';
import InputBox from './component/InputBox';


export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:760px)"
  });
  
  return <>{isMobile && children}</>
}

export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:760px)"
  });
  
  return <>{isPc && children}</>
}


function App() {
  return (
    <>
     <Mobile>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login_page" element={<InputBox />} />
          </Routes>
        </BrowserRouter>
     </Mobile>
     <PC>
      PC뷰
     </PC>
    </>
  );
}

export default App;
