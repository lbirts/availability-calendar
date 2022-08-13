import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default function Table({
    dateRange,
    focusDate,
    availabilityPeriods,
    setAvailabilityPeriods
}) {
    return (
        <table>
            <TableHeader dateRange={dateRange} />
            <TableBody 
                focusDate={focusDate}
                dateRange={dateRange}
                availabilityPeriods={availabilityPeriods}
                setAvailabilityPeriods={setAvailabilityPeriods}
            />
        </table> 
    )
}