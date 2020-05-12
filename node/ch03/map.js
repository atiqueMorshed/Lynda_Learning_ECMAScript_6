let details = new Map([
  [new Date(), 'Today'],
  ['values', [1, 2]]
]);
console.log(details);


let addMap = new Map();
addMap.set(1, "Hello");
addMap.set("Names", ["AAA", "BBB"]);
console.log(addMap);
console.log(addMap.get("Names"))