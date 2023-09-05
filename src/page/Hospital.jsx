import React, {useState} from "react";
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
    const styles={
        drop: {
            zIndex: 1,
        }
    }
    const [selectedDropDownValue, setSelectedDropDownValue] = useState('본가');
    const [schedules, setSchedules] = useState([]);
    const handleAddSchedule = (newSchedule) => {
        setSchedules([...schedules, newSchedule]);
    };

    const handleFamily = () => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios('https://healody.shop/api/calender/view', {
            method: 'GET',
        })
        .then(function(response) {
            alert('가족조회가 되었습니다.');
            // const userId = response.data.data[]

        })
    }

    return (
        <>
            <Container>
                <TodayHeader />
                <TodayNav />
                <CalendarNav />
                <button onClick={handleFamily}>가족 조회하기</button>
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
                {/* <HospitalSelectWrap style={styles.drop}>
                    <TodayDropDown
                        selectedValue={selectedDropDownValue}
                        options={['본가', '친가', '외가']}
                        onClick={(value) => setSelectedDropDownValue(value)}
                    />
                </HospitalSelectWrap> */}

                {/* {selectedDropDownValue === '본가' ? (
                    <HospitalSelectWrap>
                        <Select options={optionsHome} onChange={handleOptionChange}/>
                        <CalendarAddList options={optionsHome} onChange={handleOptionChange}/>
                    </HospitalSelectWrap>
                ) : selectedDropDownValue === '친가' ? (
                    <HospitalSelectWrap>
                        <Select options={optionsHome2} onChange={handleOptionChange}/>
                        <CalendarAddList options={optionsHome2} onChange={handleOptionChange}/>
                    </HospitalSelectWrap>
                ) : (
                    <HospitalSelectWrap>
                        <Select options={optionsHome3} onChange={handleOptionChange}/>
                        <CalendarAddList options={optionsHome3} onChange={handleOptionChange}/>
                    </HospitalSelectWrap>
                )} */}
            
            </Container>
        </>
    )
}

export default Hospital;