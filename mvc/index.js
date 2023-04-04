const express = require('express');
const handler = require("./handler");
const middleware = require("./middleware");



const port = process.env.PORT || 8000;
const app = express();

// JSON parser middleware (membaca request yang dikirim menggunakan express.json() dgn format json
app.use(express.json());

app.get("/cars", handler.handleListCars);
app.post("/cars", handler.handleCreateCar);
app.get("/cars/:id", middleware.setCar, handler.handleGetCar);


// app.get('/cars', (req,res)=>{
//     const cars = Car.list();
//     res.status(200).json(cars);
// })

app.listen(port, ()=>{
    console.log("Server jalan buka http://127.0.0.1:%d", port)
})