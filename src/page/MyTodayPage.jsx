import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';
import TodayProfile from './../component/Today/TodayProfile';
import TodayMainBox from "../component/Today/TodayMainBox";
import {useNavigate} from "react-router-dom";
import TodayDeleteModal from "../component/Today/TodayDeleteModal";
import TodayGoalTitle from "../component/Today/TodayGoalTitle";
import Delete from "../img/threeDot.svg";
import water25 from '../img/water25.svg';
import water50 from '../img/water50.svg';
import water75 from '../img/water75.svg';
import water100 from '../img/water100.svg';
import starGoal from '../img/goalStar.svg';
import alco from '../img/alcohol.svg';
import noAlco from '../img/noAlcohol.svg';
import smoke from '../img/smoke.svg';
import noSmoke from '../img/noSmoke.svg';
import exer25 from '../img/exer25.svg';
import exer50 from '../img/exer50.svg';
import exer75 from '../img/exer75.svg';
import exer100 from '../img/exer100.svg';


const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  position: relative;
`

const TodayRecordBoxWrap = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid #B6B6B5;
  background-color: #F5F5F5;
  padding: 15px 10px;
  margin-bottom: 10px;
  margin-top: 10px
`

const TodayRecordBoxTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 5px;
`

const TodayRecordDelete = styled.img`
  cursor: pointer;
  position: relative;
`

const TodayGoalName = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 4px 10px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #787878;
  font-weight: bolder;
`

const TodayRecordContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #B6B6B5;
  background-color: white;
  margin-top: 10px;
  padding: 10px;
`

const TodayTitle = styled.h2`
  color: black;
`

const TodayDates = styled.p`
  color: #787878;
`

const TodayGoalDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 10px;
`

const StarWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin: 0 auto;
`

const WaterWrap = styled.div`
  margin: 5px auto 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
`

const StarAlcoWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin: 0 auto;
`

const AlcoholWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 5px auto 0 auto;
`

const StarImg = styled.img`
  width: 30px;
`

const WaterImg = styled.img`
  width: 30px;
`


export default function MyTodayPage(){
    const host = 'https://healody.shop';
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
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
                { data.code === 200 ? setRecordData(data) : setRecordData(null)}
                console.log(recordData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        console.log(recordData)
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

    return (
        <Container>
            <TodayHeader />
            <TodayNav />
            <TodayProfile content="내 기록 더보기" link="/create_newRecord" />
            <TodayMainBox title="할일 목록" width="90" content="내 할일 더보기" moreLink="/Celendar" />

            {recordData == null || recordData === '' ? (
                <TodayMainBox title="목표 목록" width="90" content="내 목표 더보기" link="/create_newGoal" text="goal" />
            ) : (
                <TodayRecordBoxWrap>
                    <TodayRecordBoxTitleWrap>
                        <TodayGoalTitle content="목표 관리" width="100" />

                        {recordData.behavior === '물마시기' ? (
                            <TodayGoalName>
                                💧 {recordData.behavior} 도전중
                            </TodayGoalName>
                        ) : recordData.behavior === '운동하기' ? (
                            <TodayGoalName>
                                🏋🏻‍ {recordData.behavior} 도전중
                            </TodayGoalName>
                        ) : recordData.behavior === '금연하기' ? (
                            <TodayGoalName>
                                🚬 {recordData.behavior} 도전중
                            </TodayGoalName>
                        ) : (
                            <TodayGoalName>
                                🍻 {recordData.behavior} 도전중
                            </TodayGoalName>
                        )}
                        <TodayRecordDelete src={Delete} />
                    </TodayRecordBoxTitleWrap>
                    <TodayRecordContentWrap>
                        <TodayTitle>목표 {recordData.days} 일차</TodayTitle>
                        <TodayDates>2023.06.01 ~ 2023.06.30</TodayDates>
                        {recordData.behavior === '물마시기' ? (
                            <TodayGoalDetailWrap>
                                <StarWrap><StarImg src={starGoal} /></StarWrap>
                                <WaterWrap>
                                    <WaterImg src={water25} />
                                    <WaterImg src={water50} />
                                    <WaterImg src={water75} />
                                    <WaterImg src={water100} />
                                </WaterWrap>
                            </TodayGoalDetailWrap>
                        ) : recordData.behavior === '금주하기' ? (
                            <TodayGoalDetailWrap>
                                <StarAlcoWrap><StarImg src={starGoal} /></StarAlcoWrap>
                                <AlcoholWrap>
                                    <WaterImg src={alco} />
                                    <WaterImg src={noAlco} />
                                </AlcoholWrap>
                            </TodayGoalDetailWrap>
                        ) : recordData.behavior === '금연하기' ? (
                            <TodayGoalDetailWrap>
                                <StarAlcoWrap><StarImg src={starGoal} /></StarAlcoWrap>
                                <AlcoholWrap>
                                    <WaterImg src={smoke} />
                                    <WaterImg src={noSmoke} />
                                </AlcoholWrap>
                            </TodayGoalDetailWrap>
                        ) : (
                            <TodayGoalDetailWrap>
                                <StarWrap><StarImg src={starGoal} /></StarWrap>
                                <WaterWrap>
                                    <WaterImg src={exer25} />
                                    <WaterImg src={exer50} />
                                    <WaterImg src={exer75} />
                                    <WaterImg src={exer100} />
                                </WaterWrap>
                            </TodayGoalDetailWrap>
                        )}
                    </TodayRecordContentWrap>
                </TodayRecordBoxWrap>
            )}
        </Container>
    );
}