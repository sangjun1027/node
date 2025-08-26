const arr = [
  { name: "John Doe", email: "john@email.com" },
  { name: "Jeremy Go", email: "jeremy@email.com" },
];

console.table(arr);

const obj = {
  students: {
    grade1: {
      class1: {
        student1: { name: "Alice", age: 7, score: 95 },
        student2: { name: "Bob", age: 6, score: 88 },
      },
      class2: {
        student1: { name: "Charlie", age: 7, score: 91 },
        student2: { name: "Daisy", age: 6, score: 85 },
      },
    },
    grade2: {
      class1: {
        student1: { name: "Ethan", age: 8, score: 90 },
        student2: { name: "Fiona", age: 8, score: 92 },
      },
      class2: {
        student1: { name: "George", age: 8, score: 87 },
        student2: { name: "Hannah", age: 7, score: 89 },
      },
    },
    teachers: ["John Doe", "Jeremy Go"],
  },
};

console.dir(obj, { depth: 4, colors: true });

console.dir(obj, { depth1: 1, colors: true });

console.time("time for for~loop");
for (let i = 0; i < 999999; i++) {}
console.timeEnd("time for for~loop");
