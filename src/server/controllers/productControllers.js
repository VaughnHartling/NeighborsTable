const db = require('../models/models.js');
const productControllers = {};
// read portion of CRUD 
productControllers.getZip = (req,res,next) =>{

const zipGetReq = `SELECT p.title,p.price,p.zip,p.description,s.name,s.about
FROM product p
INNER JOIN seller s
ON p.seller_id = s.seller_id
WHERE p.zip = $1`

const zip = [req.params.zip]; 

console.log(zip)

db.query(zipGetReq, zip)
  .then((products) => {
    //rows is  a property on the response obj from the promise obj. It is an array of objects 
    console.log(products.rows)
    res.locals.products = products.rows
    next()
  })
  //next({e: 'error on controllers get zip'}
  .catch(e => console.log(e))
}
// 
productControllers.productSave = (req, res, next) => {
  const { title, price, zip, description, sellerId } = req.body.product
  const values = [title, price, zip, description, sellerId]
  // create portion of CRUD 
  const saveProduct = ` INSERT INTO product(title,price,zip,description,seller_id)
  VALUES ($1,$2,$3,$4,$5)`;
  db.query(saveProduct,values)
    .then(products => {
      console.log(products.rows[0])  
      next()
    })
    .catch(e => {
      console.log(e)
      next({e: 'error on controller product save'})
    })
  }

productControllers.sellerSave = (req, res, next) => {
    const { name, zip } = req.body;
    const values = [name, zip];
    const sellerSaveQuery = ` INSERT INTO select(name,zip)
    VALUES ($1,$2)`;
  db.query(sellerSaveQuery, values)
    .then(sellers => {
      console.log(sellers.rows[0])
      next()
    })
    .catch(e => next({e: 'error on controller seller save'}))
  };
  module.exports = productControllers;
