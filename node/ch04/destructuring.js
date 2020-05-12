// var cities = ["Dhaka", "Chittagong", "Sylhet", "Rangpur", "Dinajpur", "Khulna"];

// const [first,,,,fifth] = cities;
// console.log(fifth);

const obj = {
  title: "Hello",
  price: 7,
  description: "DARCCNECC",
  cities: ["Dhaka", "Chittagong", "Sylhet", "Rangpur", "Dinajpur", "Khulna"]
}

const {title, price, cities: [first,,third]} = obj;
console.log(third, price);

const food = {
  destination: "Herfy",
  price: 69,
  eat: "Fried Chicken",
  rating: 69
} 
function foodInvite({destination, eat}) {
  console.log(`Come to ${destination} and eat some ${eat}`);
}

foodInvite(food);