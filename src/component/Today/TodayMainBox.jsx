import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import TodayGoalTitle from './TodayGoalTitle';
import TodayMoreBt from './TodayMoreBt';
import TodayPlusBt from './../../img/TodayPlusBt.svg';

const TodayBox = styled.div`
  background-color: #F5F5F5;
  border: 1px solid #B6B6B5;
  border-radius: 10px;
  padding: 10px 5px;
  box-sizing: border-box;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`

const TodayMainTopWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const MoreBt = styled.img`
  margin-bottom: 6px;
  cursor: pointer;
`

export default function TodayMainBox({ title, content, width }){

    const navigate = useNavigate();

    const onMoveNewGoal = (e) => {
        navigate('/create_newGoal');
    }

    const onMoveNewRecord = (e) => {
        navigate('/create_newRecord');
    }
    return(
        <TodayBox>
            <TodayMainTopWrap>
                <TodayGoalTitle content={ title } width={ width }/>
                {{title} === '목표 관리' ? <MoreBt src={TodayPlusBt} onClick={onMoveNewGoal}/> : <MoreBt src={TodayPlusBt} onClick={onMoveNewRecord}/> }
            </TodayMainTopWrap>

            <TodayMoreBt content={ content } />
        </TodayBox>
    )
}