import React from 'react'

export default function Cell({
    hour,
    day,
    availabilityPeriods,
    setAvailabilityPeriods,
    dragSelection,
    setDragSelection
}) {
    const currentDayIntervals = availabilityPeriods.filter(period => period.day === day)
    const isSelected = currentDayIntervals.some(({ start, end }) => start <= hour && end > hour)

    const selectionAction = isSelected ? 'remove' : 'add'

    const onMouseEvents = (e) => {
        if(e.type === 'mousedown') {
            setDragSelection({ day, start: hour, selectionAction })
        } else {
            const newSelection = {...dragSelection, end: hour}
            if(dragSelection.day === day) {
                setDragSelection(newSelection)
                handleSelection(newSelection)
            }
        }
    }

    const handleSelection = (selection) => {
        const interval = {
            day: selection.day,
            start: Math.min(selection.start, selection.end),
            end: Math.max(selection.start, selection.end)
        }
        if(selection.selectionAction === 'remove') {
           splitIntervals(interval)
        } else {
            interval.end += 1
            mergeIntervals(interval)
        }
    }

    const splitIntervals = (interval) => {
        const foundInterval = currentDayIntervals.find(({ start, end }) => start <= interval.start && end > interval.start)
        const isBetweenInterval = interval.end + 1 < foundInterval.end
        const maxEnd = foundInterval.end
        foundInterval.end = interval.start
        if (isBetweenInterval) {
            const newInterval = { day, start: interval.end + 1, end: maxEnd}
            setAvailabilityPeriods([...availabilityPeriods, newInterval])
        }
    }

    const mergeIntervals = (interval) => {
        if(!currentDayIntervals.length) {
            setAvailabilityPeriods([...availabilityPeriods, interval])
        }
        currentDayIntervals.push(interval)
        currentDayIntervals.sort((a, b) => a.start - b.start)
        let output = [currentDayIntervals[0]]
        let current = output[0]

        for(let i = 1; i < currentDayIntervals.length; i++) {
            const next = currentDayIntervals[i]
            if(current.end >= next.start) {
                current.end = Math.max(current.end, next.end)
            } else {
                current = next
                output.push(current)
            }
        }
        const excludingCurrentDay = availabilityPeriods.filter(period => period.day !== day)
        setAvailabilityPeriods([...excludingCurrentDay, ...output])
    }

    return (
        <td
            data-test-id={`${day}-${hour}-cell`}
            className={`${isSelected && 'selected'}`}
            key={day}
            onMouseDown={onMouseEvents}
            onMouseUp={onMouseEvents}
        />
    )
}
