import * as readline from "readline";
import fs from "fs/promises";
import { get } from "http";

console.log(`
Welcome to the Advent of Code runner! 🎉
This is created by @Timpan4 on GitHub 🎉

This is a work in progress, so please be patient with me 😅
If you have any suggestions, please let me know!

Here you can select which challenge you want to run.
You can either run the latest challenge or a specific one.

You can always exit the program by typing 'exit' in the console while the program is asking for input.
You can always exit with 'ctrl + c' or 'cmd + c' as well (but that's not as fun 😢)
`);

// Ask if the user wants to run the latest challenge or a specific one
const should_run_latest = await askQuestion(
    "Do you want to run the latest challenge? (y/n) ",
);

if (should_run_latest === "y") {
    console.log("Running the latest challenge...\n");

    // Get the latest challenge
    const run_latest = await import("./latest/index.ts");

    // Execute the challenge
    await run_latest.default();

    console.log("\nFinished running the latest challenge!");
    process.exit(0);
}

// Execute the challenge
runChallenge();

async function askQuestion(question: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise<string>((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            rl.removeAllListeners();
            if (answer === "exit") {
                console.log("Exiting...");
                process.exit(0);
            }
            resolve(answer);
        });
    });
}

async function getCorrectInput(
    inputType: string,
    availableInputs: string[],
    inputPrompt: string,
): Promise<string> {
    const timeout = setTimeout(() => {
        console.log("You took too long to answer, exiting...");
        process.exit(1);
    }, 20000);
    console.log(`
Available ${inputType}s:
${availableInputs.join(", ")}
`);

    const input = await askQuestion(inputPrompt);

    if (!availableInputs.includes(input)) {
        console.log(`That ${inputType} doesn't exist, please try again`);
        return getCorrectInput(inputType, availableInputs, inputPrompt);
    }

    clearTimeout(timeout);

    return input;
}

async function getCorrectYear(): Promise<string> {
    const available_years = await fs.readdir("./challenges");

    // Sort years descending
    available_years.sort((a, b) => {
        return Number.parseInt(b) - Number.parseInt(a);
    });

    return getCorrectInput(
        "year",
        available_years,
        "Which year do you want to run? ",
    );
}

async function getCorrectDay(year: string): Promise<string> {
    const available_days = await fs.readdir(`./challenges/${year}`);

    // Sort days ascending
    available_days.sort((a, b) => {
        return (
            Number.parseInt(a.replaceAll("day", "")) -
            Number.parseInt(b.replaceAll("day", ""))
        );
    });

    const correct_day = await getCorrectInput(
        "day",
        available_days,
        "Which day do you want to run? ",
    );

    return correct_day.replaceAll("day", "");
}

async function runChallenge() {
    const year_to_run = await getCorrectYear();
    const day_to_run = await getCorrectDay(year_to_run);

    console.log(`Executing day ${day_to_run} from year ${year_to_run}...\n`);

    // Import the challenge
    try {
        const challenge = await import(
            `./challenges/${year_to_run}/day${day_to_run}/index.ts`
        );

        // Execute the challenge
        await challenge.default();

        console.log("\nFinished running the challenge!");
        process.exit(0);
    } catch (error) {
        console.log(
            "Error while executing the challenge:",
            `./challenges/${year_to_run}/day${day_to_run}\n`,
        );
        console.error(error);
        process.exit(1);
    }
}
