// Object oriented exercises

class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.planet = 'Earth';
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

class Employee extends Person {
  constructor(name, age, height) {
    super(name, age, height); // inherit all of the properties from the paramaters in Person
  }
}

// const newEmployee = new Employee('Jason', 30, 190);
// console.log(newEmployee.name);
// console.log(newEmployee.planet);
// console.log(newEmployee.height);
// console.log(newEmployee.age);

class Student extends Person {
  constructor(name, age, height, id) {
    super(name, age, height);
    this.id = id;
  }
}

const newStudent = new Student('Thomas', 67, 450, 002476);
console.log(newStudent.name);
console.log(newStudent.age);
console.log(newStudent.height);
console.log(newStudent.id);
console.log(newStudent.planet);

newStudent.birthday();
console.log(newStudent.age);
