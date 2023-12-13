import { convertTextToNumbers } from "./index";

import { expect, it, describe } from "bun:test";

describe("convertTextToNumbers", () => {
    it("should convert 'two1nine' to '219'", () => {
        expect(convertTextToNumbers("two1nine")).toBe("219");
    });

    it("should convert 'eightwothree' to '823'", () => {
        expect(convertTextToNumbers("eightwothree")).toBe("823");
    });

    it("should convert 'abcone2threexyz' to 'abc123xyz'", () => {
        expect(convertTextToNumbers("abcone2threexyz")).toBe("abc123xyz");
    });

    it("should convert 'xtwone3four' to 'x2134'", () => {
        expect(convertTextToNumbers("xtwone3four")).toBe("x2134");
    });

    it("should convert '4nineeightseven2' to '49872'", () => {
        expect(convertTextToNumbers("4nineeightseven2")).toBe("49872");
    });

    it("should convert 'zoneight234' to 'z18234'", () => {
        expect(convertTextToNumbers("zoneight234")).toBe("z18234");
    });

    it("should convert '7pqrstsixteen' to '7pqrst6teen'", () => {
        expect(convertTextToNumbers("7pqrstsixteen")).toBe("7pqrst6teen");
    });

    it("should convert 'foursevennine51s' to '47951s'", () => {
        expect(convertTextToNumbers("foursevennine51s")).toBe("47951s");
    });
    it("should convert 'foursevenine51s' to '47951s'", () => {
        expect(convertTextToNumbers("foursevenine51s")).toBe("47951s");
    });

    it("should convert 'nineight' to '98'", () => {
        expect(convertTextToNumbers("nineight")).toBe("98");
    });

    it("should convert 'four' to '4'", () => {
        expect(convertTextToNumbers("four")).toBe("4");
    });

    it("should convert 'seven' to '7'", () => {
        expect(convertTextToNumbers("seven")).toBe("7");
    });

    it("should convert 'nine' to '9'", () => {
        expect(convertTextToNumbers("nine")).toBe("9");
    });

    it("should convert 'eight' to '8'", () => {
        expect(convertTextToNumbers("eight")).toBe("8");
    });

    it("should convert 'three' to '3'", () => {
        expect(convertTextToNumbers("three")).toBe("3");
    });

    it("should convert 'two' to '2'", () => {
        expect(convertTextToNumbers("two")).toBe("2");
    });

    it("should convert 'one' to '1'", () => {
        expect(convertTextToNumbers("one")).toBe("1");
    });

    it("should convert 'five' to '5'", () => {
        expect(convertTextToNumbers("five")).toBe("5");
    });

    it("should convert 'six' to '6'", () => {
        expect(convertTextToNumbers("six")).toBe("6");
    });

    it("should convert 'threeight' to '38'", () => {
        expect(convertTextToNumbers("threeight")).toBe("38");
    });
    it("should convert 'threeeight' to '38'", () => {
        expect(convertTextToNumbers("threeeight")).toBe("38");
    });
});
