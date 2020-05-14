const fetch = require("node-fetch");
fetch("http://api.open-notify.org/astros.json")
  .then((res) => res.json())
  .then((res) => console.log(res));
