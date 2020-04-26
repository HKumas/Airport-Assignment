var Airplane = /** @class */ (function () {
    function Airplane(planeIdentification) {
        this.maxNumOfPassengers = 100;
        this.currentNumOfPassengers = 0;
        this.planeIdentification = planeIdentification;
    }
    Airplane.prototype.loadPassengers = function (numOfPassengers) {
        if (this.currentNumOfPassengers + numOfPassengers <= this.maxNumOfPassengers) {
            this.currentNumOfPassengers += numOfPassengers;
            console.log("Airplane " + this.planeIdentification + " loads " + numOfPassengers + " passengers.");
        }
        else {
            var loaded = this.maxNumOfPassengers - this.currentNumOfPassengers;
            var unloaded = numOfPassengers - loaded;
            console.log("Airplane " + this.planeIdentification + " charges " + loaded + " passengers, " + unloaded + " do not fit.");
            this.currentNumOfPassengers = this.maxNumOfPassengers;
        }
    };
    Airplane.prototype.unloadPassengers = function () {
        console.log("Airplane " + this.planeIdentification + " discharges " + this.currentNumOfPassengers + " passengers.");
        this.currentNumOfPassengers = 0;
    };
    Airplane.prototype.takeOff = function () {
        if (this.isCurrentlyFlying) {
            console.log("Airplane " + this.planeIdentification + " can not take off, because we are already flying.");
        }
        else {
            console.log("Airplane " + this.planeIdentification + " rises.");
            this.isCurrentlyFlying = true;
        }
    };
    Airplane.prototype.land = function () {
        if (!this.isCurrentlyFlying) {
            console.log("Airplane " + this.planeIdentification + " can not land, because we are still on the ground.");
        }
        else {
            console.log("Airplane " + this.planeIdentification + " lands.");
            this.isCurrentlyFlying = false;
        }
    };
    Airplane.prototype.hasRooms = function () {
        if (this.currentNumOfPassengers < this.maxNumOfPassengers) {
            return true;
        }
        else {
            return false;
        }
    };
    Airplane.prototype.getRooms = function () {
        return this.maxNumOfPassengers - this.currentNumOfPassengers;
    };
    return Airplane;
}());
var Airport = /** @class */ (function () {
    function Airport(airportName) {
        this.airplanes = [];
        this.airportName = airportName;
        var airplane1 = new Airplane("ABC123");
        var airplane2 = new Airplane("DDD888");
        var airplane3 = new Airplane("ODL345");
        this.airplanes[0] = airplane1;
        this.airplanes[1] = airplane2;
        this.airplanes[2] = airplane3;
    }
    Airport.prototype.printAll = function () {
        console.log("Aircraft from airport " + this.airportName);
        for (var _i = 0, _a = this.airplanes; _i < _a.length; _i++) {
            var airplane = _a[_i];
            console.log("Airplane " + airplane.planeIdentification);
        }
    };
    Airport.prototype.requestPlane = function () {
        for (var _i = 0, _a = this.airplanes; _i < _a.length; _i++) {
            var aplane = _a[_i];
            if (!aplane.isCurrentlyFlying && aplane.hasRooms()) {
                console.log("Plane " + aplane.planeIdentification + " requested. Is not flying, still room for " + aplane.getRooms() + " passengers.");
                return aplane;
            }
        }
        return null;
    };
    return Airport;
}());
var airplane1 = new Airplane('ABC123');
var airplane2 = new Airplane('DDD888');
airplane1.loadPassengers(140);
airplane1.land();
airplane1.takeOff();
airplane1.land();
airplane1.unloadPassengers();
airplane2.loadPassengers(160);
airplane2.takeOff();
airplane2.takeOff();
airplane2.land();
airplane2.unloadPassengers();
var airport = new Airport('Eindhoven');
airport.printAll();
airport.requestPlane();
