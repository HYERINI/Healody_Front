import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './page/Login';
import JoinMembershipPage from './page/JoinMembershipPage';
import LoginPage from './page/LoginPage';
import AgreePage from './page/AgreePage';


export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:730px)"
  });
  
  return <>{isMobile && children}</>
}

export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:730px)"
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
            <Route path="/join_page" element={<JoinMembershipPage />} />
            <Route path="/login_page" element={<LoginPage />} />
            <Route path="/agree_page" element={<AgreePage />} />
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
