const Car = require("../model/car.js");

function checkCar(car, res) {
  if (!car) {
    return res.status(404).json({
      error: "Car not found!",
    });
  }
}

// Get all cars
function handleListCars(req, res) {
  const cars = Car.list();
  res.status(200).json(cars);
}

// Find car
function handleGetCar(req, res) {
  const car = Car.find(req.params.id);
  checkCar(car, res);
  res.status(200).json(car);
}

// Add car
function handleCreateCar(req, res) {
  const car = Car.create(req.body);
  res.status(201).json(car);
}

// Edit car
function handleEditCar(req, res) {
  const car = Car.find(req.params.id);
  checkCar(car, res);
  car.update(req.body);
  res.status(200).json(car);
}

// Delete car
function handleDeleteCar(req, res) {
  const car = Car.find(req.params.id);
  checkCar(car, res);
  car.delete()
  res.status(204).end();
}

module.exports = {
  handleListCars,
  handleGetCar,
  handleCreateCar,
  handleEditCar,
  handleDeleteCar  
};
  