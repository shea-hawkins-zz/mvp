var router = require('express').Router();

// Handles API endpoint calls.

// When the router is large enough, graphql will be used for the data lists
// and a call to something like '/pointCloud:id' will stream the pointCloud
// information
router.get('/', function(req, res) {
  res.sendFile(__dirname + '/../client/index.html');
});

module.exports = router;
