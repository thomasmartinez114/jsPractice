//Object oriented programming
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  changeName(newName) {
    this.name = newName;
  }
}
const newPerson = new Person('Jason', 18);
newPerson.changeName('Sarah');
const newPerson2 = new Person('Mike', 99);
console.log(newPerson.name);
newPerson.age = 33;
console.log(newPerson.age);
console.log(newPerson2.name);
