// Vehicle > Sedan/HatchBack > Brand

class Vehicle {
  constructor(fuel, color, tint) {
    this.fuel = fuel;
    this.color = color;
    this.tint = tint;
    this.wheels = 4;
  }
}

class Type extends Vehicle {
  constructor(fuel, color, tint, doors, seats, style) {
    super(fuel, color, tint); // inherit the props from Vehicle
    this.doors = doors;
    this.seats = seats;
    this.style = style;
  }
}

class Brand extends Vehicle {
  constructor(fuel, color, tint, doors, seats, style, make, model) {
    super(fuel, color, tint, doors, seats, style);
    this.make = make;
    this.model = model;
  }
}

const newBrand = new Brand(
  'Premium',
  'Red',
  false,
  4,
  6,
  'Sedan',
  'Corvette',
  'Stingray'
);
console.log(newBrand.fuel);
console.log(newBrand.color);
console.log(newBrand.tint);
console.log(newBrand.doors);
console.log(newBrand.seats);
console.log(newBrand.style);
console.log(newBrand.make);
console.log(newBrand.model);

console.log(newBrand);
