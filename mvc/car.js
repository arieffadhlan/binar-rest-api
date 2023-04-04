const cars = require("./data/cars.json")

class Car{
    static records = cars;


    constructor(params){
       
        this.id = this._generateId();
        this.plate = params.plate;
        this.manufacture = params.manufacture;
        this.model = params.model;
        this.image = params.image;
        this.rentPerDay = params.rentPerDay;
        this.capacity = params.capacity;
        this.description = params.description;
        this.transmission = params.transmission;
        this.available = params.available;
        this.type = params.type;
        this.year = params.year;
        this.options = params.options;
        this.specs = params.specs;
        this.availableAt = params.availableAt;
      }

      _generateId() {
        this.constructor.cars.length + 1
      }

      static create(params) {
        const car = new this(params);
    
        this.records.push(car);
    
        return car;
      }
    

      static find(id) {
        const car = this.records.find((i) => i.id === Number(id));
        if (!car) return null;
    
        return car;
      }

      static list() {
        return this.records
      }

}


module.exports = Car;
