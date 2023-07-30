import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Logo from './../../img/login_logo.png';
import info from './../../img/InfoinfoIcon.svg';
import profile from './../../img/UserprofileIcon.svg';

const Container = styled.div`
  margin: 10px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  padding: 0 5px;
  box-sizing: border-box;
`
const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
`
const RightBox = styled.div`
  display: flex;
  flex-direction: row;
`
const LeftImage = styled.img`
  width: 100px;
  height: 40px;
  cursor: pointer;
`
const RightImage = styled.img`
  width: 25px;
  height: 20px;
  padding: 0 5px;
  cursor: pointer;
`

const TodayHeader = () => {

    return (
        <Container>
            <LeftBox>
                <LeftImage src={Logo} />
            </LeftBox>
            <RightBox>
                <RightImage src={info} />
                <RightImage src={profile} />
            </RightBox>
        </Container>
    );
}

export default TodayHeader;
