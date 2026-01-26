// import fs, { readFileSync } from "fs";

// // reading file using the callback

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   else {
//     console.log(data);
//   }
// });

// // reading file synchronously

// const data = readFileSync("./test.txt", "utf-8");
// console.log(data);

// Using the promise version
import fs from "fs/promises";

// Using then and catch methods

// fs.readFile("./test.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Using async await

const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
readFile();
