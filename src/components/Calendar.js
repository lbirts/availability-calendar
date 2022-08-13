import React, { useState, useEffect } from 'react';
import Header from './Header';
import Table from './Table/Table';
import { getDaysOfWeek } from './helpers';

export default function Calendar() {
    
    const today = new Date()
    const defaultAvailability = [
        {day: 'Monday', start: 9, end: 17},
        {day: 'Tuesday', start: 9, end: 17},
        {day: 'Wednesday', start: 9, end: 17},
        {day: 'Thursday', start: 9, end: 17},
        {day: 'Friday', start: 9, end: 17}
    ]
    const [focusDate, setFocusDate] = useState(today)
    const [dateRange, setDateRange] = useState(getDaysOfWeek(focusDate))
    const [availabilityPeriods, setAvailabilityPeriods] = useState(defaultAvailability)

    useEffect(() => {
        setDateRange(getDaysOfWeek(focusDate))
    }, [focusDate])

    return (
        <div>
            <Header 
                focusDate={focusDate}
                setFocusDate={setFocusDate}
                availabilityPeriods={availabilityPeriods}
            />
            <Table 
                dateRange={dateRange}
                focusDate={focusDate}
                availabilityPeriods={availabilityPeriods}
                setAvailabilityPeriods={setAvailabilityPeriods}
            />
        </div>
    )
}