import React, { useState } from 'react';
import styled from 'styled-components';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';
import TodayProfile from './../component/Today/TodayProfile';
import TodayMainBox from "../component/Today/TodayMainBox";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  position: relative;
`;

export default function MyTodayPage(){
    const [activeButton, setActiveButton] = useState(null);
    const [activeGoal, setActiveGoal] = useState(null);
    const [activeCompleteButton, setActiveCompleteButton] = useState(false);
    const handleButtonClick = buttonContent => {
        if (activeButton === buttonContent) {
            setActiveButton(null);
            setActiveGoal(null);
        } else {
            setActiveButton(buttonContent);
            setActiveGoal(buttonContent);
        }
        if(activeButton !== ''){
            setActiveCompleteButton(true);
        }else{
            setActiveCompleteButton(false);
        }
    };

    return(
        <Container>
            <TodayHeader/>
            <TodayNav />
            <TodayProfile content="내 기록 더보기" link="/create_newRecord"/>
            <TodayMainBox title="할일 목록" width="90" content="내 할일 더보기" link="/create_newGoal"/>
            <TodayMainBox title="목표 관리" width="90" content="내 목표 더보기" link="/create_newGoal" moreLink='/my_todayGoal'/>
        </Container>
    )
}