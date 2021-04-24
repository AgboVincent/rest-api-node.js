const express = require('express');
const router = express.Router();
const Employer = require('../models/employer');


//get a list of xennon workers  from database
router.get('/xennon',function(req,res,next){

Employer.find({}).then(function(employer){
  res.send(employer);
});

});

// add a new worker to the database
router.post('/xennon',function(req,res,next){

 Employer.create(req.body).then(function(employer){
  res.send(employer);

}).catch(next);

});

//update a new worker salary
router.put('/xennon/:id',function(req,res,next){
  Employer.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Employer.findOne({_id:req.params.id}).then(function(employer){
      res.send(employer);
    });

  });

});

//delete a worker from database
router.delete('/xennon/:id',function(req,res,next){
Employer.findByIdAndRemove({_id:req.params.id}).then(function(employer){
  res.send(employer);
});


});


module.exports=router;
