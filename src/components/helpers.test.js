import { saturday, sunday, getFormattedRange, getDaysOfWeek } from './helpers';

it('sunday returns first day of week', () => {
    const date = 'August 12, 2020 00:00:00'
    const expected = new Date('August 9, 2020')
    expect(sunday(date)).toEqual(expected)
});

it('saturday returns last day of week', () => {
    const date = 'August 12, 2020 00:00:00'
    const expected = new Date('2020-08-16T04:59:59.999Z')
    expect(saturday(date)).toEqual(expected)
});

it('getFormattedRange returns formatted string', () => {
    const date = 'August 12, 2020 00:00:00'
    const expected = '9 - 15 August 2020'
    expect(getFormattedRange(date)).toEqual(expected)
});

it('getDaysOfWeek returns array of weekdays', () => {
    const date = 'August 12, 2020 00:00:00'
    const expected = [new Date('August 9, 2020'), new Date('August 10, 2020'), new Date('August 11, 2020'), new Date('August 12, 2020'), new Date('August 13, 2020'), new Date('August 14, 2020'), new Date('August 15, 2020')]
    expect(getDaysOfWeek(date)).toEqual(expected)
});