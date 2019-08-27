// Object oriented exercises

class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = undefined;
  }

  changeName(newName) {
    this.name = newName;
  }

  birthday() {
    this.age += 1;
  }

  addHeight(height) {
    this.height = height;
  }
}

// const jason = new Person('Jason', 34);
// jason.addHeight(180);
// console.log(jason.height);
// console.log(jason);
// jason.birthday();
// console.log(jason.age);
