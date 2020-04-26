abstract class Airplane {
    public planeIdentification: string;
    public isCurrentlyFlying: boolean;
    public cruiseSpeed: number;
    public type: AirplaneType;

    constructor(planeIdentification: string){
        this.planeIdentification = planeIdentification;
    }

    public abstract load(numOfPassengers: number): void;
    public abstract unload(): void;
    public abstract getRooms(): number;
    public abstract hasRooms(): boolean;

    public takeOff(): void {
        if(this.isCurrentlyFlying){
            console.log("Airplane "+ this.planeIdentification+ " can not take off, because we are already flying.");
        }
        else{
            console.log("Airplane "+ this.planeIdentification+ " rises.");
            this.isCurrentlyFlying = true;
        }
    }

    public land(): void {
        if(!this.isCurrentlyFlying){
            console.log("Airplane "+ this.planeIdentification+ " can not land, because we are still on the ground.");
        }
        else{
            console.log("Airplane "+ this.planeIdentification+ " lands.");
            this.isCurrentlyFlying = false;
        }
    }
}

class PeoplePlane extends Airplane{
    public maxNumOfPassengers: number = 100;
    public currentNumOfPassengers: number = 0;
    
    constructor(planeIdentification: string){
        super(planeIdentification);
        this.type = AirplaneType.people;
    }

    public load(numOfPassengers: number): void {
        if (this.currentNumOfPassengers + numOfPassengers <= this.maxNumOfPassengers) {
            this.currentNumOfPassengers += numOfPassengers;
            console.log("Airplane " + this.planeIdentification + " loads " + numOfPassengers + " passengers.");
        }
        else{
            const loaded: number = this.maxNumOfPassengers-this.currentNumOfPassengers;
            const unloaded: number = numOfPassengers-loaded;
            console.log("Airplane "+ this.planeIdentification+ " charges " + loaded+ " passengers, "+ unloaded+ " do not fit.");
            this.currentNumOfPassengers= this.maxNumOfPassengers;
        }
    }

    public unload(): void {
        console.log("Airplane " + this.planeIdentification + " discharges " + this.currentNumOfPassengers + " passengers.");
        this.currentNumOfPassengers=0;
    }


    public  hasRooms(): boolean{
        if(this.currentNumOfPassengers < this.maxNumOfPassengers){
            return  true;
        }else{
            return  false;
        }
    }

    public getRooms(): number{
        return  this.maxNumOfPassengers-this.currentNumOfPassengers;
    }
}

class CargoPlane extends Airplane{    
    public maxAmountOfCargo: number = 20;
    public currentCargo: number = 0;

    constructor(planeIdentification: string){
        super(planeIdentification);
        this.type = AirplaneType.cargo;        
    }

    public load(amountOfCargo: number): void {

        if (this.currentCargo + amountOfCargo <= this.maxAmountOfCargo) {
            this.currentCargo += amountOfCargo;
            console.log("Airplane " + this.planeIdentification + "loads " + amountOfCargo + " tons cargo.");
        }
        else{
            const loaded: number= this.maxAmountOfCargo-this.currentCargo;
            const unloaded: number= amountOfCargo -loaded;
            console.log("Airplane "+ this.planeIdentification+ " loads " + loaded+ " tons of cargo, "+ unloaded+ " tons do not fit.");
            this.currentCargo= this.maxAmountOfCargo;
        }

    }

    public unload(): void {
        console.log("Airplane " + this.planeIdentification + " discharges " + this.currentCargo + " tons of cargo.");
        this.currentCargo=0;
    }

    public  hasRooms(): boolean{
        if(this.currentCargo < this.maxAmountOfCargo){
            return  true;
        }else{
            return  false;
        }
    }

    public getRooms(): number{
        return  this.maxAmountOfCargo-this.currentCargo;
    }
}

enum AirplaneType {
    people,
    cargo
}

class Airport {
    public airportName: string;
    public airplanes: Airplane[] = [];

    constructor(airportName: string) {
        this.airportName = airportName;
        const airplane1: Airplane = new PeoplePlane("ABC123");
        const airplane2: Airplane = new PeoplePlane("DDD888");
        const airplane3: Airplane = new PeoplePlane("ODL345");
        const airplane4: Airplane = new CargoPlane(("FF2134"));
        const airplane5: Airplane = new CargoPlane(("PLA166"));
        this.airplanes[0] = airplane1;
        this.airplanes[1] = airplane2;
        this.airplanes[2] = airplane3;
        this.airplanes[3] = airplane4;
        this.airplanes[4] = airplane5;
    }

    public toString(): void {
        console.log("Aircrafts from airport " + this.airportName);
        console.log("Passenger planes from airport " + this.airportName);
        for (var airplane of this.airplanes) {
            if(airplane.type === AirplaneType.people) {
                console.log("Passenger plane " + airplane.planeIdentification);
            }
        }
        console.log("Cargo planes from airport " + this.airportName);
        for (var airplane of this.airplanes) {
            if(airplane.type === AirplaneType.cargo) {
                console.log("Cargo plane " + airplane.planeIdentification);
            }
        }
    }

    public requestPlane(type: AirplaneType, loadingAmount: number): void {        

        switch (type) {
            case AirplaneType.people:
                let isEmpty: boolean =true;
                for (var aplane of this.airplanes) {

                    if (aplane.type === AirplaneType.people && !aplane.isCurrentlyFlying && aplane.hasRooms()) {
                        console.log("Plane " + aplane.planeIdentification + " requested. Is not flying, still room for " + aplane.getRooms() + " passengers.");
                        aplane.load(loadingAmount);
                        isEmpty=false;
                        break;
                    }

                }
                if(isEmpty) {
                    console.log("There is no available passenger plane.");
                }
                break;
            case AirplaneType.cargo:
                isEmpty=true;
                for (var aplane2 of this.airplanes) {
                    if (aplane.type === AirplaneType.cargo && !aplane2.isCurrentlyFlying && aplane2.hasRooms()) {
                        console.log("Plane " + aplane2.planeIdentification + " requested. Is not flying, still room for " + aplane2.getRooms() + " tons cargo.");
                        aplane2.load(loadingAmount);
                        isEmpty=false;
                        break;
                    }
                }
                if(isEmpty) {
                    console.log("There is no available cargo plane.");
                }
                break;
        }
    }
}


//This part is for implemantation
const airport: Airport = new Airport('Eindhoven');

airport.requestPlane(AirplaneType.people, 40);
airport.toString();
airport.airplanes[0].load(40);
airport.airplanes[0].takeOff();
airport.airplanes[0].land();
airport.airplanes[0].unload();