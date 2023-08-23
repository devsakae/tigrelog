const express = require('express');
const db = require('../connection');
const route = express.Router();

route.get('/name/:name', async (req, res) => {
  try {
    const response = await db.collection('boards').findOne({ name: { $regex: req.params.name, $options: 'i' } });
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err.message);
  };
});

route.get('/', async (req, res) => {
  try {
    const response = await db.collection('boards').find().toArray();
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json(err.message);
  };
});

module.exports = route;