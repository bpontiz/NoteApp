const mongoose = require('mongoose');

const databaseName = process.env.DB_NAME 
    ? process.env.DB_NAME 
    : 'mongodb://localhost/noteAppTest';

mongoose.set("strictQuery", false);

mongoose.connect(databaseName, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Database succesfully connected.");
});