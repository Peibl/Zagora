import React from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function App() {
  return (
    <div className="App">
      <div class='container'>

        <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} locale="es" events={[
          { title: 'Cumple Santi', date: '2019-01-24' },
          { title: 'Cumple Blue', date: '2019-03-30' },
          { title: 'Cumple Ed', date: '2019-08-11' },
          { title: 'Cumple Andy', date: '2019-08-19' },
          { title: 'Cumple Seba', date: '2019-09-28' },
          { title: 'Cumple Trish', date: '2019-10-17' },
          { title: 'Cumple Peibl', date: '2019-10-24' },
          { title: 'Cumple Ari', date: '2019-12-04' },
          { title: 'Cumple Kristell', date: '2019-12-09' },
          { title: 'Cumple Santi', date: '2020-01-24' },
          { title: 'Cumple Blue', date: '2020-03-30' },
          { title: 'Cumple Ed', date: '2020-08-11' },
          { title: 'Cumple Andy', date: '2020-08-19' },
          { title: 'Cumple Seba', date: '2020-09-28' },
          { title: 'Cumple Trish', date: '2020-10-17' },
          { title: 'Cumple Peibl', date: '2020-10-24' },
          { title: 'Cumple Ari', date: '2020-12-04' },
          { title: 'Cumple Kristell', date: '2020-12-09' }
        ]} />
      </div>
    </div>
  );
}

export default App;
