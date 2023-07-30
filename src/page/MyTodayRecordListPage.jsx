import React, {useState} from 'react';
import styled from 'styled-components';
import TodayHeader from "../component/Today/TodayHeader";
import TodayNav from "../component/Today/TodayNav";
import TodayTitle from "../component/Today/TodayTitle";
import TodayRecordBox from "../component/Today/TodayRecordBox";
import TodayDeleteModal from "../component/Today/TodayDeleteModal";
import TodayPlusBt from './../img/TodayPlusBt.svg';

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  height: calc(100vh);
  box-sizing: border-box;
  overflow-y: auto;  
  &::-webkit-scrollbar {
      width: 0.5em;
  }
`;

const TodayRecordBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TodayAddRecord = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`

const TodayDefault = styled.div`
  font-size: 20px;  
  color: #60605F;
  height: calc(100vh - 240px);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function MyTodayRecordListPage() {

    return(
        <Container>
            <TodayHeader />
            <TodayNav />
            <TodayTitle content="기록 목록"/>
            <TodayAddRecord src={TodayPlusBt}/>
            {/*<TodayDefault>*/}
            {/*    오늘 하루 나는 어땠나요?<br/>*/}
            {/*    나의 건강을 기록하고 추적해봐요!*/}
            {/*</TodayDefault>*/}
            <TodayRecordBoxWrap>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
                <TodayRecordBox type='병원' date='2023.07.27.목' content='병원 예약 하고 왓슴 우하하'/>
            </TodayRecordBoxWrap>
            </Container>
    )
}