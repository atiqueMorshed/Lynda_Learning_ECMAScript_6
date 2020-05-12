console.log("//////// LOG LETTERS ///////");
for(let letter of 'Javascript') {
  console.log(letter);
}
console.log("//////// LOG ARRAY ////////");
let topics = ["A", "B", "C"];
for(let vals of topics)
  console.log(vals);

console.log("//////// LOG MAP /////////");
let myMap = new Map();
myMap.set("HTML", "/html");
myMap.set("CSS", "/css");
myMap.set("JAVASCRIPT", "/js");
myMap.set(69, 116911);

for(let vals of myMap)
  console.log(vals);

console.log("//////// LOG MAP KEYS /////");
for(let key of myMap.keys())
  console.log(key);

console.log("//////// LOG MAP VALUES ///");
for(let values of myMap.values())
  console.log(values);

console.log("//////// LOG MAP ENTRIES //");
for(let entry of topics.entries())
  console.log(entry);