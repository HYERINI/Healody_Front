import React, {useEffect, useState} from "react";
import TodayHeader from "../component/Today/TodayHeader";
import TodayNav from "../component/Today/TodayNav";
import CalendarNav from "../component/CalendarNav";
import CalendarComponent from "../component/CalendarComponent";
import TodayDropDown from "../component/Today/TodayDropDown";
import Select from "../component/Select";
import styled from 'styled-components';
import CalendarAddList from "../component/CalendarAddList";
import CalendarCheckComponent from "../component/CalendarCheckComponent";
import axios from 'axios';
import '../css/button.css';

const HospitalSelectWrap = styled.div`
  margin-top: 0;
`


function Hospital() {
    // const optionsHome = ['나', '엄마', '아빠', '동생'];
    // const optionsHome2 = ['고모', '고모부', '사촌형', '사촌동생'];
    // const optionsHome3 = ['이모', '이모부', '사촌누나', '사촌동생'];
    // const [choose, setChoose] = useState(null);

    // const handleOptionChange = (option) => {
    //     setChoose(option);
    // };

    const Container = styled.div`
        width: 360px;
        margin: 0 auto;
        position: relative;
        `;
    
    
    const [schedules, setSchedules] = useState([]);
    const handleAddSchedule = (newSchedule) => {
        setSchedules([...schedules, newSchedule]);
    };
    const [selectedName, setSelectedName] = useState(null);
    const [selectUserId, setSelectUserId] = useState();
    const [items, setItems] = useState({});

    const handlenameClick  = (name, userid) => {
        setSelectedName(name);
        setSelectUserId(userid);
        localStorage.setItem('yourid',userid);
        localStorage.setItem('hisname',name);
    };

    const handleFamily = () => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios('https://healody.shop/api/calender/view', {
            method: 'GET',
        })
        .then(function(response) {
            alert('가족조회가 되었습니다.');
            const data = response.data.data;
            const newData ={};
            data.forEach((item, index) => {
                newData[`item${index+1}`] = item;
            });
            setItems(newData);
                // const newData = {};
                // data.forEach((item, index) => {
                //     newData[`item${index+1}`] = item;
                // });
                // setItems(newData);
            console.log(newData);
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    return (
        <>
            <Container>
                <TodayHeader />
                <TodayNav />
                <CalendarNav />
                <button onClick={handleFamily}>가족 조회하기</button>
                <ul>
                {Object.keys(items).map((key) => (
                    <li key={key}>
                        <button 
                            class="custom-btn btn-3"
                            onClick={() => handlenameClick(items[key].name, items[key].userId)}
                            ><span>{`${items[key].name}`}</span>
                        </button>
                    </li>
                    ))}
                    <h3>선택한이름: {selectedName}</h3>
                    <h3>선택한 유저 아이디:{selectUserId}</h3>
                </ul>
                <CalendarComponent onAddSchedule={handleAddSchedule} />
                <ul>
                    {schedules.map((schedule, index) => (
                        <li key={index}>
                            <strong>날짜:</strong> {schedule.date.toLocaleDateString()}
                            <strong>일정:</strong> {schedule.text}
                        </li>
                    ))}
                </ul>
                <br />
                {/* 일정이 나오는 컴포넌트 */}

                <CalendarCheckComponent />
                
            
            </Container>
        </>
    )
}

export default Hospital;