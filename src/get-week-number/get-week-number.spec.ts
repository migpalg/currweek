import { getWeekNumber } from './get-week-number';

describe('getWeekNumber unit testing', () => {
  jest.useFakeTimers().setSystemTime(new Date('2021-11-08T21:49:40.304Z'));

  it('should return a number', () => {
    expect.assertions(1);
    expect(typeof getWeekNumber()).toBe('number');
  });

  it('should return current week number of system', () => {
    expect.assertions(1);
    expect(getWeekNumber()).toBe(45);
  });

  it('should return current week number of passed prop', () => {
    expect.assertions(1);
    expect(getWeekNumber(new Date('2021-11-17T00:00:00.000Z'))).toBe(46);
  });
});
