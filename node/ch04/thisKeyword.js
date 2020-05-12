var person = {
  first: "Dude",
  actions: ["Eat", "Shit", "Piss"],
  printAction() {
    this.actions.forEach(action => console.log(`${this.first} likes to ${action}`));
  }
};
person.printAction();