import { get } from "http";
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
    const input_path = path.join(import.meta.dir, "./example_input.txt");
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

        console.debug(
            "🚀🤡💀 -------------------------------------------------------------------------------------🚀🤡💀",
        );
        console.debug(
            "🚀🤡💀 ->> file: index.ts:53 ->> getCalibrationInputNumbers ->> new_line:",
            new_line,
        );

        const number = new_line.replace(/\D/g, "");

        console.debug(
            "🚀🤡💀 ->> file: index.ts:63 ->> getCalibrationInputNumbers ->> number:",
            number,
        );
        console.debug(
            "🚀🤡💀 -------------------------------------------------------------------------------------🚀🤡💀",
        );

        if (!number) {
            continue;
        }

        numbers.push(number);
    }

    return numbers;
}

export function convertTextToNumbers(inputText: string): string {
    // Regular expression to globally find all individual number words
    const numberWordsRegex = /one|two|three|four|five|six|seven|eight|nine/g;

    // Find all matches and convert them to their numeric representations
    return Array.from(inputText.matchAll(numberWordsRegex), (match) => {
        return number_map[match[0]];
    }).join("");
}

// Example usage:
// const result = convertTextToNumbers('xxthreeightxxx');
// console.log(result); // Outputs: '38'

// export function convertTextToNumbers(text: string) {
//     let result = "";
//     let index = 0;

//     while (index < text.length) {
//         let replaced = false;

//         // Check for each number string starting from the current position
//         for (const [strNum, num] of Object.entries(number_map)) {
//             if (text.substring(index, index + strNum.length) === strNum) {
//                 // Replace with the corresponding number and move the index
//                 result += num;
//                 index += strNum.length;
//                 replaced = true;
//                 break;
//             }
//         }

//         // If no replacement happened, keep the current character and move to the next
//         if (!replaced) {
//             result += text[index];
//             index++;
//         }
//     }

//     return result;
// }

function calculateAndSum(input: string[]) {
    const calibration_numbers = [];

    for (const number of input) {
        const first_number = number.at(0);

        const second_number = number.at(-1);

        if (!first_number || !second_number) {
            console.debug(
                "🚀🤡💀 -------------------------------------------------------------------------------------🚀🤡💀",
            );
            console.debug(
                "🚀🤡💀 ->> file: index.ts:101 ->> calculateAndSum ->> second_number:",
                first_number,
                number.length,
            );
            console.debug(
                "🚀🤡💀 -------------------------------------------------------------------------------------🚀🤡💀",
            );
            continue;
        }
        const congatenated_number = Number.parseInt(
            first_number + second_number,
        );

        console.debug(
            "🚀🤡💀 -------------------------------------------------------------------------------------------------🚀🤡💀",
        );
        console.debug(
            "🚀🤡💀 ->> file: index.ts:135 ->> calculateAndSum ->> congatenated_number:",
            congatenated_number,
        );
        console.debug(
            "🚀🤡💀 -------------------------------------------------------------------------------------------------🚀🤡💀",
        );

        calibration_numbers.push(congatenated_number);
    }

    return calibration_numbers.reduce((a, b) => a + b, 0);
}
