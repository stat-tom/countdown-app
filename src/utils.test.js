import { secondsToHourMinuteSecond } from "./utils";

test("3600 is 01:00:00", () => {
    expect(secondsToHourMinuteSecond(3600)).toBe("01:00:00");
});