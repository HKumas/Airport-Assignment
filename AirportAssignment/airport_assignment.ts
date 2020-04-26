class Airplane {
    public planeIdentification: string;
    public maxNumOfPassengers: number = 100;
    public currentNumOfPassengers: number = 0;
    public isCurrentlyFlying: boolean;
    public cruiseSpeed: number;

    constructor(planeIdentification: string){
        this.planeIdentification = planeIdentification;
    }

    public loadPassengers(numOfPassengers: number): void {
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

    public unloadPassengers(): void {
        console.log("Airplane " + this.planeIdentification + " discharges " + this.currentNumOfPassengers + " passengers.");
        this.currentNumOfPassengers=0;
    }

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

class Airport {
    public airportName: string;
    public airplanes: Airplane[] = [];

    constructor(airportName: string) {
        this.airportName = airportName;
        const airplane1: Airplane = new Airplane("ABC123");
        const airplane2: Airplane = new Airplane("DDD888");
        const airplane3: Airplane = new Airplane("ODL345");
        this.airplanes[0] = airplane1;
        this.airplanes[1] = airplane2;
        this.airplanes[2] = airplane3;
    }

    public printAll(): void {
        console.log("Aircraft from airport " + this.airportName);
        for (var airplane of this.airplanes) {
            console.log("Airplane " + airplane.planeIdentification);
        }
    }

    public requestPlane(): Airplane {
        for (var aplane of this.airplanes) {
            if (!aplane.isCurrentlyFlying && aplane.hasRooms()) {
                console.log("Plane " + aplane.planeIdentification + " requested. Is not flying, still room for " + aplane.getRooms() + " passengers.");
                return aplane;
            }
        }
    return  null;
    }
}

const airplane1: Airplane = new Airplane('ABC123');
const airplane2: Airplane = new Airplane('DDD888');

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

const airport: Airport = new Airport('Eindhoven');
airport.printAll();
airport.requestPlane();