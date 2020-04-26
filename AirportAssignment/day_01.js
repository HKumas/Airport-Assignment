var Airplane = /** @class */ (function () {
    function Airplane(planeIdentification) {
        this.currentNumOfPassengers = 0;
        this.planeIdentification = planeIdentification;
    }
    Airplane.prototype.loadPassengers = function (numOfPassengers) {
        this.currentNumOfPassengers += numOfPassengers;
        console.log("Airplane " + this.planeIdentification + " loads " + numOfPassengers + " passengers.");
    };
    Airplane.prototype.unloadPassengers = function () {
        console.log("Airplane " + this.planeIdentification + " unloads " + this.currentNumOfPassengers + " passengers.");
        this.currentNumOfPassengers = 0;
    };
    Airplane.prototype.takeOff = function () {
        this.isCurrentlyFlying = true;
        console.log("Airplane " + this.planeIdentification + " takes off.");
    };
    Airplane.prototype.land = function () {
        this.isCurrentlyFlying = false;
        console.log("Airplane " + this.planeIdentification + " lands.");
    };
    return Airplane;
}());
var airplane1 = new Airplane('ABC123');
var airplane2 = new Airplane('DDD888');
airplane1.loadPassengers(40);
airplane1.takeOff();
airplane1.land();
airplane1.unloadPassengers();
airplane2.loadPassengers(60);
airplane2.takeOff();
airplane2.land();
airplane2.unloadPassengers();
