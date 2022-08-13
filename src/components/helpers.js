import { startOfWeek, endOfWeek, format, isSameMonth, eachDayOfInterval, subWeeks, addWeeks, eachHourOfInterval, startOfDay, endOfDay } from 'date-fns'

export const sunday = date => startOfWeek(new Date(date))
export const saturday = date => endOfWeek(new Date(date))

export const getFormattedRange = (d) => {
    let formatLastDay
    let formattedSunday
    if(isSameMonth(sunday(d), saturday(d))) {
        formatLastDay = format(saturday(d), 'd LLLL yyyy')
        formattedSunday = format(sunday(d), 'd')
        return `${formattedSunday} - ${formatLastDay}`
    } else {
        formattedSunday = format(sunday(d), 'MMM d')
        formatLastDay = format(saturday(d), 'MMM d, yyyy')
        return `${formattedSunday} - ${formatLastDay}`
    }
}

export const getDaysOfWeek = (d) => eachDayOfInterval({ start: sunday(d), end: saturday(d)})

export const getPrevWeek = (d) => subWeeks(d, 1)
export const getNextWeek = (d) => addWeeks(d, 1)

export const getHours = (d) => eachHourOfInterval({start: startOfDay(d), end: endOfDay(d)})
