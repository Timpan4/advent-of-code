import path from "path";

// Map of string numbers to their numeric counterparts
const number_map: { [key: string]: string } = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
};

export default async function () {
    const input_path = path.join(import.meta.dir, "./input.txt");
    const calibration_input_raw = Bun.file(input_path);

    const calibration_input = await calibration_input_raw.text();

    const calibration_input_lines = calibration_input
        .replaceAll("\\r", "")
        .split("\n");

    // Strip all non numbers from the input
    const calibration_input_numbers = calibration_input_lines.map((line) =>
        line.replace(/\D/g, ""),
    );

    console.log(
        "Sum of all numbers for step 1:",
        calculateAndSum(calibration_input_numbers),
    );

    const calibration_input_numbers_with_strings = getCalibrationInputNumbers(
        calibration_input_lines,
    );

    console.log(
        "Sum of all numbers for step 2:",
        calculateAndSum(calibration_input_numbers_with_strings),
    );
}

function getCalibrationInputNumbers(input: string[]) {
    const numbers = [];

    for (const line of input) {
        const new_line = convertTextToNumbers(line);

        const number = new_line.replace(/\D/g, "");

        if (!number) {
            continue;
        }

        numbers.push(number);
    }

    return numbers;
}

export function convertTextToNumbers(inputText: string) {
    // Problem: Replace all words in input_word with their corresponding number in number_map
    // Issue 1: Digits can be merged together: "one" + "eight" = "oneight"
    // These should be replaced with "18" not "1ight" since "eight" is a valid digit even if it is part of another word
    // Issue 2: Replacing the original string with the new digit will result in "oneight" being replaced with "1ight" since the e is already replaced with 1

    let temp_word = inputText;
    for (const digit in number_map) {
        const digit_chars = digit.split("");
        // add the digits first and last character to ensure replacement of merged digits
        const first_char = digit_chars.at(0);
        if (!first_char) {
            console.log("First char is undefined for some reason");
            process.exit(1);
        }
        const last_char = digit_chars.at(-1);
        if (!last_char) {
            console.log("Last char is undefined for some reason");
            process.exit(1);
        }
        const final_digit = `${first_char}${digit}${last_char}`;
        // Replace the original string with the extended digit to ensure that merged digits are replaced properly

        temp_word = temp_word.replaceAll(digit, final_digit);

        // Replace the extended digit with the numberized digit since all numbers now have been extended
        const numberized_digit = number_map[digit].toString();
        temp_word = temp_word.replaceAll(digit, numberized_digit);
    }
    return temp_word;
}

function calculateAndSum(input: string[]) {
    const calibration_numbers = [];

    for (const number of input) {
        const first_number = number.at(0);

        const second_number = number.at(-1);

        if (!first_number || !second_number) {
            continue;
        }
        const congatenated_number = Number.parseInt(
            first_number + second_number,
        );

        calibration_numbers.push(congatenated_number);
    }

    return calibration_numbers.reduce((a, b) => a + b, 0);
}
