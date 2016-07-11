var router = require('express').Router();
var roomModel = require('./model');

router.get('/state', function(req, res) {
  // eventual ID can be added here as a parameter to getState
  roomModel.getState().then(function(state) {
    res.send(JSON.stringify(state));
  });
});

module.exports = router;
