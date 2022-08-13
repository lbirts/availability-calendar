import React from 'react'
import { getDate, format } from 'date-fns'

export default function TableHeader({
    dateRange
}) {
    
    return (
        <thead className='sticky'>
            <tr>
                <td />
                {dateRange.map((date, index) => (
                    <th key={index}>
                        <p>{format(date, 'E')}</p>
                        <div className='dayOfMonth'>{getDate(date)}</div>
                    </th>
                ))}
            </tr>
        </thead> 
    )
}
