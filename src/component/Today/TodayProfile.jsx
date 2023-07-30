import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import TodayMoreBt from './TodayMoreBt';
import ProfileImg from './../../img/profileImg.svg';
import TodayPlusBt from './../../img/TodayPlusBt.svg';

const ProfileBox = styled.div`
  background-color: #F5F5F5;
  border: 1px solid #B6B6B5;
  border-radius: 10px;
  padding: 10px 5px;
  box-sizing: border-box;
  margin-top: 20px;
  position: relative;
`

const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`

const ProfileTopWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ProfileTopRightWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const ProfileInfoBigWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const ProfileInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfileIntroInput = styled.input`
  color: silver;
  border: 1px solid #B6B6B5;
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 10px;
  width: 90%;
`

const ProfileAddBt = styled.img`
  cursor: pointer;
  margin: 0;
  position: absolute;
  top: 30px;
  right: 25px;
  transform: translate(50%, -50%);
`

const Name = styled.p`
  color: black;
  margin: 10px;
`

const Date = styled.p`
  color: #787878;
  margin: 12px 10px;
  font-size: 13px;
`

const ProfileBottomWrap = styled.button``;

export default function TodayProfile({ content, link }) {
    const navigate = useNavigate();

    function movePageTo(link) {
        alert('click');
        navigate(link);
    }

    return (
        <ProfileBox>
            <ProfileAddBt src={TodayPlusBt} onClick={() => movePageTo(link)} />
            <ProfileTopWrap>
                <ProfileTopRightWrap>
                    <ProfileImage src={ProfileImg} />
                    <ProfileInfoBigWrap>
                        <ProfileInfoWrap>
                            <Name>이민주</Name>
                            <Date>2023.07.27.목</Date>
                        </ProfileInfoWrap>
                        <ProfileIntroInput placeholder="상태메시지를 입력하세요" />
                    </ProfileInfoBigWrap>
                </ProfileTopRightWrap>
            </ProfileTopWrap>
            <TodayMoreBt content={content} link='/my_todayRecord'/>
        </ProfileBox>
    );
}
