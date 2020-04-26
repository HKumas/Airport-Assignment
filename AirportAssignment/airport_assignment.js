var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Airplane = /** @class */ (function () {
    function Airplane(planeIdentification) {
        this.planeIdentification = planeIdentification;
    }
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
    return Airplane;
}());
var PeoplePlane = /** @class */ (function (_super) {
    __extends(PeoplePlane, _super);
    function PeoplePlane(planeIdentification) {
        var _this = _super.call(this, planeIdentification) || this;
        _this.maxNumOfPassengers = 100;
        _this.currentNumOfPassengers = 0;
        _this.type = AirplaneType.people;
        return _this;
    }
    PeoplePlane.prototype.load = function (numOfPassengers) {
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
    PeoplePlane.prototype.unload = function () {
        console.log("Airplane " + this.planeIdentification + " discharges " + this.currentNumOfPassengers + " passengers.");
        this.currentNumOfPassengers = 0;
    };
    PeoplePlane.prototype.hasRooms = function () {
        if (this.currentNumOfPassengers < this.maxNumOfPassengers) {
            return true;
        }
        else {
            return false;
        }
    };
    PeoplePlane.prototype.getRooms = function () {
        return this.maxNumOfPassengers - this.currentNumOfPassengers;
    };
    return PeoplePlane;
}(Airplane));
var CargoPlane = /** @class */ (function (_super) {
    __extends(CargoPlane, _super);
    function CargoPlane(planeIdentification) {
        var _this = _super.call(this, planeIdentification) || this;
        _this.maxAmountOfCargo = 20;
        _this.currentCargo = 0;
        _this.type = AirplaneType.cargo;
        return _this;
    }
    CargoPlane.prototype.load = function (amountOfCargo) {
        if (this.currentCargo + amountOfCargo <= this.maxAmountOfCargo) {
            this.currentCargo += amountOfCargo;
            console.log("Airplane " + this.planeIdentification + "loads " + amountOfCargo + " tons cargo.");
        }
        else {
            var loaded = this.maxAmountOfCargo - this.currentCargo;
            var unloaded = amountOfCargo - loaded;
            console.log("Airplane " + this.planeIdentification + " loads " + loaded + " tons of cargo, " + unloaded + " tons do not fit.");
            this.currentCargo = this.maxAmountOfCargo;
        }
    };
    CargoPlane.prototype.unload = function () {
        console.log("Airplane " + this.planeIdentification + " discharges " + this.currentCargo + " tons of cargo.");
        this.currentCargo = 0;
    };
    CargoPlane.prototype.hasRooms = function () {
        if (this.currentCargo < this.maxAmountOfCargo) {
            return true;
        }
        else {
            return false;
        }
    };
    CargoPlane.prototype.getRooms = function () {
        return this.maxAmountOfCargo - this.currentCargo;
    };
    return CargoPlane;
}(Airplane));
var AirplaneType;
(function (AirplaneType) {
    AirplaneType[AirplaneType["people"] = 0] = "people";
    AirplaneType[AirplaneType["cargo"] = 1] = "cargo";
})(AirplaneType || (AirplaneType = {}));
var Airport = /** @class */ (function () {
    function Airport(airportName) {
        this.airplanes = [];
        this.airportName = airportName;
        var airplane1 = new PeoplePlane("ABC123");
        var airplane2 = new PeoplePlane("DDD888");
        var airplane3 = new PeoplePlane("ODL345");
        var airplane4 = new CargoPlane(("FF2134"));
        var airplane5 = new CargoPlane(("PLA166"));
        this.airplanes[0] = airplane1;
        this.airplanes[1] = airplane2;
        this.airplanes[2] = airplane3;
        this.airplanes[3] = airplane4;
        this.airplanes[4] = airplane5;
    }
    Airport.prototype.toString = function () {
        console.log("Aircrafts from airport " + this.airportName);
        console.log("Passenger planes from airport " + this.airportName);
        for (var _i = 0, _a = this.airplanes; _i < _a.length; _i++) {
            var airplane = _a[_i];
            if (airplane.type === AirplaneType.people) {
                console.log("Passenger plane " + airplane.planeIdentification);
            }
        }
        console.log("Cargo planes from airport " + this.airportName);
        for (var _b = 0, _c = this.airplanes; _b < _c.length; _b++) {
            var airplane = _c[_b];
            if (airplane.type === AirplaneType.cargo) {
                console.log("Cargo plane " + airplane.planeIdentification);
            }
        }
    };
    Airport.prototype.requestPlane = function (type, loadingAmount) {
        switch (type) {
            case AirplaneType.people:
                var isEmpty = true;
                for (var _i = 0, _a = this.airplanes; _i < _a.length; _i++) {
                    var aplane = _a[_i];
                    if (aplane.type === AirplaneType.people && !aplane.isCurrentlyFlying && aplane.hasRooms()) {
                        console.log("Plane " + aplane.planeIdentification + " requested. Is not flying, still room for " + aplane.getRooms() + " passengers.");
                        aplane.load(loadingAmount);
                        isEmpty = false;
                        break;
                    }
                }
                if (isEmpty) {
                    console.log("There is no available passenger plane.");
                }
                break;
            case AirplaneType.cargo:
                isEmpty = true;
                for (var _b = 0, _c = this.airplanes; _b < _c.length; _b++) {
                    var aplane2 = _c[_b];
                    if (aplane.type === AirplaneType.cargo && !aplane2.isCurrentlyFlying && aplane2.hasRooms()) {
                        console.log("Plane " + aplane2.planeIdentification + " requested. Is not flying, still room for " + aplane2.getRooms() + " tons cargo.");
                        aplane2.load(loadingAmount);
                        isEmpty = false;
                        break;
                    }
                }
                if (isEmpty) {
                    console.log("There is no available cargo plane.");
                }
                break;
        }
    };
    return Airport;
}());
//This part is for implemantation
var airport = new Airport('Eindhoven');
airport.requestPlane(AirplaneType.people, 40);
airport.toString();
airport.airplanes[0].load(40);
airport.airplanes[0].takeOff();
airport.airplanes[0].land();
airport.airplanes[0].unload();
