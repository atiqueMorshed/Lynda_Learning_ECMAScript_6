let mySet = new Set();

mySet.add("Hello");
mySet.add("HELO")
    .add("Welcome");
console.log(mySet);

let data = [1, 1, 2, 2];
let dataSet = new Set(data);
console.log(`Data: ${data},       length: ${data.length}`);
console.log(`DataSet: ${dataSet}, length: ${dataSet.size}`);
console.log(`Contains: 2 > ${dataSet.has(2)}, 5 > ${dataSet.has(5)}`);