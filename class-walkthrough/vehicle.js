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
    }
}

class Brand extends Type, Vehicle {
    constructor(fuel, color, tint, doors, seats, style) {
        super(fuel, color, tint, doors, seats, style);
    }
}
