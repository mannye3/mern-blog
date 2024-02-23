import express from "express";


const app = express();



app.listen(7000, (req, res) => {
    console.log("Server is running on 7000")
})