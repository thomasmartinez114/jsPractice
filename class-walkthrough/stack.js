//Object oriented programming

// Notes from 8/29/2019
class Stack {
  constructor() {
    this._data = []; // private property because has _ infront
    this.length = 0; // public property
  }
  push(element) {
    this._data.push(element);
    this.length += 1;
  }
  top() {
    return this._data[this._data.length - 1]; // to return the element that's on top of the stack
  }
  pop() {
    if (this.length > 0) {
      this.length -= 1;
    }
    return this._data.splice(-1)[0]; // get rid of the top
  }
  isEmpty() {
    return this.length === 0; // if length is 0 then it's empty || return true or false
  }
}

const stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(10);
stack.push(500);
stack.push(1020);
console.log('length', stack.length); // get the length of array
console.log(stack.top()); // display the top element
console.log(stack.pop()); // remove the top element
console.log('length', stack.length);
console.log(stack.top()); // display the top element
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());

// Notes from 8/27/2019

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   changeName(newName) {
//     this.name = newName;
//   }
// }
// const newPerson = new Person('Jason', 18);
// newPerson.changeName('Sarah');
// const newPerson2 = new Person('Mike', 99);
// console.log(newPerson.name);
// newPerson.age = 33;
// console.log(newPerson.age);
// console.log(newPerson2.name);
