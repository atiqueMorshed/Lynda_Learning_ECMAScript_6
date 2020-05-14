const delay = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
      reject("Enter a number.");
      // reject(new Error("Enter a number."));
    }
    setTimeout(() => resolve(`${seconds} second delay.`), seconds * 1000);
  });
};

// console.log("0s");
// delay(2).then((msg) => console.log(msg));
// delay(4).then((msg) => console.log(msg));

delay("ttt")
  .then((msg) => msg.toUpperCase())
  .then((msg) => `${msg}!!!!!!`)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

delay(2)
  .then((msg) => msg.toUpperCase())
  .then((msg) => `${msg}!!!!!!`)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
