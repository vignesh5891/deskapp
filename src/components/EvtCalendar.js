import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
    { title: 'event 1', date: '2021-05-01' },
    { title: 'event 2', date: '2021-05-15' },
    { title: 'event 1', date: '2021-07-01' },
    { title: 'event 2', date: '2021-07-15' },
    { title: 'event 1', date: '2021-09-01' },
    { title: 'event 2', date: '2021-09-15' },
    { title: 'event 1', date: '2021-11-01' },
    { title: 'event 2', date: '2021-11-15' },
]

export const EvtCalendar = () => {
    return (
        <div className="pd-20 mb-30 bg-light">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    );
};