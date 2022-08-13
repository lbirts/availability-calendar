import React, { useState } from 'react';
import { getHours } from '../helpers';
import { format } from 'date-fns';
import Cells from './Cells';

export default function TableBody({
    focusDate,
    dateRange,
    availabilityPeriods,
    setAvailabilityPeriods
}) {
    const [dragSelection, setDragSelection] = useState({})

    const renderCells = (hour) => dateRange.map((date, index) => (
        <Cells
            key={index}
            availabilityPeriods={availabilityPeriods}
            hour={parseInt(format(hour, 'H'))}
            day={format(date,'EEEE')}
            setAvailabilityPeriods={setAvailabilityPeriods}
            dragSelection={dragSelection}
            setDragSelection={setDragSelection}
        />
    ))

    return (
        <tbody>
            {getHours(focusDate).map((hour, index) => {
                const isFirst = index === 0
                return (
                    <tr key={index}>
                        <th className={`hourlyCell ${isFirst && 'firstHour'}`} key={index}>{format(hour, 'h a')}</th>
                        {renderCells(hour)}
                    </tr>
                )    
            })}
        </tbody> 
    )
}