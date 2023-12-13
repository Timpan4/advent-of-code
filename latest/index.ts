import fs from "node:fs/promises"; // Import the fs module from node.js

async function main() {
    // Filter out non year folders and sort them by year descending
    const sorted_challenges = await getSortedYears();

    const latest_year = sorted_challenges.at(0);

    if (!latest_year) {
        console.log("No challenges found");
        process.exit(1);
    }

    // Get the challenges for the latest year

    // Filter out non day folders and sort them by day ascending
    const sorted_days = await getSortedDaysFromYear(latest_year);

    const latest_day = sorted_days.at(0);

    if (!latest_day) {
        console.log("No challenges found for the latest day");
        process.exit(1);
    }

    console.log(
        `We're going to run the latest challenge from ${latest_year} 🎉 Which is day number ${transformDayToNumber(
            latest_day,
        )}`,
    );

    console.log(
        `Executing day ${transformDayToNumber(
            latest_day,
        )} from year ${latest_year}...\n`,
    );

    // Import the challenge
    try {
        const challenge = await import(
            `../challenges/${latest_year}/${latest_day}/index.ts`
        );

        // Execute the challenge
        await challenge.default();
    } catch (error) {
        console.log(
            "Error while executing the challenge:",
            `../challenges/${latest_year}/${latest_day}\n`,
        );
        console.error(error);
        process.exit(1);
    }
}
function transformYearToNumber(year: string) {
    return Number.parseInt(year);
}

function transformDayToNumber(day: string) {
    return Number.parseInt(day.replaceAll("day", ""));
}

function checkIfNumber(value: number) {
    return !Number.isNaN(value);
}

async function getSortedDaysFromYear(year: string) {
    const days = await fs.readdir(`./challenges/${year}`);
    return days
        .filter((v) => checkIfNumber(transformDayToNumber(v)))
        .toSorted((a, b) => transformDayToNumber(b) - transformDayToNumber(a));
}

async function getSortedYears() {
    const challenges_by_year = await fs.readdir("./challenges");

    // Filter out non year folders and sort them by year descending
    return challenges_by_year
        .filter((v) => checkIfNumber(transformYearToNumber(v)))
        .toSorted(
            (a, b) => transformYearToNumber(b) - transformYearToNumber(a),
        );
}

export default main;
