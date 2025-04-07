// config/connectDatabase.js
const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URL)
        .then((con) => {
            console.log("Mongoose connected to host: " + con.connection.host);
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err.message);
        });
};

module.exports = connectDatabase;
