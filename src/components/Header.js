import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import { getFormattedRange, getNextWeek, getPrevWeek } from './helpers'

export default function Header({
    focusDate,
    setFocusDate,
    availabilityPeriods
}) {

    const setPrevWeek = () => {
        const newFocusDate = getPrevWeek(focusDate)
        setFocusDate(newFocusDate)
    }

    const setNextWeek = () => {
        const newFocusDate = getNextWeek(focusDate)
        setFocusDate(newFocusDate)
    }
    
    return (
        <div className='header'>
            <div className='row'>
                <button onClick={() => setFocusDate(new Date())}>Today</button>
                <div className='icon prev' onClick={setPrevWeek}>
                    chevron_left
                </div>
                <div className='icon next' onClick={setNextWeek}>
                    chevron_right
                </div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        orientation='portrait'
                        value={focusDate}
                        onChange={(newValue) => setFocusDate(new Date(newValue))}
                        renderInput={({ inputRef, inputProps, InputProps }) =>
                        <div className='dateRange' ref={inputRef} {...inputProps}>
                            {getFormattedRange(focusDate)}
                            {InputProps?.endAdornment}
                        </div>}
                    />
                </LocalizationProvider>
            </div>
            <button className='print' onClick={() => console.log(availabilityPeriods)}>Print</button>
        </div> 
    )
}
