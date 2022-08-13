import { saturday, sunday, getFormattedRange, getDaysOfWeek, getPrevWeek, getNextWeek, getHours } from './helpers';

it('sunday returns first day of week in the first hour', () => {
    const date = 'August 12, 2020'
    const expected = new Date('August 9, 2020')
    expect(sunday(date)).toEqual(expected)
});

it('saturday returns last day of week in the last hour', () => {
    const date = 'August 12, 2020'
    const expected = new Date('August 15, 2020 23:59:59:999')
    expect(saturday(date)).toEqual(expected)
});

it('getFormattedRange returns formatted string', () => {
    const date = 'August 12, 2020'
    const expected = '9 - 15 August 2020'
    expect(getFormattedRange(date)).toEqual(expected)
});

it('getDaysOfWeek returns array of weekdays', () => {
    const date = 'August 12, 2020'
    const expected = [
        new Date('August 9, 2020'),
        new Date('August 10, 2020'),
        new Date('August 11, 2020'),
        new Date('August 12, 2020'),
        new Date('August 13, 2020'),
        new Date('August 14, 2020'),
        new Date('August 15, 2020')
    ]
    expect(getDaysOfWeek(date)).toEqual(expected)
});

it('getPrevWeek returns date from prev week', () => {
    const date = 'August 12, 2020'
    const expected = new Date('August 5, 2020')
    expect(getPrevWeek(date)).toEqual(expected)
});

it('getNextWeek returns date from next week', () => {
    const date = 'August 12, 2020'
    const expected = new Date('August 19, 2020')
    expect(getNextWeek(date)).toEqual(expected)
});

it('getHours returns array of hours in day', () => {
    const date = 'August 12, 2020'
    const expected = [
        new Date('August 12, 2020 00:00:00'),
        new Date('August 12, 2020 01:0:00'),
        new Date('August 12, 2020 02:00:00'),
        new Date('August 12, 2020 03:00:00'),
        new Date('August 12, 2020 04:00:00'),
        new Date('August 12, 2020 05:00:00'),
        new Date('August 12, 2020 06:00:00'),
        new Date('August 12, 2020 07:00:00'),
        new Date('August 12, 2020 08:00:00'),
        new Date('August 12, 2020 09:00:00'),
        new Date('August 12, 2020 10:00:00'),
        new Date('August 12, 2020 11:00:00'),
        new Date('August 12, 2020 12:00:00'),
        new Date('August 12, 2020 13:00:00'),
        new Date('August 12, 2020 14:00:00'),
        new Date('August 12, 2020 15:00:00'),
        new Date('August 12, 2020 16:00:00'),
        new Date('August 12, 2020 17:00:00'),
        new Date('August 12, 2020 18:00:00'),
        new Date('August 12, 2020 19:00:00'),
        new Date('August 12, 2020 20:00:00'),
        new Date('August 12, 2020 21:00:00'),
        new Date('August 12, 2020 22:00:00'),
        new Date('August 12, 2020 23:00:00'),
    ]
    expect(getHours(date)).toEqual(expected)
});