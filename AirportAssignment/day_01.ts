class Airplane {
    public planeIdentification: string;
    public maxNumOfPassengers: number;
    public currentNumOfPassengers: number = 0;
    public isCurrentlyFlying: boolean;
    public cruiseSpeed: number;

    constructor(planeIdentification: string){
        this.planeIdentification = planeIdentification;
    }

    public loadPassengers(numOfPassengers: number): void {
        this.currentNumOfPassengers +=numOfPassengers;
        console.log("Airplane " + this.planeIdentification + " loads " + numOfPassengers + " passengers.");
    }

    public unloadPassengers(): void {
        console.log("Airplane " + this.planeIdentification + " unloads " + this.currentNumOfPassengers + " passengers.");
        this.currentNumOfPassengers=0;
    }

    public takeOff(): void {
        this.isCurrentlyFlying = true;
        console.log("Airplane "+ this.planeIdentification+ " takes off.");
    }

    public land(): void {
        this.isCurrentlyFlying = false;
        console.log("Airplane "+ this.planeIdentification+ " lands.");
    }
}

const airplane1: Airplane = new Airplane('ABC123');
const airplane2: Airplane = new Airplane('DDD888');

airplane1.loadPassengers(40);
airplane1.takeOff();
airplane1.land();
airplane1.unloadPassengers();

airplane2.loadPassengers(60);
airplane2.takeOff();
airplane2.land();
airplane2.unloadPassengers();