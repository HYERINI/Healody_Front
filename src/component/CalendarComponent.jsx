import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
// import CalendarAddList from './CalendarAddList';
Modal.setAppElement('#root');

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [showModal, setShowModal] = useState(false);
  // const [eventTitle, setEventTitle] = useState('');
  // const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // const handleEventTitleChange = (e) => {
  //   setEventTitle(e.target.value);
  // };

  // const handleEventSubmit = () => {
  //   if (eventTitle.trim() !== '') {
  //     setEvents([...events, { date: selectedDate, title: eventTitle }]);
  //     setEventTitle('');
  //     setShowModal(false);
  //   }
  // };

  const styles={
    calendarContainer: {
      margin: "20px auto",
      maxWidth: "600px",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      borderRadius: "10px",
      overflow: "hidden",
      textAlign: "center",
    },
    but: {
      margin: "10px",
      padding: "8px 12px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
    },

  }

  return (
    <div>
      <div style={styles.calendarContainer}>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      {/* <CalendarAddList /> */}
    </div>
  );
}

export default CalendarComponent;
