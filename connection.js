const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const database = new MongoClient(uri).db('smf');

module.exports = database;