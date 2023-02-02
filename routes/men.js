var express = require('express');
const pool = require('./pool');
var router = express.Router();

router.get('/mens',function(req,res,next){
       res.render('mencategory')
})
router.get('/women',function(req,res,next){
        res.render('womencategory')
})
module.exports=router;
router.get('/hoodie',function(req,res,next){
      res.render('men-hoodie')
})

router.get('/fetchhoodie',function(req,res,next){
       pool.query(`Select * From adidas.products where category='Hoodie'`,function(error,result){
              if(error)
              {
               console.log(error)
                res.status(500).json([])
         
              }
              else if(result)
              {
                 console.log(result)
                 res.status(200).json({result:result})
              }
           })
       })
