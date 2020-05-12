function* addWait() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Done";
}
console.log("This function will pause for every yield statement and we need to call the .next() method on the function to continue.");

console.log(addWait().next().value);

console.log("Its now paused, calling next() again to resume");
console.log(addWait().next().value);

console.log("Its now paused, calling next() again to resume");
console.log(addWait().next().value);

console.log("Its now paused, calling next() again to resume");
console.log(addWait().next().value);

console.log("Its now paused, calling next() again to resume");
console.log(addWait().next().done);

////////////////////// GENERATOR V2 ///////////////////////////
console.log("Generator V2");

function* printArray(arr) {
  for(let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}
const myArray = printArray(["A", "B", "C", "D", "E", "F"]);

const abc = setInterval(() => {
  var printer = myArray.next();
  if(printer.done) {
    clearInterval(abc);
    console.log("done returned true.");
  } 
  else console.log(printer.value);
}, 500);