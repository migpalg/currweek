import { getWeekNumber } from './get-week-number';

jest.useFakeTimers().setSystemTime(new Date('2023-02-22T01:31:54.730Z'));

describe('getWeekNumber unit testing', () => {
  it('should return a number', () => {
    expect.assertions(1);
    expect(typeof getWeekNumber()).toBe('number');
  });

  it('should return current week number of system', () => {
    expect.assertions(1);
    expect(getWeekNumber()).toBe(8);
  });

  it('should return current week number of passed prop', () => {
    expect.assertions(1);
    expect(getWeekNumber(new Date('2023-11-17T00:00:00.000Z'))).toBe(46);
  });

  it('should return 1 on first week', () => {
    expect.assertions(1);
    expect(getWeekNumber(new Date('2023-01-02T21:49:40.304Z'))).toBe(1);
  });

  it('should return 3 on third week', () => {
    expect.assertions(1);
    expect(getWeekNumber(new Date('2023-01-18T21:49:40.304Z'))).toBe(3);
  });
});
