import { convertTextToNumbers } from "./index";

import { describe, expect, it } from "bun:test";

describe("convertTextToNumbers for day 1", () => {
    it("should convert 'two1nine' to '219'", () => {
        expect(convertTextToNumbers("two1nine")).toBe("t2o1n9e");
    });

    it("should convert 'eightwothree' to '823'", () => {
        expect(convertTextToNumbers("eightwothree")).toBe("e8t2ot3e");
    });

    it("should convert 'abcone2threexyz' to 'abc123xyz'", () => {
        expect(convertTextToNumbers("abcone2threexyz")).toBe("abco1e2t3exyz");
    });

    it("should convert 'xtwone3four' to 'x2134'", () => {
        expect(convertTextToNumbers("xtwone3four")).toBe("xt2o1e3f4r");
    });

    it("should convert '4nineeightseven2' to '49872'", () => {
        expect(convertTextToNumbers("4nineeightseven2")).toBe("4n9ee8ts7n2");
    });

    it("should convert 'zoneight234' to 'z18234'", () => {
        expect(convertTextToNumbers("zoneight234")).toBe("zo1e8t234");
    });

    it("should convert '7pqrstsixteen' to '7pqrst6teen'", () => {
        expect(convertTextToNumbers("7pqrstsixteen")).toBe("7pqrsts6xteen");
    });

    it("should convert 'foursevennine51s' to '47951s'", () => {
        expect(convertTextToNumbers("foursevennine51s")).toBe("f4rs7nn9e51s");
    });
    it("should convert 'foursevenine51s' to '47951s'", () => {
        expect(convertTextToNumbers("foursevenine51s")).toBe("f4rs7n9e51s");
    });

    it("should convert 'nineight' to '98'", () => {
        expect(convertTextToNumbers("nineight")).toBe("n9e8t");
    });

    it("should convert 'four' to '4'", () => {
        expect(convertTextToNumbers("four")).toBe("f4r");
    });

    it("should convert 'seven' to '7'", () => {
        expect(convertTextToNumbers("seven")).toBe("s7n");
    });

    it("should convert 'nine' to '9'", () => {
        expect(convertTextToNumbers("nine")).toBe("n9e");
    });

    it("should convert 'eight' to '8'", () => {
        expect(convertTextToNumbers("eight")).toBe("e8t");
    });

    it("should convert 'three' to '3'", () => {
        expect(convertTextToNumbers("three")).toBe("t3e");
    });

    it("should convert 'two' to '2'", () => {
        expect(convertTextToNumbers("two")).toBe("t2o");
    });

    it("should convert 'one' to '1'", () => {
        expect(convertTextToNumbers("one")).toBe("o1e");
    });

    it("should convert 'five' to '5'", () => {
        expect(convertTextToNumbers("five")).toBe("f5e");
    });

    it("should convert 'six' to '6'", () => {
        expect(convertTextToNumbers("six")).toBe("s6x");
    });

    it("should convert 'threeight' to '38'", () => {
        expect(convertTextToNumbers("threeight")).toBe("t3e8t");
    });
    it("should convert 'threeeight' to '38'", () => {
        expect(convertTextToNumbers("threeeight")).toBe("t3ee8t");
    });
});
