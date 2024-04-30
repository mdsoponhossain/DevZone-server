require('dotenv').config();
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3g7cuab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = "mongodb://localhost:27017";

const connectionDB = async () => {
    try {
        console.log('server is connecting with database...');
        await mongoose.connect(uri, { dbName: 'documentation_DB' });
        console.log('server is connected with database...')
    } catch (error) {
        console.log('database connection failed...')
        console.log(error)
    } 
};

module.exports = connectionDB;