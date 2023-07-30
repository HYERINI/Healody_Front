import './App.css';
import React , {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './page/Login';
import JoinMembershipPage from './page/JoinMembershipPage';
import LoginPage from './page/LoginPage';
import AgreePage from './page/AgreePage';
import PhoneCertified from './page/PhoneCertified';
import Family_care_detail from './page/Family_care_detail';
import Family_invite from './page/Family_invite';
import Family_main_none from './page/Family_main_none';
import Family_main from './page/Family_main';
import tailwindcss from 'tailwind.css';

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

  const [isCreated, setIsCreated] = useState(true);
  
  return (
    <>
     <Mobile>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/join_page" element={<JoinMembershipPage />} />
            <Route path="/login_page" element={<LoginPage />} />
            <Route path="/agree_page" element={<AgreePage />} />
            <Route path="/phone_certified" element={<PhoneCertified />} />

            {isCreated ? (
              <Route exact path="/" element={<Family_main />} />
            ) : (
              <Route exact path="/" element={<Family_main_none />} />
            )}
            {isCreated && (
              <>
                <Route exact path="/Family_invite" element={<Family_invite />} />
                <Route exact path="/Family_care_detail" element={<Family_care_detail />} />
              </>
            )}
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
