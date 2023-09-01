// import React, { useState } from 'react';



// function CalendarComponent() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   // const [showModal, setShowModal] = useState(false);
//   // const [eventTitle, setEventTitle] = useState('');
//   // const [events, setEvents] = useState([]);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   // const handleEventTitleChange = (e) => {
//   //   setEventTitle(e.target.value);
//   // };

//   // const handleEventSubmit = () => {
//   //   if (eventTitle.trim() !== '') {
//   //     setEvents([...events, { date: selectedDate, title: eventTitle }]);
//   //     setEventTitle('');
//   //     setShowModal(false);
//   //   }
//   // };

//   const styles={
//     calendarContainer: {
//       margin: "20px auto",
//       maxWidth: "600px",
//       boxShadow: "0 0 10px rgba(0,0,0,0.2)",
//       borderRadius: "10px",
//       overflow: "hidden",
//       textAlign: "center",
//     },
//     but: {
//       margin: "10px",
//       padding: "8px 12px",
//       fontSize: "16px",
//       cursor: "pointer",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//     },

//   }

//   return (
//     <div>
//       <div style={styles.calendarContainer}>
//         <Calendar onChange={handleDateChange} value={selectedDate} />
//       </div>

//       {/* <CalendarAddList /> */}
//     </div>
//   );
// }

// export default CalendarComponent;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function CalendarComponent({ onAddSchedule }) {
  const [schedule, setSchedule] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleInputChange = (e) => {
    setSchedule(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddSchedule = () => {
    if (schedule.trim() !== '' && selectedDate !== null) {
      onAddSchedule({ date: selectedDate, text: schedule });
      setSchedule('');
      setSelectedDate(null);
    }
  };

  const user_id = localStorage.getItem('userId');

  //유저 정보 받아오기
  const handleFamily = () => {
     axios(`https://healody.shop/api/home/${user_id}`, {
        method: 'GET',
     })
     .then(function(response) {
      alert('가족구성원 조회가 되었습니다.');
      const Item = response;
      for(const key in Object.keys(Item)) {
        console.log(Item[key].user);
        //일단 콘솔만 찍게 해뒀고 나중에 map함수로 나타내야함
      }
     })
     .catch(function(error) {
      console.log(error.response.status);
     })
  }

  return (
    <div>
      <button>가족 조회하기</button>
      <ul>

      </ul>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="날짜 선택"
      />
      <input
        type="text"
        placeholder="일정 추가"
        value={schedule}
        onChange={handleInputChange}
      />
      <button onClick={handleAddSchedule}>일정 추가</button>
    </div>
  );
}

export default CalendarComponent;
