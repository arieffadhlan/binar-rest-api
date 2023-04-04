const { v4: uuidv4 } = require('uuid');
const carData = require("../data/cars.json");

class Car{
    static cars = carData;

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
      return uuidv4();
    }

    static list() {
      return this.cars
    }
    
    static find(id) {
      const car = this.cars.find((i) => i.id === id);
      if (!car) return null;
  
      return car;
    }

    static create(params) {
      const car = new this(params);
  
      this.cars.push(car);
  
      return car;
    }

    update(params) {
      const index = this.constructor.cars.findIndex((cars) => cars.id === this.id);
  
      params.plate && (this.plate = params.plate);
      params.manufacture && (this.manufacture = params.manufacture);
      params.model && (this.model = params.model);
      params.image && (this.image = params.image);
      params.rentPerDay && (this.rentPerDay = params.rentPerDay);
      params.capacity && (this.capacity = params.capacity);
      params.description && (this.description = params.description);
      params.availableAt && (this.availableAt = params.availableAt);
      params.transmission && (this.transmission = params.transmission);
      params.available && (this.available = params.available);
      params.type && (this.type = params.type);
      params.year && (this.year = params.year);
      params.options && (this.options = params.options);
      params.specs && (this.specs = params.specs);
          
      this.constructor.cars[index] = this;
      
      return this;
    }
        
    delete() {
      this.constructor.cars = this.constructor.cars.filter((cars) => cars.id !== this.id);
    }
}

module.exports = Car;
