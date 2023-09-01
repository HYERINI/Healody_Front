import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CalendarCheckComponent({ onAddSchedule }) {
  const [selectedDate, setSelectedDate] = useState(null);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddSchedule = () => {
    if (selectedDate !== null) {
      onAddSchedule({ date: selectedDate });
      setSelectedDate(null);
    }
    //여기다 이제 날짜 정보를 주고 axios로 그날의 일정 받아오기
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="날짜 선택"
      />
      <button onClick={handleAddSchedule}>일정 보기</button>
    </div>
  );
}

export default CalendarCheckComponent;
