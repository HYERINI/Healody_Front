import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
function CalendarCheckComponent() {
  const [selectedDate, setSelectedDate] = useState(null);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddSchedule = () => {
    if (selectedDate !== null) {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
      localStorage.setItem('memodate', formattedDate);
      setSelectedDate(null);
    }
    const requestBody = {
      // userId : localStorage.getItem('yourid'),
      userId: "5",
      date: localStorage.getItem('memodate').toString(),
    };
    axios('https://healody.shop/api/calender/note', {
      data: requestBody,
      method: 'GET',
    })
    .then(function(response) {
      alert(localStorage.getItem('hisname')+"님의 일정이 조회되었습니다");
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
    //여기다 이제 날짜 정보를 주고 axios로 그날의 일정 받아오기
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="날짜 선택"
      />
      <button onClick={handleAddSchedule}>일정 보기</button>
    </div>
  );
}

export default CalendarCheckComponent;
