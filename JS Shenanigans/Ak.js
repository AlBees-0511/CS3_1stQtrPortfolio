
grades = [90, 88, 99, 98, 97]

let lowestNumber = grades[0];

for (let i = 1; i < grades.length; i++) {
  if (grades[i] < lowestNumber) {
    lowestNumber = grades[i];
  }
}
sum = 0
for (let i = 0; i < grades.length; i++)
    {
        sum += grades[i]
    }

console.log(lowestNumber);
console.log(sum/5)
console.log(Math.max(...grades))