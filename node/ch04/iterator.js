const title = "HELLO";

const iter = title[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/////////////////////// OBJ //////////////////////////
console.log("OBJ");

function tableReady(arr) {
  var i = 0;
  return {
    next() {
      if(i < arr.length) {
        return {value: arr.shift(), done: false};
      } else {
        return {done: true};
      }
    }
  };
}

const myArr = ["Rahim", "karim", "Abu"];

const iter2 = tableReady(myArr);
console.log(`${iter2.next().value} your table is ready.`);
console.log(`${iter2.next().value} your table is ready.`);
console.log(`${iter2.next().value} your table is ready.`);
console.log(`${iter2.next().done}`);