//this includes the vehicle class as a module
const VehicleModule = require('./vehicle')


class Car extends VehicleModule {
    constructor(model, make, year, milage, color) {
        super(model, make, year, milage, color)
        this.maxPassengers == 5;
        this.passenger == 0;
        this.numberOfWheels == 4;
        this.maximumSpeed == 160;
        this.fuel == 10;
        this.scheduleService == false;
}

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + '     ' + this.make + 'Too many passengers');
        }
    } else { 
        console.log(this.model + '    ' + this.make + 'has no room');
    }
}}

start() {
    if (this.fuel > 0) {
    console.log('engine has started');
    return this.carStarted == true;
} else {
    console.log('fuel is empty');
    return this.carStarted == false;
    }
}

scheduleService(milage) {
    if (this.milage > 30000) {
        this.scheduleService == true;
        return this.scheduleService;
    } else {
        this.scheduleService == false;
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)