import React, { useState } from "react";
import styled from 'styled-components';
import Header from "../component/Today/TodayHeader";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  position: relative;
`

function MypageLayout() {

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const onLogoutClicked = () => {
        setShowLogoutModal(true);
    };

    const onCancelLogout = () => {
        setShowLogoutModal(false);
    };

    const onConfirmLogout = () => {  //삭제
        setShowLogoutModal(false);
    };

    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/Mypage_Profile');
    };

    const handleFamilyInviteClick = () => {
        navigate('/Mypage_FamilyInvite');
    };

    const handleFamilyManagementClick = () => {
        navigate('/Mypage_FamilyManagementMain');
    };

    const handlePasswordClick = () => {
        navigate('/Mypage_Password');
    };

    return (
        <Container>

        </Container>
    )
}

export default MypageLayout;