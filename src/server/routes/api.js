const express = require('express');
const db = require('../models/models');

const router = express.Router();

// home/zip search
router.get('/products', (req, res) => {
  const query = `
    SELECT * FROM members
  `
  db.query(query)
  .then((data) => {
    console.log(data)
    res.json(data)
   } )
  console.log('hit home');
});

// products index
// this route may need to change -- this is just a placeholder
router.get('/:zip/products', (req, res) => {
  console.log('hit product');
});

// product add
// this route may need to change -- this is just a placeholder
router.post('/:zip/products', (req, res) => {
  console.log('zip post');
});

module.exports = router;
