var express = require('express');
var router = express.Router();
var storyLine = require('../models/storyLine');
/* GET home page. */
router.get('/storyOne/:storyPart', function(req, res, next) {
  let storyOne = storyLine.stories.find(peep => {
    return peep.storyPart === parseInt(req.params.storyPart);
  });   
  res.render('beginning', { storyOne });
});
router.get('/storyTwo/:storyPart', function(req, res, next) {
  let storyTwo = storyLine.stories.find(peep => {
    return peep.storyPart === parseInt(req.params.storyPart);
  });
  res.render('middle', { storyTwo });
});
router.get('/storyThree/:storyPart', function(req, res, next) {
  let storyThree = storyLine.stories.find(peep => {
  return peep.storyPart === parseInt(req.params.storyPart);
  })
res.render('end', { storyThree });
});
module.exports = router;
Collapse

