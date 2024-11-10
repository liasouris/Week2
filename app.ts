type TVechile = {
    model: string,
    color: string,
    year: number,
    power: number,
}

let vehicle: TVechile = {
    model: 'Boring generic vehicle',
    color: 'red',
    year: 1993,
    power: 60,
}

console.log(vehicle);

interface IVehicle {
    model: string,
    color: string,
    year: number,
    power: number,
}

interface ICar extends IVehicle {
    bodyType: string,
    wheelCount?: number,
}

let car: ICar = {
    model: "Ford Focus",
    color: "Green",
    year: 2016,
    power: 150,
    bodyType: "Hatchback",
    wheelCount: 4,
}

interface IBoat extends IVehicle {
    draft: number,
}

let boat: IBoat = {
    model: "Bella",
    color: "Black",
    year: 2022,
    power: 100,
    draft: 0.42,
}

interface IPlane extends IVehicle {
    wingSpan: number,
}

let plane: IPlane = {
    model: "Boeing 777",
    color: "White",
    year: 2020,
    power: 170000,
    wingSpan: 65,
}

console.log(car);
console.log(boat);
console.log(plane);



class VehicleService<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }

    list(): T[] {
        return this.items;
    }
    
}

let cars = new VehicleService<ICar>();
let boats = new VehicleService<IBoat>();

cars.add(car);
boats.add(boat);

console.log(cars.list());