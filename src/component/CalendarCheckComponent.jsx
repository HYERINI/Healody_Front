import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
function CalendarCheckComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [items, setItems] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddSchedule = () => {
    if (selectedDate !== null) {
      // const token = localStorage.getItem('token');
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
      localStorage.setItem('memodate', formattedDate);
      setSelectedDate(null);
    }
    const requestBody = {
      userId : localStorage.getItem('yourid'),
      
      date: localStorage.getItem('memodate').toString(),
    };

    // const requestBody = {
    //   "userId" : "5",
    //   "date" : "2023-09-06"
    // };
    axios(`https://healody.shop/api/calender/todo/${requestBody.userId}/${requestBody.date}`, {
      method: 'GET',
    })
    .then(function(response) {
      alert(localStorage.getItem('hisname')+"님의 일정이 조회되었습니다");
      console.log(response);
      const data = response.data.data;
      const newData ={};
      data.forEach((item, index) => {
        newData[`item${index+1}`] = item;
      });
      setItems(newData);
      console.log(newData);
    })
    .catch(function(error) {
      console.log(error);
      console.log(requestBody);
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
      {Object.keys(items).map((key) => (
                    <li key={key}>
                        날짜:{`${items[key].date}`}
                        <br />
                        할일:{`${items[key].content}`}
                    </li>
                    ))}
    </div>
  );
}

export default CalendarCheckComponent;
