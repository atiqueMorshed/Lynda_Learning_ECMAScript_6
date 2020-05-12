const id = Symbol();

const courseInfo = {
  title: "ES6",
  length: 3,
  topics: ["Arrow", "Symbol", "Iterator"],
  id: "HELO"
}

courseInfo[id] = 6969;

console.log(courseInfo[id]);
console.log(courseInfo.id);
console.log(courseInfo);