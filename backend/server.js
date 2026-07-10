const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {

    const { email, pass } = req.body;

    if (
        email === "anishde85@gmail.com" &&
        pass === "Abcd1234"
    ) {

        res.json({
            message: "Login Successful"
        });

    } else {

        res.status(401).json({
            message: "Invalid Email or Password"
        });

    }

});

app.get("/profile", (req, res) => {

    res.json({
        name: "tanish",
        email:"TANISH25@gmail.com",
        age: 23
    });

});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});