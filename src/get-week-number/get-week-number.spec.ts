import { getWeekNumber } from './get-week-number';

describe('getWeekNumber unit testing', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2021-11-08T21:49:40.304Z'));
  });

  it('should return a number', () => {
    expect(typeof getWeekNumber()).toEqual('number');
  });

  it('should return current week number of system', () => {
    expect(getWeekNumber()).toEqual(45);
  });

  it('should return current week number of passed prop', () => {
    expect(getWeekNumber(new Date('2021-11-17T00:00:00.000Z'))).toEqual(46);
  });
});
