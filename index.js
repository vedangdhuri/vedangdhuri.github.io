import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const markCommit = (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, { "--date": date }).push();
  });
};

const makeCommits = async (n, startDate, sameDay = false) => {
  for (let i = 0; i < n; i++) {
    // If startDate is provided, commits will be on consecutive days starting from that date.
    // If sameDay is true, commits will be on the same day.
    // Otherwise, commits will be on random days in the past year.
    const date = startDate
      ? moment(startDate).add(i, sameDay ? "seconds" : "days").format()
      : moment()
          .subtract(1, "y")
          .add(1, "d")
          .add(random.int(0, 52), "w") // Use 52 weeks for a full year
          .add(random.int(0, 6), "d")
          .format();

    const data = { date };

    // We need to wait for each file write and commit to finish before the next one.
    // We can use Promises to handle the async operations in a loop.
    await new Promise((resolve, reject) => {
      jsonfile.writeFile(path, data, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    await simpleGit().add([path]).commit(date, { "--date": date });
    console.log(`Committed for date: ${date}`);
  }

  // After all commits are done, push them.
  await simpleGit().push();
  console.log(`${n} commits have been pushed.`);
};

// --- HOW TO USE THE NEW DATE MANIPULATION FEATURE ---
// The makeCommits function now accepts three arguments:
// 1. The number of commits to make.
// 2. An optional start date string (e.g., "YYYY-MM-DD").
// 3. An optional boolean `sameDay` to make all commits on the start date.

// Example 1: Make 100 random commits in the last year (same as before)
// makeCommits(100);

// Example 2: Make 15 commits, starting from January 1st, 2024, one for each day.
// makeCommits(15, '2024-01-01');

// Example 3: Make 5 commits, starting from yesterday.
// const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
// makeCommits(5, yesterday);

// Example 4: Make 15 commits on the same day (e.g., Feb 1st, 2024).
makeCommits(6, '2025-11-11', true);


// const n = 20;
// for (let i = 0; i < n; i++) {
//   markCommit(4, 4);
// }


// npm install jsonfile moment
// npm install random
// npm install simple-git