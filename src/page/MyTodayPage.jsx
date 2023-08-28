import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';
import TodayProfile from './../component/Today/TodayProfile';
import TodayMainBox from "../component/Today/TodayMainBox";
import {useNavigate} from "react-router-dom";
import TodayGoalBox from "../component/Today/TodayGoalBox";

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  position: relative;
`;

const TodayRecordBoxWrap = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid #B6B6B5;
  background-color: #F5F5F5;
  padding: 15px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`

const TodayBox = styled.div`
  border: 1px solid #B6B6B5;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
`

export default function MyTodayPage(){
    const host = 'http://15.165.115.39:8080';
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTAyMjIyMjIyMiIsImF1dGgiOiJST0xFX1VTRVIiLCJ1c2VySWQiOjEsImV4cCI6MTY5MzMwMDQ4NX0.zioMnhSYMw2t4Dhu1UlWSR2WWniR8_BoduqlmlF0se0BRf-1_Af73B1CIceJjHbMNEJxH_YAFF_3jvn3EzfAxw'
    var userId = '1';
    const [recordData, setRecordData] = useState(null);

    useEffect(() => {
        // 데이터 가져오는 로직 (예시)
        const fetchData = async () => {
            try {
                const response = await fetch(host + '/api/goal/' + userId,{
                    method: 'GET',
                    headers:{
                        'Authorization' : 'Bearer ' + token
                    }
                });
                const data = await response.json();
                setRecordData(data.data);
                // console.log(recordData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
    console.log(recordData)

    return(
        <Container>
            <TodayHeader/>
            <TodayNav />
            <TodayProfile content="내 기록 더보기" link="/create_newRecord"/>
            <TodayMainBox title="할일 목록" width="90" content="내 할일 더보기" link="/create_newGoal"/>

            <TodayRecordBoxWrap>
                <TodayGoalBox data = { recordData } />
            </TodayRecordBoxWrap>
        </Container>
    )
}