import React from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

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


        <Timeline lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="Presente"
            style={{ color: '#e86971' }}
          >
            <h3>Llegada de los Exiliados</h3>

          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="-80"
            dateInnerStyle={{ background: '#61b8ff' }}

          >
            <h3>Reinado de Ezureth</h3>
            <h4>Actividad de los Maestro -80 a -60</h4>
            <h4>Nigel -70 a Presente</h4>

          </TimelineItem>

          <TimelineItem
            key="003"
            dateText="-250"
            dateInnerStyle={{ background: '#000000', color: '#FFFFFF' }}

          >
            <h3>Edad oscuro</h3>
            <h4>Actividad de los Maestro -80 a -60</h4>
            <h4>Nigel -70 a Presente</h4>

          </TimelineItem>

        </Timeline>
      </div>
    </div>
  );
}

export default App;
