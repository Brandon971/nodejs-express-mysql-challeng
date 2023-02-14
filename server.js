const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions ={
    origin:"http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res)=> {
    res.json({ message: "Welcome home "});
});

require("./app/routes/products.routes.js")(app)
// app.listen("...")


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}.`);
});
