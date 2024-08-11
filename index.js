const students = [
  { name: "ali", grade: 50, dob: "1990", subjects: ["english", "math"] },
  { name: "abdullah", grade: 100, dob: "1993", subjects: ["arabic", "math"] },
  { name: "dawood", grade: 0, dob: "1994", subjects: ["arabic", "math"] },
];

let num = 0;

students.forEach((student) => {
  num = num + student.grade;
});

console.log(num);

const book = {
  Title: "JavaScript: The Definitive Guide",
  Author: ["David Flanagan", "Another Author"],
  PublishedYear: 2020,
  Genre: "Programming",
  review: {
    reviewer: "jassim Alkhadhari",
    comment: "A comprehensive guide to JavaScript.",
  },
};

book.pageCount = 1096;
book.ISBN = "978-1491952023";
book.PublishedYear = 2021;

console.log(book);
