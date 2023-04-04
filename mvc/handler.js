const Car = require("./car");

function handleCreateCar(req, res) {
    const car = Car.create(req.body);
  
    res.status(201).json(car);
  }
  

function handleListCars(req,res) {
    const cars = Car.list();

    res.status(200).json(cars);
}

function handleGetCar(req, res) {
    const car = Car.find(req.params.id);
  
    res.status(200).json(car);
  }
  

module.exports = {
    handleCreateCar,
    handleListCars,
    handleGetCar,
    
  };
  