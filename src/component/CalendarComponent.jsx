import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleEventSubmit = () => {
    if (eventTitle.trim() !== '') {
      setEvents([...events, { date: selectedDate, title: eventTitle }]);
      setEventTitle('');
      setShowModal(false);
    }
  };

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
      <button style={styles.but} onClick={() => setShowModal(true)}>일정 추가</button>

      
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
      
        <h2>일정 추가</h2>
        <div>
          <label>일정 제목: </label>
          <input
            type="text"
            value={eventTitle}
            onChange={handleEventTitleChange}
          />
        </div>
        <button style={styles.but} onClick={handleEventSubmit}>추가</button>
        <button style={styles.but} onClick={() => setShowModal(false)}>취소</button>
      </Modal>
      

      <div>
        <h2>일정 목록</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.date.toDateString()} - {event.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CalendarComponent;
