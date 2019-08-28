// Vehicle > Sedan/HatchBack > Brand

class Vehicle {
  constructor(fuel, color, tint) {
    this.fuel = fuel;
    this.color = color;
    this.tint = tint;
    this.wheels = 4;
  }
}

class Sedan extends Vehicle {
  constructor(fuel, color, tint, doors, seats) {
    super(fuel, color, tint); // inherit props from Vehicle
    this.doors = doors;
    this.seats = seats;
  }
}

class HatchBack extends Vehicle {
  constructor(fuel, color, tint, doors, seats) {
    super(fuel, color, tint); // inherit props from Vehicle
    this.doors = doors;
    this.seats = seats;
  }
}

class Brand extends
