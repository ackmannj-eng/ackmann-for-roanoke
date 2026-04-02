

import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const calendarStyles = {
  background: 'rgba(255,255,255,0.97)',
  borderRadius: '18px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  padding: 24,
  maxWidth: 900,
  margin: '0 auto',
  marginTop: 32,
};

const ELECTION_COLOR = '#e11d48'; // prominent red
const FYI_COLOR = '#6b7280'; // gray for informational events like registration deadlines
const MEET_COLOR = '#2563eb'; // blue for meet and greets

var additionalEventDetails = [
  { title: 'Meet & Greet at Los Compadres', description: 'Join Jonathan Ackmann and John Pullen, candidate for city council ward 1, for a casual meet and greet from 6:00 - 7:30 pm' },
  { title: 'Meet & Greet at Burger Broz', description: 'Join Jonathan Ackmann for a casual meet and greet from 6:00 - 7:30 pm' },
  { title: 'Meet & Greet at Benjamin\'s Pizza Kitchen', description: 'Join Jonathan Ackmann for a casual meet and greet from 6:00 - 7:30 pm' },
  { title: 'Election Day', description: 'Vote at the Roanoke Public Library from\n7:00 am - 7:00 pm' }
  // 8:00 am - 5:00 pm on 4/20; 8:00 am - 5:00 pm on 4/22-4/25; 11:00 am - 5:00 pm on 4/26; 7:00 am - 7:00 pm on 4/27-4/28
  // TODO: add background photos for pop ups
]

const events = [
  { title: 'Last Day to Register to Vote', date: '2026-04-02', color: FYI_COLOR },
  { title: 'First Day of Early Voting by Personal Appearance', date: '2026-04-20', color: FYI_COLOR },
  { title: 'Last Day to Apply for Ballot by Mail (Received, not Postmarked)', date: '2026-04-20', color: FYI_COLOR },
  { title: 'Last Day of Early Voting by Personal Appearance', date: '2026-04-28', color: FYI_COLOR },
  { title: 'Meet & Greet at Los Compadres', date: '2026-04-08', color: MEET_COLOR },
  { title: 'Meet & Greet at Burger Broz', date: '2026-04-15', color: MEET_COLOR },
  { title: "Meet & Greet at Benjamin's Pizza Kitchen", date: '2026-04-22', color: MEET_COLOR },
  { title: 'Election Day', date: '2026-05-02', color: ELECTION_COLOR },
];

function eventContent(arg: any) {
  // Election Day: bold, large, red
  if (arg.event.title === 'Election Day') {
    return (
      <div style={{
        background: ELECTION_COLOR,
        color: '#fff',
        borderRadius: 6,
        padding: '4px 8px',
        fontWeight: 700,
        fontSize: '1.1em',
        boxShadow: '0 0 8px #e11d4855',
        border: '2px solid #fff',
        textAlign: 'center',
        minHeight: 32,
        whiteSpace: 'normal',
        lineHeight: 1.2,
        wordBreak: 'break-word',
      }}>
        {arg.event.title}
      </div>
    );
  }
  // Meet & Greet: blue, grouped
  if (arg.event.title.startsWith('Meet & Greet')) {
    return (
      <div style={{
        background: MEET_COLOR,
        color: '#fff',
        borderRadius: 6,
        padding: '4px 8px',
        fontWeight: 600,
        border: '2px solid #fff',
        textAlign: 'center',
        minHeight: 32,
        whiteSpace: 'normal',
        lineHeight: 1.2,
        wordBreak: 'break-word',
      }}>
        {arg.event.title}
      </div>
    );
  }
  // Default
  return <div style={{
      whiteSpace: 'normal', 
      wordBreak: 'break-word', 
      lineHeight: 1.2, 
      borderRadius: 6,
      padding: '4px 8px',
      fontWeight: 600,
      textAlign: 'center'
    }}>
      {arg.event.title}
  </div>;
}

export default function Calendar() {
  const [popup, setPopup] = useState<{title: string, details: string} | null>(null);

  function handleEventClick(info: any) {
    const match = additionalEventDetails.find(
      (evt) => evt.title === info.event.title
    );
    if (match) {
      setPopup({ title: info.event.title, details: match.description });
    }
  }

  function closePopup() {
    setPopup(null);
  }

  return (
    <div>
      <div style={calendarStyles}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          nowIndicator={true}
          weekends={true}
          height="auto"
          validRange={{ start: '2026-04-01', end: '2026-05-03' }}
          showNonCurrentDates={true}
          fixedWeekCount={false}
          headerToolbar={{
            left: '',
            center: 'title',
            right: ''
          }}
          events={events}
          eventContent={eventContent}
          eventClick={handleEventClick}
        />
      </div>
      {popup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }} onClick={closePopup}>
          <div style={{
            background: '#fff',
            borderRadius: 12,
            padding: 32,
            minWidth: 320,
            maxWidth: 400,
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <h2 style={{marginTop: 0, marginBottom: 12, fontSize: 22}}>{popup.title}</h2>
            <div style={{marginBottom: 24, fontSize: 16}}>{popup.details}</div>
            <button onClick={closePopup} style={{
              position: 'absolute',
              top: 12,
              right: 16,
              background: 'none',
              border: 'none',
              fontSize: 20,
              cursor: 'pointer',
            }} aria-label="Close">×</button>
          </div>
        </div>
      )}
    </div>
  );
}