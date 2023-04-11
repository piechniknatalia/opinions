const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");


// Routers
const opinionRouter = require('./routes/Opinions');
app.use("/opinions", opinionRouter);

db.sequelize.sync().then(() => {
    app.listen(4001, () => {
        console.log("Server running on port 4001");
    });
});

