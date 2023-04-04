const express = require('express');
const handler = require("../controller/car-controller.js");
const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get("/cars", handler.handleListCars);
app.get("/cars/:id", handler.handleGetCar);
app.post("/cars", handler.handleCreateCar);
app.put("/cars/:id", handler.handleEditCar);
app.delete("/cars/:id", handler.handleDeleteCar);

app.listen(port, ()=>{
    console.log("Server jalan buka http://127.0.0.1:%d", port)
})