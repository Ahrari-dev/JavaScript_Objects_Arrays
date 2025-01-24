// Sum of array of numbers
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;

  // iterate over each value in the array
  // use each number in the sum
  arr.forEach((number) => {
    sum += number;
  });

  return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

//Exercise 2 Favorite Book

let favBook = {};

favBook.title = "The lies of Lamora Locke";
favBook.author = "Scott Lynch";
favBook.pageCount = 650;
favBook.readCount = 1;

console.log(favBook);

function info() {
  return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been
    read ${this.readCount} time(s).`;
}

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
  title: "Red Seas under Red Skyies",
  author: "Scott Lynch",
  pageCount: 700,
  readCount: 1,
  info,
};

console.log(favBook2.info());

// Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  let result = [];

  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let reversedWord = words[i].split("").reverse().join("");
    result.push(reversedWord);
  }

  return result.join(" ");
}

console.log(reverseWords(sentence));

// Exercise 4 CSV converter

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
  // Return an array of objects
  // split the header string to an array of headers
  let headers = data.slice(0, data.indexOf("\n")).split(","); // ["name,age"]

  // Determine the row data
  let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

  const customArr = valuesList.map((row) => {
    // seperate the values into array values
    let values = row.split(",");
    let obj = {};
    values.forEach((value, idx) => {
      if (idx < headers.length) {
        obj[headers[idx]] = value;
      } else {
        obj[`misc${idx - headers.length + 1}`] = value;
      }
    });

    return obj;
  });

  return customArr;
}

console.log(csvConverter(csvData));
console.log(
  csvConverter("name,city,occupation\nBen,Birmingham,Web Developer,Some Value")
);

function converter(fileData) {
  // Split the fileData into rows based on every newline character
  let rows = fileData.split("\n");
  // Split the first row, or headers, into individual strings
  let headers = rows[0].split(",");

  let result = [];
  // Iterate over every content row
  for (let i = 1; i < rows.length; i++) {
    let obj = {};
    let data = rows[i].split(","); // ex [ "Frodo", 50 ]
    data.forEach((val, idx) => {
      obj[headers[idx]] = val; // Since both the headers array and the data array are aligned (both coming from the same CSV structure), idx will never exceed the bounds of either array.
    });
    result.push(obj);
  }

  return result;
}

console.log(converter(csvData));
