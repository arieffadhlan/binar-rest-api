const Car =  require('./car.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// GET /cars (Get all cars)
app.get('/cars', (req, res) => {
    const cars = Car.list();
    res.status(200).json(cars);
});

// GET /cars/{id} (Find car)
app.get('/cars/:id', (req, res) => {
    const car = Car.find(req.params.id);

    if (!car) {
        return res.status(404).json({
            error: "Mobil tidak ditemukan."
        });
    }

    res.status(200).json(car);
});

// POST /cars (Add car)
app.post('/cars', (req, res) => {
    const car = Car.create(req.body);
    res.status(201).json(car);
});

// PUT /cars/{id} (Update car)
app.put('/cars/:id', (req, res) => {
    const car = Car.find(req.params.id);

    if (!car) {
        return res.status(404).json({
            error: "Mobil tidak ditemukan."
        });
    }

    car.update(req.body);
    res.status(200).json(car);
});

// DELETE /cars/{id} (Delete car)
app.delete('/cars/:id', (req, res) => {
    const car = Car.find(req.params.id);

    if (!car) {
        return res.status(404).json({
            error: "Mobil tidak ditemukan."
        });
    }

    car.delete()
    res.status(204).end();
});

app.listen(port, () => {
	console.log(`Server telah berhasil berjalan pada port http://localhost:${port}`);
});