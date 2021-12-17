import { intervalToObj } from "../src/interval";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

describe("Interval", () => {
  it("should return an object for 0 seconds", () => {
    const o = intervalToObj(0);

    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return an object for 3 seconds", () => {
    const o = intervalToObj(3 * SECOND);

    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 3,
    });
  });

  it("should return handle minutes", () => {
    const o = intervalToObj(3 * MINUTE);

    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 3,
      seconds: 0,
    });
  });

  it("should return handle one minutes", () => {
    const o = intervalToObj(MINUTE);

    expect(o).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  it("should return handle hours", () => {
    const o = intervalToObj(5 * HOUR);

    expect(o).toEqual({
      days: 0,
      hours: 5,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return handle days", () => {
    const o = intervalToObj(15 * DAY);

    expect(o).toEqual({
      days: 15,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("should return handle negative number", () => {
    const o = intervalToObj(-15 * DAY + -3 * HOUR + -3 * MINUTE + -15 * SECOND);

    expect(o).toEqual({
      days: 15,
      hours: 3,
      minutes: 3,
      seconds: 15,
    });
  });
});
