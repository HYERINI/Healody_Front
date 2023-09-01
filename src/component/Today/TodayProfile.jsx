import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import TodayMoreBt from './TodayMoreBt';
import ProfileImg from './../../img/profileImg.svg';
import TodayPlusBt from './../../img/TodayPlusBt.svg';
import { useState } from 'react';
import axios from 'axios';
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
    const [formData, setFormData] = useState({
      message: "",
    });

    const handleInputChange = (event) => {
      const {name, value} = event.target;
      setFormData({...formData, [name]: value});
    }

    const handleMessage = () => {
      const requestBody = {
        message: formData.message,
      };
      axios('https://healody.shop/api/user/message',{
          data:requestBody,
          method: 'PATCH',
      })
      .then(function(response) {
        alert('상태메세지가 변경되었습니다');
        console.log(response.data.message);
        const setmessage = response.data.message;
        localStorage.setItem('nowMessage',setmessage);
        // const nowMessage = localStorage.getItem('nowMessage');
      })
      .catch(function(error) {
        console.log(error.response.status);
      })
    }

    const nowMessage = localStorage.getItem('nowMessage');
    const navigate = useNavigate();
    const name = localStorage.getItem('name');
    // const date = new Date();
    function movePageTo(link) {
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
                            <Name>{name}</Name>
                            <p></p>
                            <Date>ddf</Date>
                        </ProfileInfoWrap>
                        <ProfileIntroInput 
                            name="message"
                            value={nowMessage}
                            onChange={handleInputChange} 
                            placeholder="상태메시지를 입력하세요" 
                        />
            
                        <button onClick={handleMessage}>확인</button>
                    </ProfileInfoBigWrap>
                </ProfileTopRightWrap>
            </ProfileTopWrap>
            <TodayMoreBt content={content} link='/my_todayRecord'/>
        </ProfileBox>
    );
}
