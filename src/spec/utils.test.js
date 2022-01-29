import { secondsToHourMinuteSecond, isValidName } from "../utils";

test("3600 is 01:00:00", () => {
    expect(secondsToHourMinuteSecond(3600)).toBe("01:00:00");
});

test("1 is 00:00:01", () => {
    expect(secondsToHourMinuteSecond(1)).toBe("00:00:01");
});
  
  test("86400 is 24:00:00", () => {
    expect(secondsToHourMinuteSecond(86400)).toBe("24:00:00");
});

test("Name invalid if its length is 0", () => {
    expect(isValidName(0)).toBe(false);
});

test("Name invalid if its length is greater than 128", () => {
    expect(isValidName(129)).toBe(false);
});
