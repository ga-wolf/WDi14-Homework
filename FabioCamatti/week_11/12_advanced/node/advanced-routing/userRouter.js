// GET       /users        #index
// POST      /users        #create
// GET       /users/new    #new
// GET       /users/1      #show
// GET       /users/1/edit #edit
// PUT       /users/1      #update
// DELETE     /users/1     #destroy

var express = require('express');
var router = express.Router();

router.all(/.*/, function (req, res, next) {
  console.log("userRouter.js hit");
  next();
});

router.get('/',function (req, res) {
  res.send("All Users");
});

router.get('/:id',function (req, res) {
  res.send("User " + req.params.id);
});

module.exports = router;
